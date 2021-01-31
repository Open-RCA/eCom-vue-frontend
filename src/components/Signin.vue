<template>
  <div class="form-container sign-in-container">
	<form action="#">
		<h1>Sign In</h1>
		<div class="social-container">
		<a href="#" class="social"><i class="fa fa-facebook"></i></a>
		<a href="#" class="social"><i class="fa fa-google"></i></a>
		<a href="#" class="social"><i class="fa fa-linkedin"></i></a>
	</div>
	<span>or use your account</span>
	<input type="email" name="email" placeholder="Email">
	<input type="password" name="password" placeholder="Password">
	<a href="#">Forgot Your Password</a>

	<button>Sign In</button>
	</form>
</div>
</template>

<script>
export default {
  name: "Signin",
//   props: {
//     msg: String
//   }
};
</script>

<style scoped>

</style>
