<template>
  <div id="shop_pag">
    <Nav-bar />
    <ShopProducts />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/Navbar"),
    Footer: () => import("@/components/Footer"),
    ShopProducts: () => import("@/components/ShopProducts"),
  },
};
</script>
