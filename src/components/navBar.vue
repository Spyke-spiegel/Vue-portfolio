<template>
  <div class="nav-block">
    <div class="avatar">
      <router-link to="/">
        <img
          src="../assets/florent_profile-min.jpg"
          alt="Florent Profile picture"
          class="avatar-sm"
        >
      </router-link>
    </div>
    <div class="route">
      <router-link to="/" class="link">home</router-link>
      <router-link to="/project" class="link">project</router-link>
      <router-link to="/contact" class="link">contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
};
</script>

<style scoped>
.nav-block {
  z-index: 200;
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #343434;
  box-shadow: 2px 2px 3px grey;
  margin-bottom: 30px;
}

a {
  text-decoration: none;
  color: #fed766;
  font-size: 35px;
  display: inline-block;
  padding: 0px 20px;
  text-transform: capitalize;
  margin: 20px auto;
}

.avatar-sm {
  margin-left: 20px;
  height: auto;
  width: 40px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}

.avatar-sm:hover {
  transform: scale(1.2);
  filter: grayscale(70%);
}

/* .link {
  display: inline-block;
  color: #fed766;
  text-decoration: none;
  margin: 20px auto;
  font-size: 25px;
  
  font-style: italic;
} */

.link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #fed766;
  transition: width 0.3s;
}

.link:hover::after {
  width: 100%;
  /* transition: width .3s; */
}
</style>