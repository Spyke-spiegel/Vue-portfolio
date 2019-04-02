<template>
  <img src="../assets/florent_profile-min.jpg" alt="Florent Profile picture" class="avatar-lg">
</template>

<script>
export default {
  name: "avatar"
};
</script>

<style scoped>
.avatar-lg {
  height: 300px;
  width: 300px;
  border-radius: 150px;
  transition: all 0.2s ease-in-out;
}

.avatar-lg:hover {
  transform: scale(1.2);
  filter: grayscale(70%);
}
</style>


