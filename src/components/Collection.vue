<template>
  <div>
    <Nav-bar />
    <div id="allcollected">
      <h3 class="head">Our collections</h3>
      <div id="collect">
        <div class="text">
          <h3 class="jordans">Jordans</h3>
          <p>
            Jordans are the best shoes to best seen on this earth. Try buying
            them and see how you fell happy.
          </p>
          <button class="onclick">Visit Collections</button>
          <div class="pagination">
            <span>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </span>
          </div>
        </div>

        <img
          class="img1"
          src="../assets/images/shoe5@2x.png"
          alt=""
          width="322px"
          height="522px"
        />
        <img
          src="../assets/images/jordan-4657349@2x.png"
          alt=""
          width="468px"
          height="418px"
        />
        <img
          src="../assets/images/nike-5418992@2x.png"
          alt=""
          width="468px"
          height="312px"
        />
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  components: {
    NavBar: () => import('@/components/Navbar'),
    Footer: () => import('@/components/Footer'),
  },
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 40vh;
}
</style>
