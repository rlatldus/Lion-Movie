<template>
	<div class="background"></div>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="aside">
			<div class="logo">
				<img :src="logoURL" alt="MainLogo" />
			</div>

			<h3>Menu</h3>
			<div class="menu">
				<router-link to="/" class="button">
					<span class="material-icons">home</span>
					<span class="text">Home</span>
				</router-link>
				<router-link to="/search" class="button">
					<span class="material-icons">search</span>
					<span class="text">Search</span>
				</router-link>
				<router-link to="/favorite" class="button">
					<span class="material-icons">favorite</span>
					<span class="text">Favorites</span>
				</router-link>
				<router-link to="/aboutus" class="button">
					<span class="material-icons">travel_explore</span>
					<span class="text">About us</span>
				</router-link>
			</div>

			<div class="flex"></div>

			<div class="menu sidemenu">
				<router-link to="/login" class="button">
					<span class="material-icons">login</span>
					<span class="text">Login</span>
				</router-link>
				<router-link to="/register" v-if="!token" class="button">
					<span class="material-icons">person_add_alt</span>
					<span class="text">Register</span>
				</router-link>

			</div>


		</div>
	</aside>
</template>

<script>
import { mapGetters } from 'vuex';
import { ref } from 'vue';
import logoURL from '../assets/logo.png';

export default {
	//로그인시 ui 변경 가능
	computed: {
		...mapGetters(["getToken"]),
		token() {
			return this.getToken;
		}
	},
	setup() {
		const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
		const ToggleMenu = () => {
			is_expanded.value = !is_expanded.value;
			localStorage.setItem("is_expanded", is_expanded.value);
		};

		return {
			is_expanded,
			ToggleMenu,
			logoURL,
		};
	}
}
</script>

<style lang="scss" scoped>
.background {
	background-color: var(--dark);
	position: relative;
	min-height: 100vh;
}

aside {
	position: relative;
	z-index: 999;
}

.aside {
	display: flex;
	flex-direction: column;
	position: fixed;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	position: fixed;



	@media (min-width: 350px) and (max-width : 549px) {
		display: none;

	}

	.flex {
		flex: 1 1 0%
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {

		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
}
</style>