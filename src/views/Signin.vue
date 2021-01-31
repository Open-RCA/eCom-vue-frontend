<template>
<div>
<div class="overlay-panel overlay-right">
			<h1 class="h1-white">Infinity</h1>
			<p>Enter your details and start journey with us</p>
			<button class="ghost">Sign Up</button>
		</div>
  <div class="form-container sign-in-container">
	<form action="#">
		<h1>Sign In</h1>
	<input type="email" name="email" placeholder="Email">
	<input type="password" name="password" placeholder="Password">
     <router-link to="signup">Don't an have an account yet? <span class="directive">Sign up here</span></router-link>
	<button>Sign In</button>
	</form>
</div>
</div>
</template>

<script>
export default {
    name: "Signin",
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');


.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}
.overlay-right {
	right: 0;
}
</style>