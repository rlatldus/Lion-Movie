<template>
	<main class="About">
		<div class="kakaoMap">
			<KakaoMap />
		</div>
		<div id="wrapper">
			<div class="info_wrapper">
				<div class="info">
					<h2 class="address_title">ADDRESS</h2>
					<p class="address">서울특별시 노원구 상계로 1길 34<br> 5층 코리아 IT 아카데미</p>
				</div>
				<div class="info2">
					<h2 class="tel_title">TEL</h2>
					<p class="tel"> 02-933-5890</p>
				</div>
			</div>
			<div class="contact_wrapper">
				<div class="contact">
					<h2 class="contact_title" @click="isModalViewed = true" click="sendEmail">Contact us</h2>
					<div class="contact_form">
						<ContactUs />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import Content from './../common/contents/Content.vue'
import ModalView from './../common/modal/ModalView.vue';
import Content2 from './../common/contents/Content2.vue'
import ModalView2 from './../common/modal/ModalView2.vue';
import KakaoMap from './../common/kakaomap/KakaoMap.vue';
import ContactUs from './../common/mail/ContactUs.vue';

export default {
	name: 'About',
	components: {
		KakaoMap,
		Content,
		ModalView,
		Content2,
		ModalView2,
		ContactUs,
	},
	data() {
		return {
			isModalViewed: false,
			isModalViewed2: false
		}
	},

}





</script>


<style lang="scss" scoped>
* {
	text-decoration: none;
	list-style: none;
}

main {

	height: 100%;
	min-height: 100vh;

	background-color: rgb(40, 65, 91);

	#wrapper {

		transition: 0.7s ease-in-out;
		height: 300px;
		width: 830px;
		margin: 0 auto;
	}

	.info_wrapper {
		width: 50%;
		float: left;
	}

	.info,
	.info2 {

		max-height: 155px;
		position: relative;
	}


	.address_title,
	.tel_title,
	.contact h2 {
		height: 24px;
		border-bottom: 2px solid rgb(170, 216, 214);
		font-size: 1.1em;
		margin-bottom: 0.3em;

	}

	.info p,
	.info2 p {
		width: 100%;
		text-align: right;
		float: right;
		padding: 10px;
		// margin-left: 6.5em;
		margin-bottom: 0em;

	}



	.info,
	.info2,
	.contact {

		font-weight: bold;
		width: 100%;
		margin-top: 1.5em;
		margin-bottom: 1.5em;
		padding: 2em;
		color: hwb(210 80% 15% / 0.683);
	}

	.contact {
		width: 50%;
		float: right;
	}

	.contact_form {
		width: 350px;
		margin-left: 15px;
	}




	@media (min-width: 350px) and (max-width : 1023px) {

		// *{border:2px solid gold}
		.kakaoMap {
			width: 100%;
			margin: 0 auto;
		}

		#wrapper {
			width: 100%;
			margin: 0 auto;
		}

		.info_wrapper {
			width: 100%;
		}


		.info {
			height: 11em;
		}

		.info,
		.info2,
		.contact {
			font-size: 0.9em;
			width: 100%;

		}

		.contact_form {
			width: 100%;
		}

		.info p,
		.info2 p {
			margin-top: 15px;
			text-align: right;
			float: right;
			width: 100%;
			margin-bottom: 0em;


		}

		.contact_form {
			margin-left: 0px;
		}
	}

	@media (min-width: 350px) and (max-width : 549px) {}
}</style>







