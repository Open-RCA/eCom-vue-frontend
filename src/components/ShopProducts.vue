<template>
  <div>
    <div>
      <ShopListingFilter />
    </div>
    <div>
      <ShopListingSearch />
      <ShopListing />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShopListing: () => import("@/components/ShopProductsListing"),
    ShopListingFilter: () => import("@/components/ShopListingFilter"),
    ShopListingSearch: () => import("@/components/ShopListingSearch"),
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: blue;
}
</style>
