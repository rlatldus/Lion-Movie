<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />
		<Menu />
		<!-- Content -->
		<router-view />
	</div>
	<div class="app" v-if="!$route.meta.hideFooter">
		<Footer />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
// import Setting from './components/Setting.vue'
// import About from './components/About.vue'
// import KakaoMap from './components/KakaoMap.vue';
import Menu from './components/views/Menu.vue';
// import Home from './components/Home.vue'
// import Favorite from './components/views/Favorite.vue';
// import Login from './components/views/Login.vue';
// import Search from './components/Search.vue';
import Footer from './components/common/footer/Footer.vue';



</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 160px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		// @media (max-width: 00px) {
		// 	padding-left: 6em;
		// }
		@media (min-width: 550px) {
			padding-left: 6em;
		}

		@media (max-width:549px) {

			margin-top: 2em;



		}
	}
}
</style>
<script>


</script>