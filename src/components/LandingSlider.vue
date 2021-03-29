<template>
  <div class="landing-slider">
    <div class="slider-container">
      <div class="slider__left col-12 col-md-5 col-lg-4">
        <div class="slider__shop_text">
          <h1>O shop</h1>
          <p>
            We sell, anything to you and in great quality. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Itaque dolorem.
          </p>
        </div>
        <div class="slider__content">
          <div>
            <h4>The Nike Jordan 1</h4>
            <p>
              Lorem ipsum dolor, sit amet consec tetur adipisicing elit ipsum
              dolor, cons.
            </p>
            <button type="button">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="slider__right col-12 col-md-7 col-lg-8">
        <div class="controls__container">
          <button class="btn-control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8 12l6-6v12z" />
            </svg>
          </button>
          <button class="btn-control">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 12l-6 6V6z" />
            </svg>
          </button>
        </div>
        <div class="image_container">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="662.078" height="585.204" viewBox="0 0 1162.078 1085.204">
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M382.858,156.652c40-69.507,140.287-69.507,180.283,0L856.308,666.13C896.2,735.463,846.159,822,766.167,822H179.833C99.841,822,49.8,735.463,89.692,666.13Z"
                transform="translate(0 307.987) rotate(-19)"
              />
            </svg>
            <img src="../assets/images/shoe4.png" alt="shoe">
          </div>
          <div class="dot-controls">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="absolute__shop_text">
        <h1>O shop</h1>
        <p>
          We sell anything to you and in great quality.
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod
        </p>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "LandingSlider",
  data() {
    return {
      intro_text: "We sell anything to you in great quality",
    };
  },
};
</script>

<style lang="scss" scoped>
.landing-slider {
  width: 100%;
  overflow: auto;
  min-height: 90vh;
  margin-top: 0.5vh;
  text-align: left;
  z-index: -1;

  .slider-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .slider__left,
  .slider__right {
    min-height: 90vh;
  }
  .slider__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4%;

    .slider__content,
    .slider__shop_text {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6% 3%;
      padding-left: 10%;
      flex-direction: column;
    }
    .slider__shop_text {
      text-align: left;
      padding-bottom: 1%;

      h1,
      p {
        width: 100%;
        text-align: left;
      }
      h1 {
        margin-bottom: 5%;
      }
      p {
        font-size: 99%;
        line-height: 130%;
        padding: 0;
        color: rgb(46, 46, 46);
      }
    }
    .slider__content {
      div {
        width: 100%;
        background-color: #000;
        padding: 3% 5%;
        color: #fefefe;
        padding: 8% 6%;

        p {
          margin: 10px 0;
          padding: 0;
          font-size: 95%;
        }
        button {
          flex: none;
          display: block;
          background-color: white;
          color: #000000;
          font-weight: bold;
          width: 100%;
          margin-left: 0;
          height: 42px;
          margin-top: 20px;
        }
      }
    }
  }
  .slider__right {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 0;

    .image_container,
    .controls__container {
      display: flex;
    }
    .controls__container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 2%;

      button {
        background: none;
        color: rgb(19, 19, 19);
        outline: none;
        width: 40px;
        height: 40px;
        border: 1px solid rgb(63, 63, 63);
        border-radius: 50%;
        cursor: pointer;
        margin-left: 0;
        margin-top: 20px;
      }
    }
    .image_container {
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      padding: 0 0;

      div {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        overflow: hidden;

        img {
          width: 100%;
          position: absolute;
          transform: rotate(10deg);
        }

        svg {
          margin-top: -33%;
          padding: 0 0;
          width: 110%;
          height: 110%;
        }
      }

      .dot-controls {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        padding-right: 4%;
        column-gap: 2%;

        div {
          width: 25px;
          height: 25px;
          background-color: #000;
          border-radius: 50%;
          text-align: center;
          display: flex;
          justify-content: center;
          padding: 0;
          cursor: pointer;
          background-color: #C8C8C8;
          transition-duration: 0.5s;

          &:nth-child(1) {
            background-color: #000;
            width: 30px;
            height: 30px;
          }

          &:hover {
            background-color: #000;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
  .absolute__shop_text {
    display: none;
    position: absolute;
    top: -70px;
    left: -60px;
    background: #646464;
    color: white;
    line-height: 130%;
    max-width: 300px;
    height: 300px;
    padding: 2%;
    padding-top: 22%;
    padding-left: 16%;
    border-radius: 50%;
    font-size: 100%;

    p {
      font-size: 90%;
    }
  }
}

// .btn-control:hover,
// .btn-control:hover svg {
//   background: black;
//   border: 1px solid black;
//   border-radius: 50%;
//   color: white;
//   fill: white;
// }

/** For Small screens */
@media screen and (max-width: 768px) {
  .landing-slider {
    height: auto;
    .slider-container {
      flex-direction: column-reverse;
    }
    .slider__left,
    .slider__right {
      min-height: auto;
      height: auto;
    }
    .slider__left {
      flex-direction: column-reverse;
      .slider__shop_text {
        display: none;
      }
      // .slider__content {
      // }
    }
    .slider__right {
      padding-top: 250px;
      flex-direction: row-reverse;

      .controls__container {
        padding: 0 1%;

        button {
          width: 30px;
          height: 30px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
      }
      .image-container {
        svg {
          margin-top: -200px;
        }
      }
    }
    .absolute__shop_text {
      display: initial;
    }
  }
}
</style>