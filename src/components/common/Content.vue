<template>
    <div class="content">
      <h1>오시는 길</h1>
      <button class="navigation">카카오 길찾기 바로가기</button>
      <div class="wrapper">
      <div class="busMetro">
        <h2>대중교통</h2>
        <ul>
          <li>버스</li>
          <li>지하철</li>
        </ul>
      </div>
      <div class="parking">
        <h2>주차장</h2>
        <ul>
          <li>학원 내 주차장</li>
          <li>상계주공 7단지아파트 공영주차장</li>
          <div class="kakaoMap_Parking">
		        <KakaoMap_Parking/>
		      </div>
        </ul>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import KakaoMap_Parking from '../common/KakaoMap_Parking.vue'
  import ModalView from './ModalView.vue';

  export default {
    name: "Content",
	  components:{
		  KakaoMap_Parking
  },
  // methods:{
  //   closeModal() {
  //     this.modal = false
  //   },
  // }
 
}
  </script>
  
  <style scoped>
*{list-style: none;
text-decoration: none;}
.content {
  position: relative;
  font-size: 80%;
  border:2px solid green;
  height: 310px;
  color: black;
}
.wrapper{
  display: flex;
  padding:10px;

}
.navigation{
  font-weight: 900;
  position: absolute;
  right:10px;
  top:12px
  
}
h1{
  padding: 5px;
  font-size: 160%;
}
.busMetro{
  border:2px solid red;
  width:50%;

}
.parking{
  padding: 5px;
  border:2px solid blue;

  float: right;
  width:50%

}

  
  </style>
  