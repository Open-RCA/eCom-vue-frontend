<template>
  <div id="top_navigation">
    <div class="logo">
      <img src="@/assets/svg/logo.svg" alt="" />
    </div>
    <div class="d-none d-lg-block">
      <div class="links">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :class="`link ${link.path == $route.path ? 'active' : ''}`"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </div>
      <Search class="search" />
      <div class="side-items">
        <div class="cart"><img src="@/assets/svg/cart.svg" alt="" /></div>
        <Button class="button" content="Sign in" :dark="true" />
        <Button class="button" content="Sign in" :outlined="true" />
      </div>
    </div>
    <div class="d-lg-none toogle-nav">
      <img cla src="@/assets/svg/bars.svg" alt="" />
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
  components: {
    Search: () => import("@/components/my-search-ui"),
    Button: () => import("@/components/my-button-ui"),
  },
};
</script>

<style lang="scss" scoped>
#top_navigation {
  // width: 1920px;
  // height: 50px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.01);
  padding: 12px 26px;
  text-align: left;
  display: flex;

  img {
    width: 40px;
    height: 40px;
  }

  .links {
    padding: 12px 30px;

    .link {
      font-family: Raleway;
      font-weight: normal;
      font-size: 13px;
      letter-spacing: 0.04em;
      text-align: left;
      color: #646464;
      text-decoration: none;
      margin: 0px 12px;

      &.active {
        font-weight: bold;
      }
    }
  }
  .search {
    padding: 6px 30px;
  }
  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 19px;
      width: 43px;
    }
  }
  .button {
    margin-left: 24px;
  }
  .side-items {
    display: flex;
    margin-left: 152px;
  }
  .toogle-nav {
    right: 22px;
    position: absolute;
    img{
      width:30px;
    }
  }
}
</style>