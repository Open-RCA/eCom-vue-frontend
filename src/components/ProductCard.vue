<template>
  <div class="card-container row">
      <div class="product-card">
          <div class="product-image">
              <img src="../../public/bottle2@3x.png" alt="">
          </div>
          <div class="product-details">
              <p class="product-name">Quokka Bottle</p>
              <div class="rating"><rating-stars v-bind="config"></rating-stars></div>
              <p>Bottle</p>
              <p>$500</p>
              <button class="cart-btn">Add to cart<img src="../assets/svg/plus.svg"></button>
          </div>
      </div>
  </div>
</template>

<script>
import ratingStars from "./RatingStars"
export default {
    name: "Product",
    components: {
    ratingStars: ratingStars
    },
    data(){
        return{
            config: {
                rating: 4.7,
                isIndicatorActive: true,
                starStyle: {
                    fullStarColor: "#ffa41c",
                    emptyStarColor: "#737373",
                    starWidth: 15,
                    starHeight: 15
                }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.card-container{
    font-family: Raleway;
    background: #F1F1F1;
    widows: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    .product-card{
        
        // max-width: 18%;
        height: 270px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.16);
        &:hover{
            cursor: pointer;
        }
        .product-image{
            height: 180px;
            img{
                height: 230px;
                width: 270px;
                margin: -20px -18px 0;
            }
        }
        .product-details{
            height: 190px;
            background: #fff;
            p{
                color: #414141;
                text-align: left;
                padding: 0 15px !important;
            }
            .product-name{
                color: #000;
                font-weight: bold;
                font-size: 15px;
                padding-top: 20px !important;
            }
            .rating {
                margin-left: 15px;
            }
            .cart-btn{
                margin-left: 15px;
                color: #fff;
                background: #000;
                border: 1px solid #000;
                height: 40px;
                width: 144px;
                display: grid;
                grid-template-columns: 2fr 1fr;
                padding-top: 12px;
                img{
                    height: 15px;
                    margin-left: 23px;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
}

</style>