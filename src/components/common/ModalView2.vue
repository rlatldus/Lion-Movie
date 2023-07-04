<template>
  <div class="modal2">
    <div class="overlay2" @click="$emit('close-modal')"></div>
    <div class="modal-card2">
      <button @click="$emit('close-modal')" class="close_button">Close</button>

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

  z-index: 99;
}
.overlay2 {
  opacity: 0.5;
  background-color: black;
}
.modal-card2 {

  border-radius: 10px;
  position: relative;
  max-width: 35%;
  margin: auto;
  margin-top: 300px;
  padding: 20px;
  background-color: white;
  height: 70%;
  max-height: 450px;
  opacity: 1;
  
}
.close_button{
  font-size: 100%;
  position: absolute;
  right: 5px;
  top:0;
    color: black;
}
@media (min-width: 550px) and (max-width: 1023px){
.modal-card2 {

max-width: 55%;
}
  
}

</style>