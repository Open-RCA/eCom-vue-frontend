<template>
  <div id="shop_pag">
    <Nav-bar />
    <ShopProducts/>
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/Navbar"),
    Footer: () => import("@/components/Footer"),
    ShopProducts: () => import("@/components/ShopProducts")
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 40vh;
}
</style>
