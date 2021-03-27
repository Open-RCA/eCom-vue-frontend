<template>
  <div id="top_navigation">
    <div class="row">
      <div class="col-2 col-lg-1">
        <div class="logo">
          <img src="@/assets/svg/logo.svg" alt="" />
        </div>
      </div>
      <div class="d-lg-none col-2 offset-8">
        <div class="toogle-nav text-right" @click="showModal = true">
          <img cla src="@/assets/svg/bars.svg" alt="" />
        </div>
      </div>
      <div class="d-none d-lg-block links col-4">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :class="`link ${link.path == $route.path ? 'active' : ''}`"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </div>
      <div class="d-none d-lg-block col-3">
        <Search class="search" />
      </div>
      <div class="d-none d-lg-flex col-4 side-items">
        <div class="ml-auto d-flex">
          <div class="cart"><img src="@/assets/svg/cart.svg" alt="" /></div>
          <Button class="button" content="Sign in" :dark="true" />
          <Button class="button" content="Sign in" :outlined="true" />
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block">
      <div class="side-items"></div>
    </div>
    <Modal class="small-nav" v-show="showModal" @close="showModal = false">
      <template v-slot:content>
        <div>
          <router-link
            v-for="(link, i) in links"
            :key="i"
            :class="`link ${link.path == $route.path ? 'active' : ''}`"
            :to="link.path"
            >{{ link.name }}</router-link
          >
          <div class="cart"><img src="@/assets/svg/cart.svg" alt="" /></div>
        </div>
        <div class="d-flex">
          <Button class="button" content="Sign in" :dark="true" />
          <Button class="button" content="Sign in" :outlined="true" />
        </div>
      </template>
    </Modal>
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
    showModal: false,
  }),
  components: {
    Search: () => import("@/components/my-search-ui"),
    Modal: () => import("@/components/Modal"),
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
  // display: flex;
  .col-2,
  .col-3,
  .col-4 {
    padding: 0;
  }
  .text-right {
    text-align: right;
  }
  img {
    width: 40px;
    height: 40px;
  }

  .links {
    padding-top: 12px;
  }
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
  .search {
    padding-top: 6px;
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
  .toogle-nav {
    right: 22px;
    position: absolute;
    img {
      width: 30px;
    }
  }
  .small-nav {
    .link {
      color: #646464;
      display: block;
      margin-left: 0;
      &.active {
        color: #000000;
      }
      margin-bottom: 26px;
    }
    .cart {
      display: block;
      margin-bottom: 26px;
    }
    .button {
      margin-left: 0;
      margin-right: 35px;
    }
  }
  .d-flex {
    display: flex;
  }
  .ml-auto{
    margin-left: auto;
  }
}
</style>