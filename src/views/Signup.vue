<template>
<div>
<div class="overlay-panel overlay-left">
			<h1 class="h1-white">Infinity</h1>
			<p>Get products that you wish to get on time and in no distance</p>
			<button class="ghost" id="signIn">Sign In</button>
		</div>
    <div class="form-container sign-up-container">

<form v-on:submit.prevent="saveUser">
	<h1>Create Account</h1>
	<input type="text" name="fname" placeholder="First name" v-model="user.fname">
    <input type="text" name="lname" placeholder="Last name" v-model="user.lname">
    <input type="text" name="uname" placeholder="Username" v-model="user.uname">
	<input type="email" name="email" placeholder="Email" v-model="user.email">
	<input type="password" name="password" placeholder="Password" v-model="user.password">
    <router-link to="signin">Have an account? <span class="directive">Sign in here</span></router-link>
	<button>SignUp</button>
</form>
</div>
</div>
</template>

<script>
export default {
    name: "Signup",
    data(){
        return{
            user:{
                fname: "",
                lname:"",
                uname:"",
                password: "",
                email:""
            }
        }
    },
    methods: {
        saveUser(){
            if(this.user.uname == ""){
                alert("no username added")
            }
            else{
                alert("This is username:"+this.user.uname)
            }
        }
    }
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