<template>
	<div>
		<login></login>
	</div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
	components: { Login },
	name: "login-layout",
	date() {
		return {
			email: "",
			password: "",
		};
	},
};
</script>
