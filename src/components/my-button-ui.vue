<template>
  <button :class="`button ${button_class}`" :type="type" :style="style">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#000000",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "96",
    },
    height: {
      type: String,
      default: "36",
    },
  },
  computed: {
    button_class() {
      return this.dark ? "dark" : "";
    },
    style() {
      let result = `width: ${this.width}px;height: ${this.height};`;
      if (this.dark) result += 'color: #fff;';
      else result += `color: ${this.color};`
      if (this.outlined) result += `border: 1px solid ${this.color};background: #fff`;
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: Raleway;
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 0.04em;
  text-align: left;
  text-align: center;
  margin-top: auto;

  &.dark {
    background: #000000;
    color: #fff;
    border: none;
  }
}
</style>