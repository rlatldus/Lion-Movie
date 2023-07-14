<template>
  <div class="modal2">
    <div class="overlay2" @click="$emit('close-modal')"></div>
    <div class="modal-card2">
      <span  @click="$emit('close-modal')" class="material-icons close_button">닫기</span>

      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>



.modal2,
.overlay2 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  
}

.modal2{
  
  position: fixed;
  top:35%;
  z-index: 99;
}
.overlay2 {
  
  opacity: 0.5;
  background-color: black;
}
.modal-card2 {  

  border:2px solid rgb(59, 81, 142);

  border-radius: 10px;
  position: relative;
  width: 400px;
  max-width: 550px;
  margin: 0 auto;
  /* margin-top: 450px; */
  background-color: var(--dark);

  height: 70%;
  max-height: 400px;
  opacity: 1;
  
}
.close_button{  
  text-align: center;
  padding: 3px;
  width:40px ;
  height: 30px;
  display: block;
  font-weight: 600;
  font-size: 98%;
  position: absolute;
  right: 5px;
  bottom:4px;
  color: rgb(63, 104, 140);
  transition: 0.4s ease-in-out;
  z-index: 99;

}
.close_button:hover{
  cursor: pointer;
  color: rgb(186, 26, 26);
  
}
  @media (min-width: 550px) and (max-width: 1023px){
.modal-card2 {

max-width: 52%;
}
  
}
  @media (max-width: 549px){
  .modal-card2 {
  max-width: 70%;
  max-height: 370px;
  
}
  .close_button{  
  font-size: 90%;
  bottom:-3px;
 

  }
}

</style>