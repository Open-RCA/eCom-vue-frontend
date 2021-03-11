<template>
  <div class="home">
    <NavBar></NavBar>
    <LandingSlider></LandingSlider>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import LandingSlider from "@/components/LandingSlider.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    LandingSlider
  }
};
</script>
