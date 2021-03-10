<template>
  <div class="search">
    <div class="search-container" :style="style">
      <div class="input">
        <input type="text" placeholder="Search" id="" class="search-input" />
      </div>
      <div class="icon">
        <img src="@/assets/svg/search.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 346,
    },
  },
  computed: {
    style() {
      return `width: ${this.width}px;`;
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  &-container {
    // width: 346px;
    height: 30px;
    background: #fff;
    border: 1px solid #707070;
    display: flex;
  }
  .input {
    width: 85%;
  }
  &-input {
    font-family: Raleway;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #646464;
    border: none;
    padding: 11px 12px;
    width: 100%;
    height: 25%;
    &:focus {
      outline: none;
    }
  }
  .icon {
    width: 15%;
  }
  img {
    margin: 5px 32% auto;
  }
}
</style>