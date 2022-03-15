<template>
  <div>
    <Navbar />
    <!-- <div class="container css-selector">
      <div class="tag">Featured</div>
      <img src="http://www.placehold.it/200x200" />
    </div> -->

    <div
      class="w-full h-screen"
      style="
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      "
    >
    <div
      class="absolute bg-white rounded-lg w-96 py-14"
      style="transform: translate(-50%, -50%); top: 50%; left: 50%"
    >
    <h1 class="text-center text-4xl py-4 leading-tight
              tracking-wide" style="font-family: 'DM Serif Display', serif">L<span style="color: #00db80">o</span>gin / Si<span style="color: #00db80">g</span>nup</h1>
              <div
      class="g-signin2 pt-6 pb-6 grid place-items-center"
      id="google-signin-btn"
      data-onsuccess="onSignIn"
      data-longtitle="true"
      data-theme="dark"
    ></div>
    <p class="text-center text-lg mx-4">mail us at aceclub@gmail.com, if you face any issues while signing in</p>
  
<div class="grid place-items-center pt-8">
        <NuxtLink to="/profile"
          ><button
            v-if="$store.state.isSigned == true"
            class="
              focus:outline-none
              transition
              duration-150
              ease-in-out
              text-white
              hover:bg-green-600
              rounded-full
              text-white
              px-5
              sm:px-8
              py-1
              sm:py-2
              text-sm
              bg-gradient-to-r
              hover:from-green-400
              hover:to-blue-500
              from-pink-500 to-yellow-500
              font-semibold
              animate__animated animate__pulse animate__infinite
            "
            style="background-color: #4ce6a7"
          >
            Visit Profile
          </button></NuxtLink
        >
</div>
    </div>
    <!-- <a href="#" @click="signOut()">Sign Out</a>
    {{ $store.state.name }}
    {{ $store.state.isSigned }} -->
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      isAuthenticated: false,
    };
  },
  methods: {
    onSignIn: function (googleUser) {
      var profile = googleUser.getBasicProfile();
      this.isAuthenticated = false;
      this.$store.commit("updateThroughGoogleSignIn", {
        name: profile.getName(),
        email: profile.getEmail(),
        user_avatar: profile.getImageUrl(),
        isSigned: true,
      });
    },
    signOut: function () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
        // window.location.href = '/';
      });
    },
  },
  mounted() {
    gapi.signin2.render("google-signin-btn", {
      onsuccess: this.onSignIn,
    });
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style>
</style>