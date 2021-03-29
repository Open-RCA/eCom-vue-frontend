<template>
  <main>
    <div>
      <ShopListingFilter />
    </div>
    <div>
      <ShopListingSearch />
      <ShopListing />
    </div>
  </main>
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
main {
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: start;
  gap: 2rem;
}
</style>
