<template>
  <v-app id="app-wrapper">
    <!-- Botón Burger Sticky -->
    <div class="burger">
      <div
        @click="
          drawer = !drawer;
          burgerCruz();
        "
        class="burger-btn emboss-txt"
        id="myDIV"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Seleccionar Idioma -->
    <div id="idiomaContainer" style="color:white;">
      <v-btn
        v-bind:class="[{ neon: isEspanol }]"
        text
        color="white"
        @click="changeLocale('es')"
        id="es"
        >Español</v-btn
      >|
      <v-btn
        v-bind:class="[{ neon: isEnglish }]"
        text
        color="white"
        @click="changeLocale('en')"
        id="en"
        >English</v-btn
      >
    </div>

    <!-- Menú -->

    <v-navigation-drawer
      class="transicion"
      v-model="drawer"
      width="100%"
      style="background-color: rgba(0,0,0,1)">
      <v-img
        :src="image_srcBckMenu"
        cover
        gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.9)"
        id="bckImg"
      >
        <v-container fluid style="background-color: rgba(0,0,0,0)">
          <v-row>
            <v-col cols="12">
              <v-row class="img-row">
                <v-img :src="image_src" class="logo-menu" contain></v-img>
              </v-row>
              <v-row class="menu-titulos">
                <v-card
                  color="rgba(0, 0, 0, 0)"
                  router
                  exact
                  outlined
                  tile
                  to="/home"
                  @click="
                    drawer = false;
                    burgerCruz();
                    cambiarColorHeader1();
                  "
                  @mouseover="mouseHover1()"
                  @mouseleave="mouseLeave()"
                  style="border: 0px; text-decoration: none;"
                >
                  <v-row class="menu-item">
                    <v-card-title
                      class="textoMenuItem"
                      >{{ $t("menuInicio") }}</v-card-title
                    >
                  </v-row>
                </v-card>
                <v-card
                  color="rgba(0, 0, 0, 0)"
                  router
                  exact
                  outlined
                  tile
                  to="/skills"
                  @click="
                    drawer = false;
                    burgerCruz();
                    cambiarColorHeader4();
                  "
                  @mouseover="mouseHover4()"
                  @mouseleave="mouseLeave()"
                  style="border: 0px; text-decoration: none;"
                >
                  <v-row class="menu-item">
                    <v-card-title
                      class="textoMenuItem"
                      >{{ $t("menuHabilidades") }}</v-card-title
                    >
                  </v-row>
                </v-card>
                <v-card
                  color="rgba(0, 0, 0, 0)"
                  router
                  exact
                  outlined
                  tile
                  to="/portafolios"
                  @click="
                    drawer = false;
                    burgerCruz();
                    cambiarColorHeader3();
                  "
                  @mouseover="mouseHover3()"
                  @mouseleave="mouseLeave()"
                  style="border: 0px; text-decoration: none;"
                >
                  <v-row class="menu-item">
                    <v-card-title
                      class="textoMenuItem"
                      >{{ $t("menuProyectos") }}</v-card-title
                    >
                  </v-row>
                </v-card>
                <v-card
                  color="rgba(0, 0, 0, 0)"
                  router
                  exact
                  outlined
                  tile
                  to="/contact"
                  @click="
                    drawer = false;
                    burgerCruz();
                    cambiarColorHeader5();
                  "
                  @mouseover="mouseHover5()"
                  @mouseleave="mouseLeave()"
                  style="border: 0px; text-decoration: none;"
                >
                  <v-row class="menu-item">
                    <v-card-title
                      class="textoMenuItem"
                      >{{ $t("menuContacto") }}</v-card-title
                    >
                  </v-row>
                </v-card>
                <!--v-card
                  color="rgba(0, 0, 0, 0)"
                  router
                  exact
                  outlined
                  tile
                  to="/lab"
                  @click="
                    drawer = false;
                    burgerCruz();
                    cambiarColorHeader2();
                  "
                  @mouseover="mouseHover2()"
                  @mouseleave="mouseLeave()"
                  style="border: 0px; text-decoration: none;"
                >
                  <v-row class="menu-item">
                    <v-card-title class="textoMenuItem">{{
                      $t("menuLab")
                    }}</v-card-title>
                  </v-row>
                </v-card-->
              </v-row>

              <div class="bottom">
                <div class="bottom-up">
                  <div>deval @ 2020</div>
                  <div style="position: absolute; right: 0;">
                    alfredo@thedeval.com
                  </div>
                </div>
                <div class="bottom-down">
                  <a href="https://www.github.com/alhuissi" target="_blank">
                    <v-icon
                      large
                      class="iconContacto"
                      color="#ffffff"
                      target="_blank"
                      href="https://www.github.com/alhuissi"
                      >mdi-github</v-icon
                    >
                  </a>
                  <a href="mailto:alfredo@thedeval.com" target="_blank">
                    <v-icon
                      large
                      class="iconContacto"
                      color="#ffffff"
                      target="_blank"
                      href="mailto:alfredo@thedeval.com"
                      >mdi-email</v-icon
                    >
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-navigation-drawer>

    <!-- Header-->
    <app-header ref="headerRef" style="z-index:5;"></app-header>

    <!-- Content-->
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view ref="routerViewRef" class="mui-container" />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import store from "./store/store";
import AppHeader from "./components/Header";
import i18n from "@/i18n";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  methods: {
    burgerCruz() {
      document.getElementById("myDIV").classList.toggle("change");
    },
    mouseHover1() {
      this.bgColorMenu = "#c8c7cc";
    },
    mouseHover2() {
      this.bgColorMenu = "#b8c9e3";
    },
    mouseHover3() {
      this.bgColorMenu = "#e6bda1";
    },
    mouseHover4() {
      this.bgColorMenu = "#d6cda1";
    },
    mouseHover5() {
      this.bgColorMenu = "#776633";
    },
    mouseLeave() {
      this.bgColorMenu = "#ebf6f3";
    },
    cambiarColorHeader1() {
      this.bgColor = "#c8c7cc";
      this.$refs.headerRef.cambiarColor1();
    },
    cambiarColorHeader2() {
      this.bgColor = "#b8c9e3";
      this.$refs.headerRef.cambiarColor2();
    },
    cambiarColorHeader3() {
      this.bgColor = "#e6bda1";
      this.$refs.headerRef.cambiarColor3();
    },
    cambiarColorHeader4() {
      this.bgColor = "#d6cda1";
      this.$refs.headerRef.cambiarColor4();
    },
    cambiarColorHeader5() {
      this.bgColor = "#776633";
      this.$refs.headerRef.cambiarColor5();
    },
    hideHeaderApp() {
      store.commit("esconder");
    },
    showHeaderApp() {
      store.commit("mostrar");
    },
    changeLocale(locale) {
      i18n.locale = locale;
    },
    getBrowserLocales(options = {}) {
      const defaultOptions = {
        languageCodeOnly: true,
      };

      const opt = {
        ...defaultOptions,
        ...options,
      };

      const browserLocales =
        navigator.languages === undefined
          ? [navigator.language]
          : navigator.languages;

      if (!browserLocales) {
        return undefined;
      }

      return browserLocales.map((locale) => {
        const trimmedLocale = locale.trim();

        return opt.languageCodeOnly
          ? trimmedLocale.split(/-|_/)[0]
          : trimmedLocale;
      });
    },
  },
  computed: {
    revisarHeader() {
      if (this.loaded) {
        if (store.state.headerIsVisible) {
          this.$refs.headerRef.showHeader();
          return true;
        } else {
          this.$refs.headerRef.hideHeader();
          return false;
        }
      } else {
        return null;
      }
    },
    isEspanol() {
      if (i18n.locale == "es") {
        return true;
      } else {
        return false;
      }
    },
    isEnglish() {
      if (i18n.locale == "en") {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    revisarHeader() {},
    isEspanol() {},
    isEnglish() {},
  },
  metaInfo: {
    title: "Deval",
    titleTemplate: "%s ",
    htmlAttrs: {
      lang: "es",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Software development. Web applications and webistes. Fullstack, backend, frontend.",
      },
      {
        property: "og:title",
        content: "Deval",
      },
      { property: "og:site_name", content: "Deval" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
  mounted() {
    this.loaded = true;
    this.$refs.headerRef.showHeader();
  },
  destroyed() {},
  data: () => ({
    image_src: require("../src/assets/logo.png"),
    image_srcBckMenu: require("../src/assets/bck3.jpg"),
    clipped: false,
    bgColor: "#ebf6f3",
    drawer: false,
    loaded: false,
    bgColorMenu: "#ebf6f3",
  }),
};
</script>

<style>
@import "./assets/main.css";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter,
.fade-leave {
  opacity: 1;
}
.emboss-txt {
  transition: 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  background-color: rgba(207, 207, 207, 0.1);
  position: relative;
  color: rgb(207, 207, 207);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow:
  /*3d layers*/ 0px 0px 1px rgb(167, 167, 167),
    0px 1px 1px rgb(167, 167, 167), 0px 2px 1px rgb(167, 167, 167),
    1px 1px 1px rgb(167, 167, 167), 1px 2px 1px rgb(167, 167, 167),
    1px 3px 1px rgb(167, 167, 167), 2px 2px 1px rgb(167, 167, 167),
    2px 3px 1px rgb(167, 167, 167), 2px 4px 1px rgb(167, 167, 167),
    1px 1px 3px rgba(0, 0, 0, 0.3), 1px 1px 7px rgba(0, 0, 0, 0.3),
    /*short soft bottom*/ 0px 2px 2px rgba(0, 0, 0, 0.2),
    /*left shadow*/ -2px 2px 10px rgba(0, 0, 0, 0.2),
    /*right shadow*/ 2px 2px 10px rgba(0, 0, 0, 0.2),
    /*white light*/ 1px 1px 120px rgba(255, 255, 255, 0.5);
}
.emboss-txt::after {
  content: "";
  top: 0;
  left: 0;
  animation: cycle 10s linear infinite;
  box-shadow: 0px 0px 100px rgba(11, 124, 199, 0.5);
}

#app-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: black;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
}
#cuerpo {
  transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
}
.mui-container {
  max-width: 100vw;
  max-height: 100vh;
  top: 0;
  left: 0;
}
.bckimg-menu {
  height: 100vh;
  top: 0%;
  left: 0%;
}
.burger {
  position: fixed;
  z-index: 999;
  transition: all 700ms ease;
}
.burger:hover {
  transition: 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  transform: rotate(180deg);
}
.burger-btn {
  width: 3.5em;
  height: 3.5em;
  padding: 1em;
  cursor: pointer;
  z-index: 999;
}
.burger-btn span {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: calc(100% - 2em);
  height: 2px;
  background: black;
  transition: 0.4s;
}
.burger-btn span:first-child {
  transform: translateY(-50%) translateX(-50%) translateY(-6px);
}
.burger-btn span:nth-child(2) {
  transform: translateY(-50%) translateX(-50%) scaleX(1);
}
.burger-btn span:nth-child(3) {
  transform: translateY(-50%) translateX(-50%) translateY(6px);
}
.change span:first-child {
  top: 50%;
  left: 15px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.change span:nth-child(2) {
  opacity: 0;
  left: -10px;
}
.change span:nth-child(3) {
  top: 50%;
  left: 15px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.row2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 3vh;
}
.menu-item:hover {
  border-bottom: 0px !important;
  text-decoration: none !important;
  transition: all 500ms ease;
  font-weight: 800 !important;
}
.iconContacto {
  padding: 5px;
  transition-duration: 1s ease;
}
.iconContacto:hover {
  cursor: pointer;
  transition-duration: 1s ease;
  transform: rotateY(180deg);
  opacity: 0.7;
}
#es {
  font-size: 10px;
  padding: 0;
}
#en {
  font-size: 10px;
  padding: 0;
}
#es:hover {
  opacity: 0.9;
  transform: translateY(-3px);
}
#en:hover {
  opacity: 0.9;
  transform: translateY(-3px);
}
.textoMenuItem {
  padding: 0em !important;
  font-size: calc(20px + 0.7vw) !important;
  font-weight: 600;
  transition: all 500ms ease;
  color: white;
  text-decoration: none;
}
.textoMenuItem:hover {
  transform: translateY(3px);
  text-shadow: 0 0 5px rgba(0, 178, 255, 0.7),
    1px 1px 10px rgba(0, 178, 255, 0.7), 1px 1px 20px rgba(0, 178, 255, 0.7),
    1px 1px 100px rgba(255, 255, 255, 1);
}
@media (min-width: 960px) {
  .transicion {
    background-color: black;
    height: 100vh;
    top: 0%;
    left: 0%;
    z-index: 20;
  }
  #bckImg {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    top: 0%;
    left: 0%;
    transition: 725ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .transicion:hover {
    transition: 725ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .bottom {
    position: fixed;
    z-index: 1;
    display: block;
    bottom: 5vh;
    width: 60%;
    left: 20%;
  }
  .bottom-up {
    display: flex;
    margin-bottom: 0em;
    flex-wrap: wrap;
    color: white;
  }
  .bottom-down {
    display: flex;
    border-top: 1px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
  }
  .menu-titulos {
    top: 50%;
    align-content: center;
    justify-content: center;
    transition: opacity 325ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .menu-item {
    position: relative;
    margin-left: 3vw;
    margin-right: 3vw;
    opacity: 1;
    border-bottom: 0px !important;
    transition: opacity 325ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .img-row {
    padding-top: 18vh;
    padding-bottom: 12vh;
    left: 40%;
  }
  .logo-menu {
    width: 20vw;
    height: 20vh;
    transition: 725ms ease;
  }
  .img-row:hover .logo-menu {
    transition: 725ms ease;
    transform: rotateY(180deg);
  }
  .burger {
    z-index: 999;
    left: 6vh;
    top: 6vh;
    width: auto;
  }
  .burger-btn {
    position: relative;
    z-index: 999;
  }
  #idiomaContainer {
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    z-index: 99;
    transition: all 725ms ease;
  }
}

@media (max-width: 960px) {
  .transicion {
    /*background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("../src/assets/fondo-menu.jpg");*/
    height: 100vh; /* You must set a specified height */
    top: 0%;
    left: 0%;
    transition: 725ms cubic-bezier(0.445, 0.05, 0.015, 1);
    z-index: 20;
  }
  #bckImg {
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
      url("../src/assets/bck3.jpg");
    height: 100vh; /* You must set a specified height */
    top: 0%;
    left: 0%;
    background-position: left; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    transition: 725ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .menu-titulos {
    position: absolute;
    align-content: center;
    justify-content: center;
    z-index: 999;
    transition: opacity 325ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .bottom {
    position: fixed;
    z-index: 1;
    width: 90%;
    left: 5%;
  }
  @media (max-height: 500px) {
    .menu-titulos {
      margin-top: 20vh;
    }
    .bottom{
      bottom: 7vh;
    }
  }
  @media (min-height: 500px) {
    .menu-titulos {
      margin-top: 33vh;
    }
    .bottom{
      bottom: 13vh;
    }
  }
  .menu-item {
    position: relative;
    left: 1em;
    margin-bottom: 1px;
    opacity: 0.7;
    z-index: 999;
    margin-top: 1vh;
    border-bottom: 0px !important;
    transition: opacity 325ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .transicion:hover {
    transition: 725ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .bottom-up {
    padding-bottom: 0px;
  }
  .bottom-down {
    display: flex;
    border-top: 1px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
  }
  .menu-titulos {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    transition: opacity 325ms cubic-bezier(0.445, 0.05, 0.015, 1);
  }
  .column {
    width: 100%;
  }
  .logo-menu {
    width: 30vw;
    height: 30vh;
    left: 33vw;
    top: 10vh;
  }
  .img-row {
    position: absolute;
    top: 0%;
    align-content: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  .burger {
    top: 1.5vh;
    right: 1.5vh;
    z-index: 999;
    width: auto;
    background-color: transparent !important;
  }
  .burger-btn {
    position: relative;
    z-index: 999;
  }
  #idiomaContainer {
    position: fixed;
    top: 2vh;
    left: 5vw;
    z-index: 99;
    transition: all 725ms ease;
  }
}
</style>
