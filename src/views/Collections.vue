<template>
  <div>
    <Nav-bar />
    <div id="allcollected">
      <h3 class="head">Jordan's collections</h3>
      </div>


  <div class="collections">

   <div class="img">
   <img  class="img1" src="../assets/images/matthew-dagelet-22RNtmIbCo8-unsplash-removebg-preview@3x.png">

     <div class="description">
     <h2 class="name">Jordan Air IV</h2>
     <h2 class="price">$10000</h2>
     <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
    </div>
  </div>

  <div class="img">
   <img  class="img3" src="../assets/images/jordan-shoes-1777572-removebg-preview.png">
     <div class="description">
     <h2 class="name">Jordan I Purple Blue</h2>
     <h2 class="price">$10000</h2>
      <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
  </div>
  </div>

  <div class="img">
   <img  class="img3" src="../assets/images/hermes-rivera-w83s82yd3Fk-unsplash-removebg-preview.png">
     <div class="description">
     <h2 class="name">Jordan I Purple Blue</h2>
     <h2 class="price">$10000</h2>
      <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
  </div>
  </div>
  

  <div class="img">
   <img  class="img4" src="../assets/images/jan-vlacuha-92_wMoF-yds-unsplash-removebg-preview@2x.png">
     <div class="description">
     <h2 class="name">Jordan I Purple Blue</h2>
     <h2 class="price">$10000</h2>
      <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
  </div>
  </div>

    <div class="img">
   <img  class="img5" src="../assets/images/xavier-teo-SxAXphIPWeg-unsplash-removebg-preview@2x.png">
     <div class="description">
     <h2 class="name">Jordan I Purple Blue</h2>
     <h2 class="price">$10000</h2>
      <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
  </div>
  </div>

  <!-- <div class="img">
    <img  class="img2" src="../assets/images/jan-vlacuha-92_wMoF-yds-unsplash-removebg-preview@2x.png">
    <div class="description">
      <h2 class="name">Jordan I Purple Blue</h2>
      <h2 class="price">$10000</h2>
      <button> Add to cart  <img class="circ" src="../assets/svg/Icon feather-plus-circle.svg"/></button>
    </div>
  </div> -->

  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <!-- <h3>men collection</h3> -->
  <div class="men-collection">
   <h3>Men collection</h3>
   <img src="../assets/images/man.png" alt="">
   
  </div>
  

    <Footer class="footer" />
  </div>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  components: {
    NavBar: () => import("@/components/Navbar"),
    Footer: () => import("@/components/Footer"),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 40vh;
}
</style>
