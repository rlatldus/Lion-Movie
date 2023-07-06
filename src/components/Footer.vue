<template>
    <main id="Footer">
        <div class="footer">
			<ModalView2 v-if="isModalViewed2" @close-modal="isModalViewed2 = false">
     		 <Content2/>
    		</ModalView2>
			<ul class="footer_contents">
				<li><button @click="isModalViewed2 = true">OOO 이용약관</button></li>
				<li><button @click="isModalViewed2 = true">청소년 보호 정책</button></li>
				<li><button @click="isModalViewed2 = true">개인정보 수집 및 이용</button></li>
				<li><button @click="isModalViewed2 = true">개인정보처리방침</button></li>
			
			</ul>
		</div>
    </main>
</template>
<script>
import Content from './common/Content.vue'
import ModalView from './common/ModalView.vue';
import Content2 from './common/Content2.vue'
import ModalView2 from './common/ModalView2.vue';
export default{
	name:'Footer',
	components:{
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
    list-style: none;
    text-decoration: none

    }

#Footer{       	
    background-color: rgb(24, 35, 61);
    .footer{
	
	width: 100%;
}

.footer_contents{
	position: absolute;
	left:50%;
	transform: translate(-50%,-80%);
	display: flex;
}


.footer_contents button{

	display: flex;
	justify-content: center;
	margin-top: 3em;
	padding: 0.4em;
	width:155px;
	font-size: 0.8em;
	font-weight: 900;
	color: hwb(214 94% 3% / 0.9);

	}

    @media (min-width: 350px) and (max-width : 549px) {
	
.footer{
	height: 5em;
	position: absolute;
	right: 0;
	bottom: 0px;
	border-top: 2px solid hwb(210 80% 15% / 0.683);
	width: 100%;
}.footer_contents{
	
	position: absolute;
	width: 0px;
	height: 30px;
	display: flex;

}
.footer_contents li{ 

	width:0
}
	}

}



</style>