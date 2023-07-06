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
	margin-top: 0;
    background-color: rgb(24, 35, 61);
    .footer{
		width: 100%;

}

.footer_contents{
	position: absolute;
	left:53%;
	transform: translate(-50%,-80%);
	display: flex;
}


.footer_contents button{	

	display: flex;
	justify-content: center;
	margin-top: 3em;
	padding: 0.4em;
	width:155px;
	font-size: 0.73em;
	font-weight: 900;
	color: hwb(214 94% 3% / 0.9);

	&:hover{
		color: var(--primary);
		scale: 1.1;
		transition: all 0.4s ease-out;


	}
	}

	
	@media (min-width: 550px) and (max-width : 749px) {



.footer_contents{
	
	left:54.3%;
}


.footer_contents button{
	
	margin-top:5em;
	width:116px;
	font-size: 0.64em;

	}
		
}
	
	
    @media (min-width: 350px) and (max-width : 549px) {
		
	.footer{
	padding: 21px;			

}

	.footer_contents{
	position: absolute;
	left:50%;
	transform: translate(-50%,-50%);
	display: block;
}


	.footer_contents button{

	margin-top: 0em;
	padding: 0.3em;
	font-size: 0.65em;
	

	}
	}
}



</style>