<template>
  <div>
    <h1>You are on FirstPage</h1>
      <router-link to="/second">Go to SecondPage</router-link>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
