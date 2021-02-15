<template>
  <header>
    <div class="mui-appbarZ" id="navbar">
      <v-container fluid>
        <div class="fondo-color" id="colorHeader">
          <div class="line"></div>
          <nav class="nav1" :style="x">
            <v-row class="box2" v-bind:style="{ borderColor: bgColor }">
              <v-col cols="3" xs="3" class="menuItem">
                <router-link to="/home">
                  <div @click="cambiarColor1()">
                    <p
                      v-bind:style="{ color: colorFont }"
                      v-bind:class="[{ neon: isActiveInicio }]"
                      class="neonRojo"
                    >
                      {{ $t("menuInicio") }}
                    </p>
                  </div>
                </router-link>
              </v-col>

              <v-col cols="3" xs="3" class="menuItem">
                <router-link to="/skills">
                  <div @click="cambiarColor4()">
                    <p
                      v-bind:style="{ color: colorFont }"
                      v-bind:class="[{ neon: isActiveSkills }]"
                      class="neonRojo"
                    >
                      {{ $t("menuHabilidades") }}
                    </p>
                  </div>
                </router-link>
              </v-col>

              <v-col cols="3" xs="3" class="menuItem">
                <router-link to="/portafolios">
                  <div @click="cambiarColor3()">
                    <p
                      v-bind:style="{ color: colorFont }"
                      v-bind:class="[{ neon: isActivePortafolios }]"
                      class="neonRojo"
                    >
                      {{ $t("menuProyectos") }}
                    </p>
                  </div>
                </router-link>
              </v-col>

              <v-col cols="3" xs="3" class="menuItem">
                <router-link to="/contact">
                  <div @click="cambiarColor5()">
                    <p
                      v-bind:style="{ color: colorFont }"
                      v-bind:class="[{ neon: isActiveContact }]"
                      class="neonRojo"
                    >
                      {{ $t("menuContacto") }}
                    </p>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </nav>
        </div>
      </v-container>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#c8c7cc",
      colorFont: "rgba(207, 207, 255, 1)",
      opacityHeader: 1,
      xValue: 0,
      yValue: 0,
    };
  },
  methods: {
    cambiarColor1() {
      this.bgColor = "#c8c7cc";
    },
    cambiarColor2() {
      this.bgColor = "#b8c9e3";
    },
    cambiarColor3() {
      this.bgColor = "#e6bda1";
    },
    cambiarColor4() {
      this.bgColor = "#d6cda1";
    },
    cambiarColor5() {
      this.bgColor = "#776633";
    },
    hideHeader() {
      document.getElementById("navbar").style.bottom = "-20vh";
    },
    showHeader() {
      document.getElementById("navbar").style.bottom = "5vh";
    },
    onScroll() {},
  },
  mounted() {},
  destroyed() {},
  watch: {},
  computed: {
    x() {
      let width = window.innerWidth;
      if (width >= 960) {
        return `transform: translateX(${this.xValue}%)`;
      } else {
        return `transform: translateX(${this.yValue}%)`;
      }
    },
    isActiveInicio() {
      if (this.$route.name == "Home") {
        return true;
      } else {
        return false;
      }
    },
    isActiveSkills() {
      if (this.$route.name == "Skills") {
        return true;
      } else {
        return false;
      }
    },
    isActivePortafolios() {
      if (this.$route.name == "Portafolios") {
        return true;
      } else {
        return false;
      }
    },
    isActiveContact() {
      if (this.$route.name == "Contact") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="css">
@import "/assets/main.css";

#navbar {
  transition: 925ms;
}
.neonRojo {
  opacity: 1;
  transition: all 525ms ease;
}
.neonRojo:hover {
  color: #fff;
  text-shadow: 0 0 5px rgba(25, 200, 0, 1), 0 0 10px rgba(25, 200, 0, 1),
    0 0 20px rgba(25, 200, 0, 1), 0 0 40px rgba(177, 0, 0, 1),
    0 0 80px rgba(177, 0, 0, 1), 0 0 90px rgba(177, 0, 0, 1),
    0 0 100px rgba(100, 0, 0, 1), 0 0 140px rgba(100, 0, 0, 1),
    0 0 180px rgba(100, 0, 0, 1);
}

@keyframes cycle {
  0% {
    box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);
  }
  20% {
    box-shadow: 10px 10px 100px rgba(168, 11, 199, 0.5);
  }
  40% {
    box-shadow: 10px 10px 100px rgba(11, 199, 96, 0.5);
  }
  60% {
    box-shadow: 10px 10px 100px rgba(199, 11, 11, 0.5);
  }
  80% {
    box-shadow: 10px 10px 100px rgba(199, 96, 11, 0.5);
  }
  100% {
    box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);
  }
}

@media (max-width: 960px) {
  .nav1 {
    height: 0;
    transition: 925ms cubic-bezier(0.445, 0.05, 0.015, 1);
    width: 70vw;
    font-size: 12px;
  }
  .fondo-color {
    position: relative;
    color: "#c8c7cc";
    transition: 925ms;
  }
  .mui-appbarZ {
    display: none;
    color: #c8c7cc;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition-duration: 925ms;
    transition-duration: 925ms;
  }
}
@media (min-width: 960px) {
  .img-row2 {
    position: relative;
  }
  .line {
    content: "";
    position: absolute;
    opacity: 1;
    height: 2px;
  }
  .fondo-color {
    width: 100%;
    transition: 925ms;
  }
  .nav1 {
    z-index: 3;
    width: 100vw;
    padding-left: 20vw;
    padding-right: 20vw;
    font-family: "quantum";
    text-transform: uppercase;
    font-size: 20px;
    transition: 125ms;
    opacity: 1;
  }
  .mui-appbarZ {
    position: fixed;
    width: 100%;
    -webkit-transition-duration: 925ms;
    transition-duration: 125ms;
    z-index: 9;
  }
  .menuItem {
    text-align: center;
    transition: 125ms;
    color: white;
    padding-bottom: 0 !important;
  }
  .menuItem:hover {
    text-shadow: 1px 1px 1px white;
  }
  .menuItem:active {
    text-shadow: 1px 1px 1px white;
    opacity: 0.1;
  }
  .box {
    transition: 0.95s cubic-bezier(0.55, 0, 0.1, 1);
    position: relative;
    height: 6vh;
    color: rgb(207, 207, 207);
    border-radius: 25px;
    border: 1px;
    box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);
  }
  .box2 {
    border: 1px;
    border-radius: 25px;
    border-style: solid;
    background-color: rgba(0, 0, 0, 0.9);
    border-color: white;
    padding-bottom: 0 !important;
  }
}
</style>
