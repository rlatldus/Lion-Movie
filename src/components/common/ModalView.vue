<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0;
}

.modal{
  
  z-index: 9999;
}
.overlay {
  
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  
  border-radius: 10px;
  position: relative;
  max-width: 78%;
  margin: auto;
  margin-top: 70px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  opacity: 1;
}
</style>