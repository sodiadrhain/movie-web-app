<template>
  <div class="loader-main"><div class="loader simple-circle"></div></div>
</template>

<style scoped>
@keyframes circle-loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-main {
  display: flex;
  justify-content: center;
  margin: 200px auto;
}

.loader.simple-circle {
  transform-origin: center center;
  border: var(--line-width, 4px) solid var(--loader-color-secondary, #fff);
  border-right-color: var(--loader-color-primary, #d9251d);
  width: var(--loader-width, 100px);
  height: var(--loader-height, 100px);
  border-radius: 50%;
  animation: circle-loader var(--animation-duration, 1s) infinite ease-out;
}
</style>
