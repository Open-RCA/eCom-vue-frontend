<template>
  <div id="allcollected">
    <h3 class="head">Our collections</h3>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="text">
            <h3 class="jordans">Jordans</h3>
            <p>
              Jordans are the best shoes to best seen on this earth. Try buying them and
              see how you fell happy.
            </p>
            <button class="onclick">Visit Collections</button>
          </div>
          <div class="imgs">
            <img
              class="img1"
              src="../assets/images/shoe5.png"
              alt=""
              width="212px"
              height="341px"
            />
            <div class="img2">
              <img
                src="../assets/images/jordan-4657349@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
              <img
                src="../assets/images/nike-5418992@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <h3 class="jordans">Jordans</h3>
            <p>
              Jordans are the best shoes to best seen on this earth. Try buying them and
              see how you fell happy.
            </p>
            <button class="onclick">Visit Collections</button>
          </div>
          <div class="imgs">
            <img
              class="img1"
              src="../assets/images/shoe5.png"
              alt=""
              width="212px"
              height="341px"
            />
            <div class="img2">
              <img
                src="../assets/images/jordan-4657349@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
              <img
                src="../assets/images/nike-5418992@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <h3 class="jordans">Jordans</h3>
            <p>
              Jordans are the best shoes to best seen on this earth. Try buying them and
              see how you fell happy.
            </p>
            <button class="onclick">Visit Collections</button>
          </div>
          <div class="imgs">
            <img
              class="img1"
              src="../assets/images/shoe5.png"
              alt=""
              width="212px"
              height="341px"
            />
            <div class="img2">
              <img
                src="../assets/images/jordan-4657349@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
              <img
                src="../assets/images/nike-5418992@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <h3 class="jordans">Jordans</h3>
            <p>
              Jordans are the best shoes to best seen on this earth. Try buying them and
              see how you fell happy.
            </p>
            <button class="click" v-on:click="btnClick('doesnt get link', $event)">Visit Collections</button>
          </div>
          <div class="imgs">
            <img
              class="img1"
              src="../assets/images/shoe5.png"
              alt=""
              width="212px"
              height="341px"
            />
            <div class="img2">
              <img
                src="../assets/images/jordan-4657349@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
              <img
                src="../assets/images/nike-5418992@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <h3 class="jordans">Jordans</h3>
            <p>
              Jordans are the best shoes to best seen on this earth. Try buying them and
              see how you fell happy.
            </p>
            <button class="onclick">Visit Collections</button>
          </div>
          <div class="imgs">
            <img
              class="img1"
              src="../assets/images/shoe5.png"
              alt=""
              width="212px"
              height="341px"
            />
            <div class="img2">
              <img
                src="../assets/images/jordan-4657349@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
              <img
                src="../assets/images/nike-5418992@2x.png"
                alt=""
                width="252px"
                height="171px"
              />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-pagination-custom",
  title: "Custom pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${
              index + 1
            }</span>`;
          },
        },
      },
    };
  },

  methods:{
    btnClick: function (event){
      if(event)
      window.open("/collections");
    }
  }
};
</script>
<style lang="scss">
@import "./base.scss";
.swiper {
  .swiper-pagination-bullet-custom {
    cursor: pointer;
    text-align: center;
    color: rgb(0, 0, 0);
    opacity: 0.7;
    background: white;

    &:hover {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: white;
      background: #000000;
      border:none;
    }
  }
  .swiper-pagination-bullets {
    bottom: 45px;
    float: left;
    left: 0px;
    width: 28%;
  }
}

.swiper-pagination {
  .swiper-pagination-bullet {
    width: 28px;
    height: 28px;
    display: inline-block;
    border-radius: 100%;
    padding: 4px 8px;
    border: 1px solid #707070 ;
    
  }
  }
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 6px;
}
</style>
