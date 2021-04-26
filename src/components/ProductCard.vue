<template>
  <div class="card-container row">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product,i) in products" :key="i">
            <div class="product-card"  >
                <div class="product-image">
                    <img src="../../public/bottle2@3x.png" alt="">
                </div>
                <div class="product-details">
                    <p class="product-name">{{product.name}}</p>
                    <div class="rating"><rating-stars v-bind="config"></rating-stars></div>
                    <p>{{product.description}}</p>
                    <p>${{product.price}}</p>
                    <button class="cart-btn">Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
  <g id="Icon_feather-plus-circle" data-name="Icon feather-plus-circle" transform="translate(-2.5 -2.5)">
    <path id="Path_15" data-name="Path 15" d="M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Z" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_16" data-name="Path 16" d="M18,12v6.4" transform="translate(-7 -4.2)" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_17" data-name="Path 17" d="M12,18h6.4" transform="translate(-4.2 -7)" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>

  </g>
</svg>
                    </button>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>

<script>
import ratingStars from "./RatingStars"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "Product",
    components: {
    ratingStars,  
    Swiper,
    SwiperSlide,
    },
    props: ['products'],
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
            },
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

}
</script>

<style lang="scss" scoped>
@import "./base.scss";
.card-container{
    font-family: Raleway;
    background: #F1F1F1;
    //widows: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    .swiper{
        box-shadow: none;
        background-color: transparent;
        width: 92vw;
    }
    .product-card{
        
        // max-width: 18%;
        height: 270px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.16);
        margin: 15px 17px;
        &:hover{
            cursor: pointer;
        }
        .product-image{
            height: 180px;
            img{
                height: 230px;
                width: 270px;
                margin: -20px -30px 0;
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