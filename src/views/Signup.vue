<template>
<div>
<div class="overlay-panel overlay-left">
			<h1>Infinity</h1>
			<p>Get products that you wish to get on time and in no distance</p>
			<button class="ghost" id="signIn">Sign In</button>
		</div>
    <div class="form-container sign-up-container">

<form action="">
	<h1>Create Account</h1>
	<input type="text" name="name" placeholder="Name">
	<input type="email" name="email" placeholder="Email">
	<input type="password" name="password" placeholder="Password">
    <router-link to="signin">Have an account? <span class="directive">Sign in here</span></router-link>
	<button>SignUp</button>
</form>
</div>
</div>
</template>

<script>
export default {
    name: "Signup",
}
</script>

<style scoped>
.sign-up-container {
	right: 0;
	width: 50%;
	z-index: 2;
}
.overlay-panel {
    color: #fff;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
    background-color: #407BFF;
    left: 0;
}

</style>