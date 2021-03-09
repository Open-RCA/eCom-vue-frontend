<template>
  <div id="shop_pag">
    <Nav-bar />
    <Footer class="footer" />
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

<style lang="scss" scoped>
.footer{
  margin-top: 12px;
}
</style>
