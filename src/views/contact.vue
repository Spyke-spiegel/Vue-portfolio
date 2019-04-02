<template>
  <div class="container page">
    <div class="card" style="height: 100rpx">
      <h1>Contact</h1>
      <div class="container-contact">
        <div class="pages-block">
          <h2>Florent Ayot</h2>
          <div class="card-op">
            <ul class="link_social">
              <li>
                <a href="https://www.linkedin.com/in/florent-ayot-6a2564165/" target="blank">
                  <i class="fab fa-linkedin"></i>
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <i class="fab fa-weixin"></i>
                  Wechat
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/spyke_spiegel007" target="blank">
                  <i class="fab fa-twitch"></i>
                  Twitch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-map">
          <img src="@/assets/Map_Shanghai.png" class="map">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 20 !important;
}

.container-contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
}

.map {
  height: auto;
  width: 100%;
}

.page-map {
  width: 50%;
}

.wechat {
  height: auto;
  width: 20vw;
}

.map-img {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.pages-block {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.pages-block h2 {
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  font-size: 70px;
  margin-bottom: 20px;
}

.card-op .link_social a {
  font-size: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #fed766;
}

.card-op .link_social i {
  margin-right: 5px;
}

ul {
  padding-inline-start: 0;
}
</style>

