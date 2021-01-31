<template>
<div>
<div class="overlay-panel overlay-right">
			<h1 class="h1-white">Infinity</h1>
			<p>Enter your details and start journey with us</p>
			<button class="ghost">Sign Up</button>
		</div>
  <div class="form-container sign-in-container">
	<form v-on:submit.prevent="loginUser">
		<h1>Sign In</h1>
	<input type="email" name="email" placeholder="Email" v-model="user.email">
	<input type="password" name="password" placeholder="Password" v-model="user.password">
     <router-link to="signup">Don't an have an account yet? <span class="directive">Sign up here</span></router-link>
	<button>Sign In</button>
	</form>
</div>
</div>
</template>

<script>
export default {
    name: "Signin",
    data(){
        return{
            user:{
                password: "",
                email:""
            }
        }
    },
    methods: {
        loginUser(){
            if(this.user.email == ""){
                alert("no email added")
            }
            else{
                alert("This is added email:"+this.user.email)
            }
        }
    }
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