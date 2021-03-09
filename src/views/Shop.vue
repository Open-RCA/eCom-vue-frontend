<template>
  <div id="shop_pag">
    <Nav-bar />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/Navbar"),
    Footer: () => import("@/components/Footer"),
  },
};
</script>

<style lang="sccs" scoped>
</style>
