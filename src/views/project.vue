<template>
  <div class="container page">
    <div class="card" style="height: 100rpx;">
      <h1>My Project</h1>
      <div class="card-project">
        <div class="project">
          <h2>Approlunette</h2>
          <h3>Website</h3>
          <a href="https://ayotflorent.wixsite.com/approlunette" target="blank" class="link-pro">
            <img src="../assets/approlunette-min.png" class="pro-image" alt>
          </a>
          <p class="para">E-commerce Website for selling optical and sunglasse to B2B</p>
        </div>
        <div class="project">
          <h2>Mister Cocktail</h2>
          <h3>Website</h3>
          <a
            href="https://rails-mister-cocktail-florent.herokuapp.com/"
            target="blank"
            class="link-pro"
          >
            <img src="../assets/mister-cocktail-min.png" class="pro-image" alt>
          </a>
          <p class="para">Website for finding recipe of well-known Cocktail</p>
        </div>
      </div>
      <div class="card-project">
        <div class="project">
          <h2>Skatecity</h2>
          <h3>Wechat mini-program</h3>
          <a href="#" target="blank" class="link-pro">
            <img src="../assets/Skatecity.jpg" class="pro-image">
          </a>
          <p class="para">
            Social mini-program for the skater that allow them to create spot, add geo-location
            and share with them friends
          </p>
        </div>
        <div class="project">
          <h2>Astek China</h2>
          <h3>Website & visual elements</h3>
          <a href="http://www.astekchina.com/" target="blank" class="link-pro">
            <img src="../assets/project-Astek.png" class="pro-image" alt>
          </a>
          <p
            class="para"
          >Actualization of the graphical Chart, creation of a new website in Wordpress and opening of a Wechat official account</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-project {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}

.card-project h3 {
  font-weight: normal;
  font-size: 25px;
}

.card-project h2 {
  font-weight: bolder;
  font-size: 30px;
}

.project {
  height: auto;
  width: 33%;
  border-radius: 5%;
  margin: 50px;
}

.pro-image {
  height: auto;
  width: 80%;
  margin: 20px;
}

.link-pro {
  text-decoration: none;
}

.project:hover {
  -moz-box-shadow: 3px 3px 5px 3px #262626;
  -webkit-box-shadow: 3px 3px 5px 3px #262626;
  box-shadow: 3px 3px 5px 3px #262626;
}

@media only screen and (max-width: 940px) {
  .card-project {
    flex-direction: column;
    align-items: center;
  }

  .project {
    height: auto;
    width: 100%;
    border-radius: 5%;
    padding-top: 15px;
  }

  .card-project h3 {
    font-weight: normal;
    font-size: 20px;
  }

  .card-project h2 {
    font-weight: bold;
    font-size: 30px;
  }

  .card-project img {
    width: 100%;
    height: auto;
  }
}
</style>

