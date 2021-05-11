<template>
	<div>
		<div class="form-group">
			<label for="isbn">ISBN</label>
			<input
				type="text"
				id="isbn"
				class="form-control"
				:class="{ 'is-invalid': $v.book.isbn.$error }"
				v-model="book.isbn"
			/>
		</div>
		<div class="form-group">
			<label for="title">Title</label>
			<input
				type="text"
				id="title"
				class="form-control"
				:class="{ 'is-invalid': $v.book.title.$error }"
				v-model="book.title"
			/>
		</div>
		<div class="form-group">
			<label for="category">Category</label>
			<select
                v-model="book.category_id"
				class="form-control"
				:class="{ 'is-invalid': $v.book.category_id.$error }"
				id="category"
			>
				<option>Select</option>
				<option
					v-for="category in categories"
					:value="category.id"
					:key="category.id"
				>
					{{ category.name }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<label for="author">Author</label>
			<input
				type="text"
				id="author"
				class="form-control"
				:class="{ 'is-invalid': $v.book.author.$error }"
				v-model="book.author"
			/>
		</div>
		<div class="form-group">
			<label for="price">Price ($)</label>
			<input
				type="text"
				id="price"
				class="form-control"
				:class="{ 'is-invalid': $v.book.price.$error }"
				v-model="book.price"
			/>
		</div>
		<div class="form-group mt-3">
			<input
                v-model="book.availbility"
				class="form-check-input"
				type="checkbox"
				:true-value="true"
				:false-value="false"
				id="availbility"
				:class="{ 'is-invalid': $v.book.availbility.$error }"
			/>
			<label for="availbility">Availbility</label>
		</div>
	</div>
</template>
<script>
import { required, decimal } from "vuelidate/lib/validators";
import category from "../../library/category";

export default {
	props: {
		book: {
			type: Object,
			default: () => ({
				isbn: "",
				title: "",
				category_id: "",
				author: "",
				price: "",
				availbility: "",
			}),
		},
	},

	validations: {
		book: {
			isbn: {
				required,
			},
			title: {
				required,
			},
			category_id: {
				required,
			},
			author: {
				required,
			},
			price: {
				required,
				decimal,
			},
			availbility: {
				required,
			},
		},
	},
	data() {
		return {
			categories: [],
		};
	},
	created() {
		this.getCategories();
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
		/**
		 * Validate the input.
		 *
		 * @returns {Boolean}
		 */
		validate() {
			// Touch begins validation.
			this.$v.$touch();
			return !this.$v.$invalid;
		},
	},
};
</script>