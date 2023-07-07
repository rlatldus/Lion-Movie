<template>
	<main class="About">
		<div class="kakaoMap">
		<KakaoMap/>
		</div>
		<div id="wrapper">
		<div class="info">
			<h2 class="address_title">
				
				ADDRESS
			</h2>
			<p class="address">서울특별시 노원구 상계로 1길 34<br> 5층 코리아 IT 아카데미</p>
			<div>
			<h2 class="tel_title">TEL</h2>
			<p class="tel">	02-933-5890</p>
			</div>
		</div>
			<div class="contact">
				<h2 >Contact us</h2>
				<ul> 
					
								<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
									<ContactUs />
								</ModalView>
					<li class="modalView email" @click="isModalViewed = true" click="sendEmail">bokyh0327@gmail.com</li>
					<li class="modalView email" @click="isModalViewed = true"  click="sendEmail">djagmlwnn12@gmail.com</li>
					<li class="modalView email" @click="isModalViewed = true"  click="sendEmail">bokbok1234@nate.com</li>
				</ul>
			
			</div>
		</div>
	</main>
</template>

<script>
import Content from './common/Content.vue'
import ModalView from './common/ModalView.vue';
import Content2 from './common/Content2.vue'
import ModalView2 from './common/ModalView2.vue';
import KakaoMap from './KakaoMap.vue';
import ContactUs from './common/mail/ContactUs.vue';

export default{
	name:'About',
	components:{
		KakaoMap,
		Content,
		ModalView,
		Content2,
		ModalView2,
		ContactUs,
	},
	data(){
		return{
			isModalViewed:false,
			isModalViewed2:false
		}
	},
	
}
	
	
	


</script>


<style lang="scss" scoped>



*{
	text-decoration: none;
	list-style:none;
}

main{
	
	height: 100%;
	min-height: 100vh;
			// position: relative;

	background-color: rgb(40, 65, 91);
	#wrapper{			

		transition:0.7s ease-in-out;
	height: 300px;
	width: 830px;
	margin: 0 auto;
}

.info{
	position:relative;
}

.info h2, .contact h2{
	border-bottom: 2px solid rgb(170, 216, 214);
	font-size: 1.1em;
	display: flex;
	margin-bottom: 0.4em;
	margin-left: 2em;

}
 

.info p{
	margin-left: 6.5em;
	margin-bottom: 3em;

}


.info, .contact{
	
	font-weight: bold;
	float: left;
	width: 50%;
	height: 17em;
	margin-top: 1.5em;
	margin-bottom: 1.5em;
	padding: 2em;
	color: hwb(210 80% 15% / 0.683);
}


.email{
	margin-left: 6.5em;
	margin-bottom: 0.7em;
}



	@media (min-width: 550px) and (max-width : 1023px) {
	.kakaoMap{
	width: 100%;
	margin: 0 auto;
	}
	#wrapper{
	width: 100%;
	margin: 0 auto;
	}
		
		.head_info, .cs_info{
			padding-left: 7em;
			font-size: 0.9em;
			width: 100%;
			height: 3em;
		}
		.info {
			height: 11em;
		}
		.info, .contact{
			font-size: 0.9em;
			width: 100%;
		}
		
		
	}
	@media (min-width: 350px) and (max-width : 549px) {
		
		// *{border:3px solid green}
		.kakaoMap{
		width: 100%;
		margin: 0 auto;
		}
		
		#wrapper{
		width: 100%;
		margin: 0 auto;
		}
		.info, .contact{
			position: absolute;
			left:0;
	float: none;
	width:100%
	
}
.info{
	position:relative;
	height: 0;
}
.info, .contact{
	
	font-weight: bold;
	float: left;
	width: 50%;
	height: 0;
	// height: 17em;
	// margin-top: 1.5em;
	// margin-bottom: 1.5em;
	padding: 2em;
	color: hwb(210 80% 15% / 0.683);
}

.info p{
	display: none;
	width: 0%;
	height: 0;
	margin-left: 6.5em;
	margin-bottom: 3em;

}
}
}



</style>







