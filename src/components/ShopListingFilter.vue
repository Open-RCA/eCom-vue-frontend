<template>
  <div class="shopFilters">
    <button class="filter header">Filters</button>

    <div class="filteredItems">
      <button
        class="filter not-header"
        v-for="item in filteredProducts"
        :key="item.id"
      >
        {{ item.name }} <span class="check"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredProducts: [
        {
          id: 1,
          name: "Hotel",
        },
        {
          id: 2,
          name: "Hotel",
        },
        {
          id: 3,
          name: "Hotel",
        },
        {
          id: 4,
          name: "Hotel",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shopFilters {
  padding-top: 9rem;
  padding-left: 2rem;
  .filter {
    background-color: #fff;
    font-family: Raleway;
    color: #000;
    border: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 3rem;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .filterItems {
      margin-top: 1rem;
    }
    .check {
      width: 1rem;
      height: 1rem;
      border: 1px solid #707070;
    }
  }

  .not-header {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .header {
    background-color: #646464;
    border-color: #707070;
    color: #fff;
    display: block;
  }
}
</style>
