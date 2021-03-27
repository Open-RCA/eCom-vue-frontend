<template>
  <div id="footer">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="tittle">Links</div>
        <div class="content">
          <div v-for="(link, i) in links" :key="i" class="link">
            <router-link
              :class="`link ${link.path == $route.path ? 'active' : ''}`"
              :to="link.path"
              >{{ link.name }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="tittle">Contact Us</div>
        <div class="content">
          <div class="item">
            <img src="@/assets/svg/phone.svg" alt="" /> +250788456789
          </div>
          <div class="item">
            <img src="@/assets/svg/mailbox.svg" alt="" /> openRCA@gmail.com
          </div>
          <div class="item">
            <img src="@/assets/svg/home.svg" alt="" /> Kigali, Rwanda
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="tittle">Connect</div>
        <div class="content">
          <div class="social-medias">
            <img src="@/assets/svg/instagram.svg" alt="" /><img
              src="@/assets/svg/facebook.svg"
              alt=""
            /><img src="@/assets/svg/twitter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="end">Copyright 2021 - Open RCA</div>
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

<style lang="scss" scoped>
#footer {
  background-color: #000000;
  font-family: Raleway;
  margin-top: 3em;
  .row {
    padding: 70px 100px;
  }
  .tittle {
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #fafafa;
    margin-bottom: 40px;
  }
  .link {
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #c8c8c8;
    text-decoration: none;
    margin-bottom: 12px;
  }
  .item {
    text-align: left;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #c8c8c8;
    margin-bottom: 12px;
    img {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }
  }
  .social-medias {
    text-align: left;
    img {
      width: 20px;
      height: 20px;
      margin-right: 50px;
    }
  }
  hr {
    border: 1px solid #fafafa;
  }
  .end {
    padding: 24px 24px 36px;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: #c8c8c8;
  }
  @media (max-width: 992px) {
    .col-12.col-md-4 {
      margin-top: 12px;
    }
    .social-medias img{
      margin-right: 25px;
    }
  .row {
    padding: 70px 50px;
  }
  }
}
</style>
