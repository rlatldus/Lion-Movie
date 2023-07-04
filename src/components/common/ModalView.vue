<template>
  <div id="modals">
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <button @click="$emit('close-modal')" class="close_button">Close</button>

      <slot />
    </div>
  </div>
</div>
</template>

<script>
 

export default {};

</script>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0;
}

.modal{
  
  z-index: 99;
}
.overlay {
  
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  
  border-radius: 10px;
  position: relative;
  max-width: 45%;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  background-color: white;
  min-height: 350px;
  opacity: 1;
}
.close_button{
  font-size: 100%;
  position: absolute;
  right:0px;
  top:0;
  color: black;
}
</style>