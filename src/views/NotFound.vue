<template>
  <div class="not-found-page">
    <h2 style="color: white">Oops, it looks like the page you're looking for doesnt exist.</h2>
    <br />
    <br />
    <a @click="$router.back()">Go Back</a>
  </div>
</template>

<style scoped>
.not-found-page {
  margin: 200px auto;
  padding: 0px 50px;
  justify-content: center;
}
</style>
