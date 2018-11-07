<template>
  <div>
      <h1>You are on SecondPage</h1>
       <router-link to="/">Go to FirstPage</router-link>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
