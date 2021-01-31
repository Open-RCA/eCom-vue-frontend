<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Signin/>
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from "@/components/Signin.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "Auth",
  components: {
    Signin,
    Signup
  }
};
</script>
