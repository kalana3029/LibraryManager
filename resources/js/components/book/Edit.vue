<template>
	<div>
		<div class="d-flex flex-row justify-content-between">
			<h2>{{ this.$route.meta.title }}</h2>
			<div>
				<button class="btn btn-primary" @click="save">Save</button>
				<router-link
					:to="{ name: 'admin.routers' }"
					role="button"
					class="btn btn-secondary text-nowrap"
					>Cancel</router-link
				>
			</div>
		</div>
		<div class="card mt-5">
			<div class="card-body">
				<book-form ref="form" :book="book"></book-form>
			</div>
		</div>
	</div>
</template>

<script>
import book from "../../library/book";
import BookForm from "../forms/BookForm.vue";

export default {
	components: {
		BookForm,
	},
	data() {
		return {
			loading: true,
			book: {},
		};
	},

	created() {
		this.init();
	},

	methods: {
		/**
		 * Setup the page.
		 *
		 * @returns {undefined}
		 */
		init() {
			let id = this.$route.params.id;

			this.get(id).then(() => {
				this.$route.meta.title = this.book.title;
			});
		},

		/**
		 * Get the support package.
		 *
		 * @param {int} id
		 * @returns {Promise}
		 */
		get(id) {
			return book.get(id).then((res) => {
				let { status, data } = res.data;

				this.book = data.book;
			});
		},

		save() {
			if (!this.$refs.form.validate()) {
				return false;
			}

			book.update(this.book).then((res) => {
				const { status, message } = res.data;

				if (status) {
					this.$router.push({ name: "admin.books" });
				}
			});
		},
	},
};
</script>

<style>
</style>