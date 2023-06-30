<template>
  <div class="modal2">
    <div class="overlay2" @click="$emit('close-modal')"></div>
    <div class="modal-card2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  max-width: 28%;
  margin: auto;
  margin-top: 10%;
  padding: 20px;
  background-color: white;
  height: 50%;
  opacity: 1;
  
}
</style>