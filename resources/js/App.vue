<template>
	<div class="app">
		<admin-layout v-if="this.$route.meta.layout == 'admin'"></admin-layout>
		<login-layout v-if="this.$route.meta.layout == 'login'"></login-layout>
	</div>
</template>

<script>
import AdminLayout from "./layout/AdminLayout.vue";
import LoginLayout from "./layout/LoginLayout.vue";

export default {
	name: "app",
	components: {
		AdminLayout,
		LoginLayout,
	},
};
</script>