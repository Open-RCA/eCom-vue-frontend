<template>
  <div>
    <Nav-bar />
    <div id="allcollected">
      <h3 class="head">Jordan's collections</h3>
      </div>


   <div v-for="Jordan in Jordan" :key="Jordan" class="images">
  <div class="Jordan-image">
  <img v-bind:src="Jordan.imgUrl" alt="Jordan-product-images">
  </div>
  <div class="Jordan-description">
   <h3 class="name">{{Jordan.Name}}</h3>
   <h3 class="price">{{Jordan.Price}}</h3>
   <div class="Jordan-rating">

      <svg v-for="(val, index) in [...Array(Jordan.Rating)]" :key="index+'_rating'" viewBox="0 0 24 24" width="20" height="20">
        <path fill="#FFD700" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>
      <svg v-for="(val, index) in [...Array(5-Jordan.Rating)]" :key="index+'_empty_rating'" viewBox="0 0 24 24"  width="20" height="20">
        <path fill="none" style="stroke-width:1;stroke:#FFD700"  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>
    </div>

   <button class="J-button">Add to cart  <img src="../assets/svg/Icon feather-plus-circle.svg" ></button>
 </div>
  </div>

<!-- Jordan collections -->

   <div v-for="product in Jordans" :key="product" class="images">
  <div class="product-image">
  <img v-bind:src="product.imgUrl" alt="Jordan-product-images">
  </div>
  <div class="description">
   <h3 class="name">{{product.Name}}</h3>
   <h3 class="price">{{product.Price}}</h3>
 
   <div class="rating" >
      <svg v-for="(val, index) in [...Array(product.Rating)]" :key="index+'_rating'" viewBox="0 0 24 24" width="20" height="20">
        <path fill="#FFD700"  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>
      <svg v-for="(val, index) in [...Array(5-product.Rating)]" :key="index+'_empty_rating'" viewBox="0 0 24 24"  width="20" height="20">
        <path fill="none" style="stroke-width:1;stroke:#FFD700"  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>
    </div>
   <button>Add to cart  <img src="../assets/svg/Icon feather-plus-circle.svg" style="margin-left:0.5em;font-size:2x"></button>
 </div>
  </div>



<!-- men collections -->
 <h3 class="men-head">Men Collection</h3>


 <div class="man-collection" v-for="man in man" :key="man">
 <img v-bind:src="man.Url" alt="man-collection-image">
 </div>

 <div v-for="man in mancollection" :key="man" class="man-images">
  <div class="man-product-image">
  <img v-bind:src="man.imgUrl" alt="Jordan-product-images">
  </div>

  <div class="man-description">
   <h3 class="man-name">{{man.Name}}</h3>
   <h3 class="man-price">{{man.Price}}</h3>

   <div class="rating" >
      <svg v-for="(val, index) in [...Array(man.Rating)]" :key="index+'_rating'" viewBox="0 0 24 24" width="20" height="20">
      <path fill="#FFD700" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>

      <svg v-for="(val, index) in [...Array(5-man.Rating)]" :key="index+'_empty_rating'" viewBox="0 0 24 24"  width="20" height="20">
      <path fill="none" style="stroke-width:1;stroke:#FFD700"  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
      </svg>
    </div>
   <button>Add to cart  <img src="../assets/svg/Icon feather-plus-circle.svg" style="margin-left:0.5em;font-size:2x"></button>
 </div>
  </div>


  <!-- Woman collections -->
 <h3 class="woman-head">Women Collection</h3>
 <div class="man-collection" v-for="woman in woman" :key="woman">
 <img v-bind:src="woman.imgUrl" alt="man-collection-image">
 </div>


 <div v-for="woman in womancollection" :key="woman" class="man-images">
  <div class="man-product-image">
  <img v-bind:src="woman.imgUrl" alt="Jordan-product-images">
  </div>

  <div class="man-description">
   <h3 class="man-name">{{woman.Name}}</h3>
   <h3 class="man-price">{{woman.Price}}</h3>
  
 <div class="rating" >
    <svg v-for="(val, index) in [...Array(woman.Rating)]" :key="index+'_rating'" viewBox="0 0 24 24" width="20" height="20">
    <path fill="#FFD700" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
     </svg>
    <svg v-for="(val, index) in [...Array(5-woman.Rating)]" :key="index+'_empty_rating'" viewBox="0 0 24 24"  width="20" height="20">
    <path fill="none" style="stroke-width:1;stroke:#FFD700"  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
    </div>

   <button>Add to cart   <img src="../assets/svg/Icon feather-plus-circle.svg" style="margin-left:0.5em;font-size:2x"></button>
 </div>
  </div>


<Footer/>
  </div>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  components: {
    NavBar: () => import("@/components/Navbar"),
    Footer:()=> import("@/components/Footer")

  },
data(){

  return{
    Jordan:[
       {
            Name: "Jordan Air IV",
            Price: "$ 1000",
            Rating: 4,
            imgUrl:require("../assets/images/j1.png")
       },
    ],
    Jordans:[

        {
            Name: "Jordan Purple blue",
            Price: "$ 1000",
            Rating: 3,
            imgUrl:require( '../assets/images/j2.png'),
        },
           {
            Name: "Jordan Air IV",
            Price: "$ 1000",
            Rating: 5,
            imgUrl:require( "../assets/images/j3.png")
        },

        {
            Name: "Jordan Air IV",
            Price: "$ 1000",
            Rating: 2,
            imgUrl: require("../assets/images/j4.png")
        },
         {
            Name: "Jordan Air IV",
            Price: "$ 1000",
            Rating: 5,
            imgUrl:require("../assets/images/j5.png")
        },

    ],
    man:[
        {
            Url: require("../assets/images/Bigman.png")
        }
    ],

    mancollection:[
       {
            Name: "Full Combo Suit",
            Price: "$ 1000",
            Rating: 5,
            imgUrl: require("../assets/images/man1.png")
        },
        {
            Name: "Timber Land",
            Price: "$ 1000",
            Rating: 4,
            imgUrl:require( "../assets/images/man2.png")
        },
        {
            Name: "Versace Eros",
            Price: "$ 1000",
            Rating: 5,
            imgUrl: require("../assets/images/man3.png")
        },
        {
            Name: "OMEGA watch",
            Price: "$ 1000",
            Rating: 3,
            imgUrl: require("../assets/images/man4.png")
        },
        {
            Name: "Nike Sport Shoes",
            Price: "$ 1000",
            Rating: 5,
            imgUrl: require("../assets/images/man5.png")
        },
        {
            Name: "Omega Watch",
            Price: "$ 1000",
            Rating: 4,
            imgUrl: require("../assets/images/man6.png")
        },
    ],
    woman:[
        {
            imgUrl: require("../assets/images/woman.png",)
        }
    ],


    womancollection:[
        {
         Name: "Sun Glasses",
            Price: "$ 1000",
            Rating: 4,
            imgUrl:require( "../assets/images/woman1.png")

        },
        {

            Name: "High Hills",
            Price: "$ 1000",
            Rating: 5,
            imgUrl: require("../assets/images/woman2.png")

        },
        {

            Name: "Daniel Purse",
            Price: "$ 1000",
            Rating: 5,
            imgUrl: require("../assets/images/woman3.png")

        },

        {

            Name: "Thanos Perfume",
            Price: "$ 1000",
            Rating: 2,
            imgUrl: require("../assets/images/woman4.png")

        },
        {

            Name: "Daniel Purse",
            Price: "$ 1000",
            Rating: 2,
            imgUrl: require("../assets/images/woman5.png")

        },
        {

            Name: "Danos Lipstick",
            Price: "$ 1000",
            Rating: 4,
            imgUrl: require("../assets/images/woman6.png")

        },

    ],
  }
}
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 400vh;
}
</style>
