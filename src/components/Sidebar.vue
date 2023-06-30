<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="logo"/> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
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
				<span class="text" v-if="!token">Login</span>
				<span class="text" v-else>Logout</span>
			</router-link>
			<router-link to="/setting" class="button">
				<span class="material-icons">person_add_alt</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script>
	import {mapState} from 'vuex';
	import {ref, computed} from 'vue';
	import logoURL from '../assets/logo.png';

	export default {
		computed: {
		...mapState(['user', 'token'])
	},
	setup() {
		const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
		const ToggleMenu = () => {
		is_expanded.value = !is_expanded.value;
	localStorage.setItem("is_expanded", is_expanded.value);
		};

		const currentToken = computed(() => {
			return this.token;
		});
	return {
		is_expanded,
		ToggleMenu,
		logoURL,
		currentToken
	};
	}
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;

	@media (min-width: 350px) and (max-width : 549px) {
		width: calc(2em + 32px);
		
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

	
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	
	h3, .button .text {
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

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
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

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	// @media (max-width: 0px) {
	// 	position: absolute;
	// 	z-index: 99;
	// }

	@media (min-width: 550px) and (max-width : 1023px) {
		aside {
	
	width: calc(2rem + 20px);


		}
	}
	@media (min-width: 350px) and(max-width : 549px) {
	
	
		.menu-toggle-wrap{
					display: none;
				}
		.menu {
		margin: 0 -1rem;
		
		.button {
			padding: 0.5em 1.03em;

			.material-icons {
				
				font-size: 1.7rem;
			}
	
			}
		}
		&.is-expanded {
			width: calc(3rem + 2px);

		}
	}
	
}



</style>