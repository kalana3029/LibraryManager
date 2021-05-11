<template>
	<div>
		<div class="d-flex flex-row justify-content-between">
			<h2>{{ this.$route.meta.title }}</h2>
			<div>
				<button class="btn btn-primary" @click="add">Create</button>
				<router-link
					:to="{ name: 'admin.books' }"
					role="button"
					class="btn btn-secondary text-nowrap"
					>Cancel</router-link
				>
			</div>
		</div>
		<template>
			<div class="card mt-5">
				<div class="card-body">
                    <book-form ref="form"></book-form>
                </div>
			</div>
		</template>
	</div>
</template>

<script>
import book from "../../library/book";
import BookForm from '../forms/BookForm.vue';

export default {
	components: {BookForm},

	data() {
		return {};
	},

	computed: {
		book() {
			return this.$refs.form.book;
		},
	},

	created() {},

	methods: {
		add() {
			if (!this.$refs.form.validate()) {
				return false;
			}

			book.create(this.book)
				.then((res) => {
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