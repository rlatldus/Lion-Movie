<template>
	<main class="About">
		<div class="kakaoMap">
		<KakaoMap/>
		</div>
		<div id="wrapper">
		
		<div class="info">
			<h2 class="address_title">
				<span class="material-icons place">place</span>
				ADDRESS
			</h2>
			<!-- <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
     		 <Content/>
    		</ModalView>
    		<button class="modalView" @click="isModalViewed = true">찾아오는 방법</button> -->
			<p class="address">서울특별시 노원구 상계로 1길 34<br> 5층 코리아 IT 아카데미</p>
			<div>
			<h2 class="tel_title"><span class="material-icons phone">phone</span>TEL</h2>
			<p class="tel">	02-933-5890</p>
			</div>
		</div>
			<div class="contact">
				<h2 ><span class="material-icons record_voice_over">record_voice_over</span>Contact us</h2>
				<ul>
					<li class="email">bokbok1234@nate.com</li>
					<li class="email">bokbok1234@nate.com</li>
					<li class="email">bokbok1234@nate.com</li>
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
import KakaoMap from './KakaoMap.vue'

export default{
	name:'About',
	components:{
		KakaoMap,
		Content,
		ModalView,
		Content2,
		ModalView2
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

// .modalView{
	
// 	border: 1px solid rgb(222, 211, 211);
// 	font-size: 0.9em;
// 	border-radius: 20px;
// 	color:hwb(210 80% 15% / 0.683);
// 	font-weight: 900;
// 	position:absolute;
// 	left:190px;
// 	top:27px;
// 	width: 160px;
// 	height: 30px;
// 	background-color: rgb(63, 104, 140);
// }
// .modalView:hover {

// 		color: var(--light);
// 		background-color: var(--dark-alt);
// 		transition: 0.4s ease-in-out;
// 		font-size: 0.93em;;

// }

.info{
	position:relative;
}

.info h2, .contact h2{
	font-size: 1.1em;
	display: flex;
	margin-bottom: 0.4em;
	margin-left: 2em;

}
 
.info span, .contact span{
	display: flex;
	margin-right: 0.3em;
	font-size: 1.1em;
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
	width: 340px;
	margin: 0 auto;
	}
		
		.head_info, .cs_info{
			padding-left: 7em;
			font-size: 0.9em;
			width: 100%;
			height: 3em;
		}
		
		.info, .contact{
			padding-left: 8em;
			font-size: 0.9em;
			width: 100%;
		}
		
		.footer_contents a {
			width: 115px;
			font-size: 0.67em;
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
.info p{
	width: 0%;
	margin-left: 6.5em;
	margin-bottom: 3em;

}
// .footer{
// 	height: 5em;
// 	position: absolute;
// 	right: 0;
// 	bottom: 0px;
// 	border-top: 2px solid hwb(210 80% 15% / 0.683);
// 	width: 100%;
// }.footer_contents{
	
// 	position: absolute;
// 	width: 0px;
// 	height: 30px;
// 	display: flex;

// }
// .footer_contents li{ 

// 	width:0
// }
	}
}



</style>







