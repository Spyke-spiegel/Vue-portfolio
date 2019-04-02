<template>
  <div class="home page">
    <div class="container">
      <div class="card">
        <avatar/>
        <h1>Florent Ayot</h1>
        <h2 class="title_medium">Programmer Full Stack</h2>
        <p>After 7 years in the aeronautics industry, I choose to change my life and attend "Le Wagon" coding school.</p>
        <a class="cool-link top" href="https://lewagon.com">See yourself</a>
      </div>

      <div class="card">
        <ul class="link_social">
          <li>
            <a href="http://www.facebook.com/" target="blank">
              <i class="fab fa-facebook-square"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/florent-ayot-6a2564165/" target="blank">
              <i class="fab fa-linkedin"></i> Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/spyke_spiegel007" target="blank">
              <i class="fab fa-twitch"></i> Twitch
            </a>
          </li>
        </ul>
      </div>

      <div class="card">
        <h2 class="title_big">My Favorites Movies</h2>

        <div class="card-movie">
          <img src="@/assets/back_to_the_futur.jpg" class="movie_rectangular">
          <div class="card-img">
            <h3 class="movie_title cool-link">Back To The Future</h3>
            <p>Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.</p>
          </div>
        </div>

        <div class="card-movie">
          <img src="@/assets/right_stuff.jpg" class="movie_rectangular">
          <div class="card-img">
            <h3 class="movie_title cool-link">The Right Stuff</h3>
            <p>The story of the original Mercury 7 astronauts and their macho, seat-of-the-pants approach to the space program.</p>
          </div>
        </div>

        <div class="card-movie">
          <img src="@/assets/inception.jpg" class="movie_rectangular">
          <div class="card-img">
            <h3 class="movie_title cool-link">Inception</h3>
            <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.</p>
          </div>
        </div>

        <div class="card-movie">
          <img src="@/assets/interstellar.jpg" class="movie_rectangular">
          <div class="card-img">
            <h3 class="movie_title cool-link">Interstellar</h3>
            <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import avatar from "@/components/avatar.vue";
export default {
  name: "home",

  components: {
    avatar
  }
};
</script>

<style scoped>
.link_social > li {
  font-size: 35px;
  display: inline-block;
  padding: 0px 20px;
}

h3 {
  font-size: 35px;
  margin-bottom: 40px;
}

.card a {
  color: #fed766;
  text-decoration: none;
  margin: 20px auto;
  font-size: 45px;
}

.card-movie {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.card-movie p {
  padding: 0px 30px;
  word-wrap: break-word;
}

.movie_rectangular {
  margin: 0;
  width: 29vw;
  height: auto;
}

.top {
  margin-top: 40px !important;
}

@media only screen and (max-width: 940px) {
  .container {
    width: 100%;
    margin: 0;
  }

  .card-movie {
    flex-direction: column;
  }
  .movie_rectangular {
    margin: 0;
    width: 50vw;
    height: auto;
  }
  .card {
    padding: 30px;
  }
}
</style>

