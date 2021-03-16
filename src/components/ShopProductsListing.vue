<template>
  <div class="listingContainer">
    <div class="listingItem" v-for="product in products" :key="product.id">
      <div class="product">
        <img :src="product.imageUrl" />
      </div>
      <div class="product-info">
        <span class="product_name">{{ product.title }}</span>
        <span>${{ product.price }}</span>
      </div>

      <div class="rating-container"><Rating v-bind="product.config" /></div>

      <div class="add_to_cart">
        <button>
          Add to cart &nbsp; &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <g
              id="Icon_feather-plus-circle"
              data-name="Icon feather-plus-circle"
              transform="translate(-2.5 -2.5)"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M14,8.5A5.5,5.5,0,1,1,8.5,3,5.5,5.5,0,0,1,14,8.5Z"
                fill="none"
                stroke="#fafafa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M18,12v4.4"
                transform="translate(-9.5 -5.7)"
                fill="none"
                stroke="#fafafa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M12,18h4.4"
                transform="translate(-5.7 -9.5)"
                fill="none"
                stroke="#fafafa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Rating: () => import("@/components/RatingStars"),
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Product 1",
          price: "200",
          imageUrl: require("@/assets/images/j1.png"),
          config: {
            rating: 4.7,
            isIndicatorActive: true,
            starStyle: {
              fullStarColor: "#ffa41c",
              emptyStarColor: "#737373",
              starWidth: 15,
              starHeight: 15,
            },
          },
        },
        {
          id: 2,
          title: "Product 1",
          price: "200",
          imageUrl: require("@/assets/images/j2.png"),
          config: {
            rating: 4.7,
            isIndicatorActive: true,
            starStyle: {
              fullStarColor: "#ffa41c",
              emptyStarColor: "#737373",
              starWidth: 15,
              starHeight: 15,
            },
          },
        },
        {
          id: 3,
          title: "Product 1",
          price: "200",
          imageUrl: require("@/assets/images/j3.png"),
          config: {
            rating: 4.7,
            isIndicatorActive: true,
            starStyle: {
              fullStarColor: "#ffa41c",
              emptyStarColor: "#737373",
              starWidth: 15,
              starHeight: 15,
            },
          },
        },
        {
          id: 4,
          title: "Product 1",
          price: "200",
          imageUrl: require("@/assets/images/j4.png"),
          config: {
            rating: 4.7,
            isIndicatorActive: true,
            starStyle: {
              fullStarColor: "#ffa41c",
              emptyStarColor: "#737373",
              starWidth: 15,
              starHeight: 15,
            },
          },
        },
        {
          id: 5,
          title: "Product 1",
          price: "200",
          imageUrl: require("@/assets/images/j5.png"),
          config: {
            rating: 4.7,
            isIndicatorActive: true,
            starStyle: {
              fullStarColor: "#ffa41c",
              emptyStarColor: "#737373",
              starWidth: 15,
              starHeight: 15,
            },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.listingContainer {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  font-family: Raleway;


  .product {
    width: 100%;
    height: 250px;
    background-color: #b3b3b3;

    img {    object-fit: cover;
      height: 100%;
      width: 100%;
  
    }
  }

  .listingItem {
    background-color: white;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.3);
  }
  .product-info {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .product_name {
      font-weight: bold;
      font-size: 1rem;
    }
  }
}
.add_to_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  button {
    margin-bottom: 1rem;
    cursor: pointer;
  }
}

.rating-container {
  padding-left: 10px;
  padding-bottom: 10px;
}

@media only screen and (max-width: 900px) {
  .listingContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
