<template>
	<div>
		<div class="d-flex flex-row justify-content-between">
			<h2>{{ this.$route.meta.title }}</h2>
			<div>
				<router-link
					:to="{ name: 'admin.books.add' }"
					role="button"
					class="btn btn-primary text-nowrap"
					><i class="fa fa-plus"></i> &nbsp; Add New</router-link
				>
			</div>
		</div>
		<div class="card mt-5">
			<div class="card-header">
				<div class="d-flex flex-row justify-content-between">
					<div class="col-md-8">
						<div class="row">
							<div class="col-md-3">
								<input
									type="text"
									placeholder="by title / author"
									class="form-control input-search"
									v-model="searchTerm"
								/>
							</div>
							<div class="col-md-3">
								<select
									v-model="serachCategory"
									class="form-control"
									id="category"
									placeholder="by category"
								>
									<option
										v-for="category in categories"
										:value="category.id"
										:key="category.id"
									>
										{{ category.name }}
									</option>
								</select>
							</div>
							<div class="col-md-2">
								<a class="btn btn-outline-secondary" @click="search"><i class="fa fa-search"></i></a>
								<a class="btn btn-outline-warning" @click="reset"><i class="fa fa-close"></i></a>
							</div>
						</div>
					</div>
					<div class="pull-right">
						<a
							@click="deleteBtnSubmit"
							class="btn btn-outline-secondary"
							:class="{ disabled: !deleteBtnToggle }"
							>Delete</a
						>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="table-responsive" v-if="books.length">
					<table class="table table-striped table-middle table-hover">
						<thead>
							<tr>
								<th>
									<input type="checkbox" @click="checkAll" />
								</th>
								<th>ISBN</th>
								<th>Category</th>
								<th>Title</th>
								<th>Availability</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="filObj in books"
								:key="'book' + filObj.id"
							>
								<td>
									<input
										type="checkbox"
										v-model="filObj.checked"
										@click="checkBook(filObj.id)"
									/>
								</td>
								<td>
									{{ filObj.isbn }}
								</td>
								<td>
									{{ filObj.category }}
								</td>
								<td>
									{{ filObj.title }}
								</td>
								<td>
									<span
										v-if="filObj.availbility"
										class="badge badge-success text-success"
										>Available</span
									>
									<span
										v-else
										class="badge badge-danger text-danger"
										>Unavailable</span
									>
								</td>
								<td>
									<router-link
										:to="{
											name: 'admin.books.edit',
											params: { id: filObj.id },
										}"
										class="btn btn-sm btn-link"
										title="Edit"
										><i class="fa fa-pencil"></i></router-link
									>
									<a
                                        @click="deleteObject(filObj.id)"
                                        class="btn btn-sm btn-link"
                                        title="Remove"
                                        ><i class="fa fa-trash text-danger"></i
                                    ></a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<template v-else> No books have been added. </template>
			</div>
		</div>
	</div>
</template>

<script>
import book from "../../library/book";
import category from "../../library/category";

export default {
	data() {
		return {
			loading: true,
			books: [],
			searchTerm: "",
			serachCategory: "",
			categories: []
		};
	},
	computed : {
		deleteBtnToggle() {
            let status = false;

            for (let key in this.books) {
                if (this.books[key].checked) {
                    status = true;
                    break;
                }
            }

            return status;
        }
	},
	created() {
		this.getCategories();
		this.getBooks("?basic=on");
	},
	methods: {
		getCategories() {
			return category
				.getAll()
				.then((res) => {
					const { status, data } = res.data;

					this.categories = data.categories;
				})
				.catch((err) => console.log(err));
		},
		getBooks(querystring) {
			return book
				.getAll(querystring)
				.then((res) => {
					const { status, data } = res.data;

					data.books.forEach((obj) => {
						obj.checked = false;
					});

					this.books = data.books;
				})
				.catch((err) => console.log(err));
		},
		checkBook(id) {
			let bookIndex = this.books.findIndex((obj) => obj.id === id);
			this.books[bookIndex].checked = !this.books[bookIndex].checked;
		},
		checkAll() {
			this.books.forEach((obj) => {
				obj.checked = !obj.checked;
			});
		},
		search() {
			this.getBooks(`?basic=on&term=${this.searchTerm}&category=${this.serachCategory}`);
		},
		reset() {
			this.searchTerm = "";
			this.serachCategory = "";
			this.getBooks("?basic=on");
		},
		/**
         * Delete a object.
         *
         * @param {Number} id
         * @returns {Boolean}
         */
        deleteObject(id) {
            const bookObj = this.books.find((obj) => obj.id === id);
            const index = this.books.indexOf(bookObj);

            if (
                !confirm(
                    `Are you sure you want to delete the ${bookObj.title}?`
                )
            ) {
                return false;
            }

            book.delete(bookObj.id)
                .then((res) => {
                    const { status, message } = res.data;

                    if (status === 1) {
                        this.books.splice(index, 1);
                    }

                })
                .catch((err) => {
                   console.log(err);
                });
        },

        /**
         * Handle delete button submission.
         *
         * @returns {Boolean}
         */
        deleteBtnSubmit() {
            if (!confirm("Are you sure you want to delete?")) {
                return false;
            }

            let pendingDeletion = this.books.filter(
                (book) => book.checked === true
            );
            let safe = this.books.filter((obj) => obj.checked === false);

            pendingDeletion.forEach((obj) => {
                book.delete(obj.id);
            });

            this.books = safe;
        },
	},
};
</script>