<template>
	<form @submit.prevent="login" class="form-signin">
		<img
			class="mb-4"
			src="/images/logo.jpg"
			alt=""
			width="100"
			height="100"
		/>
		<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
		<label for="inputEmail" class="sr-only">Email address</label>
		<input
			type="email"
			id="inputEmail"
			class="form-control"
			placeholder="Email address"
			required
			autofocus
			v-model="email"
			:class="{ 'is-invalid': $v.email.$error }"
		/>
		<label for="inputPassword" class="sr-only">Password</label>
		<input
			type="password"
			id="inputPassword"
			class="form-control"
			placeholder="Password"
			required
			v-model="password"
			:class="{ 'is-invalid': $v.password.$error }"
		/>
		<button class="btn btn-lg btn-primary btn-block" type="submit">
			Sign in
		</button>
	</form>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import auth from '../library/auth';
export default {
    data () {
        return {
            email: "",
            password: ""
        }
    },
    validations: {
		email : {
            required,
            email
        },
        password : {
            required
        }
	},
    methods : {
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
        login() {
            if (!this.validate()) {
				return false;
			}

			auth.login(this.email,this.password)
				.then((res) => {
					const { status, message,data } = res.data;

					if (status) {
						this.$store.dispatch('setUser',data.user);
						this.$router.push({ name: "admin.books" });
					}
				});
        }
    }
}
</script>
<style scoped>
html,
body {
	height: 100%;
}

body {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
	background-color: #f5f5f5;
}

.form-signin {
	width: 100%;
	max-width: 330px;
	padding: 15px;
	margin: auto;
}
.form-signin .checkbox {
	font-weight: 400;
}
.form-signin .form-control {
	position: relative;
	box-sizing: border-box;
	height: auto;
	padding: 10px;
	font-size: 16px;
}
.form-signin .form-control:focus {
	z-index: 2;
}
.form-signin input[type="email"] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>