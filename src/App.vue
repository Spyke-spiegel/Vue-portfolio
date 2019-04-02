<template>
  <div id="app">
    <navBar/>
    <transition
      name="router-anim"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
  components: {
    navBar
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
* {
  margin: 0;
}

.page {
  position: absolute;
  margin-top: 5%;
  margin-left: 16%;
  width: inherit;
  text-align: center;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fed766;
  text-align: center;
}

h1 {
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  font-size: 80px;
  margin: 20px;
}

h2 {
  font-size: 35px;
  font-weight: bold;
  margin: 20px;
}

p {
  font-size: 25px;
}

.cool-link {
  display: inline-block;
  color: #fed766;
  text-decoration: none;
  margin: 20px auto;
  font-size: 25px;
  text-transform: capitalize;
  font-style: italic;
}

.cool-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #fed766;
  transition: width 0.3s;
}

.cool-link:hover::after {
  width: 100%;
  /* transition: width .3s; */
}

.link_social {
  font-size: 35px;
  padding: 0px 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fed766;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #343434;
  border-radius: 50px;
  width: 60vw;
  padding: 50px;
  box-shadow: 2px 2px 3px grey;
  margin: 20px;
}
</style>
