<template>
  <div class="home">
    <LandingSlider></LandingSlider>
    <h2>New Arrivals</h2>
    <ProductCard v-bind:products="products"></ProductCard>
    <h2>Our Products</h2>
    <ProductCard v-bind:products="newArrivals"></ProductCard>
  </div>
</template>

<script>
import LandingSlider from "@/components/LandingSlider.vue"
import ProductCard from "@/components/ProductCard.vue"


export default {
  
  name: "Home",
  components: {
    // NavBar,
    LandingSlider,
    ProductCard,
  },
  data(){
    return{
      newArrivals:[
        {name: "Bottle", description: "bottle", price: 500},
        {name: "Bottle", description: "bottle", price: 500},
        {name: "Bottle", description: "bottle", price: 500},
        {name: "Bottle", description: "bottle", price: 500},
        {name: "Bottle", description: "bottle", price: 500},
        {name: "Bottle", description: "bottle", price: 500},
      ],
      products:[
        {name: "Quokka Bottle", description: "bottle", price: 500},
        {name: "Quokka Bottle", description: "bottle", price: 500},
        {name: "Quokka Bottle", description: "bottle", price: 500},
        {name: "Quokka Bottle", description: "bottle", price: 500},
        {name: "Quokka Bottle", description: "bottle", price: 500},
        {name: "Quokka Bottle", description: "bottle", price: 500},
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 2,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>

.home {
  h2 {
      margin-left: 65px;
  }
}
</style>
