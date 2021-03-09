<template>
  <div id="top_navigation">
    <div class="logo">
      <img src="@/assets/svg/logo.svg" alt="" />
    </div>
    <div class="links">
      <router-link
        v-for="(link, i) in links"
        :key="i"
        :class="`link ${link.path == $route.path ? 'active' : ''}`"
        :to="link.path"
        >{{ link.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Collections",
        path: "/collections",
      },
      {
        name: "Shop",
        path: "/shop",
      },
      {
        name: "Contact us",
        path: "/contact",
      },
    ],
  }),
};
</script>

<style lang="sccs" scoped>
</style>