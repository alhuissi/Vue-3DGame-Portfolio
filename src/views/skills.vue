<template>
  <section>
    <canvas id="e"></canvas>

    <div id="fondoSkills">
      <v-btn text id="preguntaSkills" @click="openSkills()"
        ><v-icon text large color="#ffffff">mdi-help</v-icon></v-btn
      >
      <div id="containerSkills">
        <v-btn text id="cruzSkills" @click="closeSkills()"
          ><v-icon text color="#ffffff">mdi-close</v-icon></v-btn
        >
        <vue-scroll :ops="ops">
          <v-container fluid style="max-height: 55vh">
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="2"
                align="center"
                style="
                  padding-bottom: 0px !important;
                  padding-top: 0px !important;
                "
              >
                <v-row no-gutters>
                  <v-col cols="12" align="center">
                    <v-img
                      :src="image_srcAL"
                      height="100px"
                      width="100px"
                      class="img1"
                      contain
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row no-gutters class="iconos">
                  <v-col cols="6" align="right">
                    <a href="https://www.github.com/alhuissi" target="_blank">
                      <v-icon
                        color="#ffffff"
                        class="iconContacto"
                        target="_blank"
                        href="https://www.github.com/alhuissi"
                        >mdi-github</v-icon
                      >
                      <div id="gitHub">GitHub</div>
                    </a>
                  </v-col>
                  <v-col cols="6" align="left">
                    <a href="mailto:alfredo@thedeval.com" target="_blank">
                      <v-icon
                        color="#ffffff"
                        class="iconContacto"
                        target="_blank"
                        href="mailto:alfredo@thedeval.com"
                        >mdi-email</v-icon
                      >
                      <div id="enviarMail">Email</div>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="12" md="10">
                <div class="parrafoSkills">
                  <v-card
                    flat
                    style="background-color: rgba(0, 0, 0, 0); color: white"
                    ><v-card-title style="font-size: 4vh; margin-left: -2vh">{{
                      $t("salutation")
                    }}</v-card-title>
                    <span style="padding-left: 5vh">
                      {{ $t("skills1par") }}
                    </span></v-card
                  >
                </div>
              </v-col>
            </v-row>
            <v-row class="parrafoSkills">
              <v-col cols="12">
                <span style="padding-left: 5vh"> {{ $t("skills2par") }}</span>
              </v-col>
            </v-row>
            <v-row class="parrafoSkills">
              <v-col cols="12" align="center" style="font-size:calc(16px + 0.3vw);margin-bottom:1vh;">
                {{ $t("skills3par") }}
              </v-col>
            </v-row>
            <v-row class="parrafoSkills">
              <v-col cols="4" md="2" v-for="tech in tecnologias" :key="tech.nombre" align="center">
                <v-icon large color="orange" class="iconTech">{{ tech.icon }}</v-icon>
                <div>{{ tech.nombre }}</div> 
              </v-col>
            </v-row>
            <v-row class="parrafoSkills">
              <v-card
                outlined
                router
                to="/portafolios"
                color="rgba(0, 0, 0, 0)">
                <div class="seeSkills">
                  <v-icon color="#0fffff">mdi-arrow-right</v-icon
                  >{{ $t("home2text") }}
                </div>
              </v-card>
            </v-row>
          </v-container>
        </vue-scroll>
      </div>
      <div class="iconSwipeContainer">
        <v-icon color="white" class="iconSwipe">mdi-gesture-swipe </v-icon>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";

export default {
  data() {
    return {
      camera: null,
      stats: null,
      container: null,
      scene: null,
      renderer: null,
      water: null,
      controls: null,
      sky: null,
      blocker: null,
      tecnologias: [
        { nombre: "Java", icon: "mdi-language-java" },
        /*{ nombre: "C++", icon: "mdi-language-cpp" },*/
        { nombre: "PHP", icon: "mdi-language-php" },
        { nombre: "Javascript", icon: "mdi-language-javascript" },
        { nombre: "Python", icon: "mdi-language-python" },
        { nombre: "HTML5", icon: "mdi-language-html5" },
        { nombre: "CSS3", icon: "mdi-language-css3" },
        { nombre: "Vue", icon: "mdi-vuejs" },
        { nombre: "Vuetify", icon: "mdi-vuetify" },
        { nombre: "Nuxt", icon: "mdi-nuxt" },
        { nombre: "Node", icon: "mdi-nodejs" },
        { nombre: "Docker", icon: "mdi-docker" },
        { nombre: "Angular", icon: "mdi-angular" },
        { nombre: "Ionic", icon: "mdi-circle" },
        { nombre: "Wordpress", icon: "mdi-wordpress" },
        { nombre: "Shopify", icon: "mdi-circle" },
        { nombre: "ThreeJS", icon: "mdi-circle" },
        { nombre: "Photoshop", icon: "mdi-adobe" },
        { nombre: "Premiere Pro", icon: "mdi-adobe" },
      ],
      image_srcAL: require("../assets/AL.jpg"),
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          wheelScrollDuration: 300,
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
          speed: 300,
        },
        rail: {},
        bar: { background: "#4AD1B6",keepShow: true, onlyShowBarOnScroll: false, },
        scrollButton: {
        enable: true,
        background: 'rgb(3, 185, 118)',
        opacity: 1,
        step: 180,
        mousedownStep: 30
      }
      },
    };
  },
  metaInfo: {
    title: "The Deval",
    titleTemplate: "%s | Skills",
  },
  methods: {
    init() {
      let fondoSkills = document.getElementById("fondoSkills");
      const canvas = document.querySelector("#e");
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.11,
        1000
      );
      this.camera.position.set(0, 50, 0);
      this.camera.lookAt(new THREE.Vector3(0, -50, 0));
      let light = new THREE.AmbientLight(0xffffff, 0x000000, 10);
      light.position.set(0, 500, 50);
      this.scene.add(light);
      this.scene.background = new THREE.Color(0x007077);
      //this.scene.fog = new THREE.Fog(0xffffff, 0, 2500);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxPolarAngle = Math.PI * 0.495;
      this.controls.target.set(0, 10, 0);
      this.controls.minDistance = 40.0;
      this.controls.maxDistance = 200.0;
      this.controls.update();
      // Water

      let waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

      this.water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          "/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        alpha: 1.0,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: this.scene.fog !== undefined,
      });

      this.water.rotation.x = -Math.PI / 2;

      this.scene.add(this.water);

      // Add Sky
      /*
      this.sky = new Sky();
      this.sky.scale.setScalar(5);
      this.scene.add(this.sky);
      */
      fondoSkills.appendChild(this.renderer.domElement);
      this.overlay = false;
    },
    onWindowResize: function () {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    render() {
      let time = performance.now() * 0.001;
      this.water.material.uniforms["time"].value += 1.0 / 60.0;
      requestAnimationFrame(this.render);
      this.renderer.render(this.scene, this.camera);
    },
    closeSkills() {
      document.getElementById("containerSkills").style.opacity = "0";
      document.getElementById("preguntaSkills").style.opacity = "1";
      document.getElementById("preguntaSkills").style.display = "";
      document.getElementById("containerSkills").style.zIndex = "-1";
      document.getElementById("containerSkills").style.display = "none";
    },
    openSkills() {
      document.getElementById("containerSkills").style.opacity = "1";
      document.getElementById("preguntaSkills").style.opacity = "0";
      document.getElementById("preguntaSkills").style.display = "none";
      document.getElementById("containerSkills").style.zIndex = "1";
      document.getElementById("containerSkills").style.display = "";
    },
  },
  mounted() {
    this.init();
    this.render();
    window.addEventListener("resize", this.onWindowResize, false);
  },
  destroyed() {
    this.renderer.forceContextLoss();
    //document.body.removeChild(this.renderer.domElement);
  },
  watch: {
    overlay() {},
  },
};
</script>

<style>
.seeSkills {
  font-size: 16px;
  color: white;
  font-family: coolvetica;
  transition: 325ms ease;
  margin-bottom: 5vh;
  margin-left: 2vw;
  margin-top: 2vh;
}
.seeSkills:hover {
  opacity: 0.5;
  font-size: 15px;
}
.iconTech{
  transition: all 325ms ease;
}
.iconTech:hover{
  transform:scale(1.2,1.2);
}
@media (min-width: 960px) {
  #containerSkills {
    position: fixed;
    background-color: black;
    margin-left: 18vw;
    margin-right: 18vw;
    margin-top: 10vh;
    padding-left: 5vh;
    padding-right: 0vh;
    text-justify: center !important;
    padding-bottom: 1vh;
    background-color: rgba(0, 0, 0, 0.8);
    transition: 325ms ease;
    opacity: 0.95;
    z-index: 99;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    animation: cycle 10s infinite;
  }
  #containerSkills:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.95);
    border-color: rgba(255, 255, 255, 0.95);
  }
  #fondoSkills {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 325ms;
  }
  .img1 {
    position: relative;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    top: 5vh;
    transition: all 325ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    backface-visibility: hidden;
  }
  .iconos {
    position: relative;
    top: 20%;
  }
  .iconContacto {
    padding: 5px;
    transition-duration: 3s ease;
  }
  .iconContacto:hover {
    cursor: pointer;
    transition-duration: 3s ease;

    opacity: 0.7;
  }
  #gitHub {
    position: absolute;
    top: 50px;
    left: 35%;
    color: white;
    transition: all 1s ease;
    opacity: 0;
  }
  #enviarMail {
    position: absolute;
    top: 50px;
    left: 38%;
    color: white;
    transition: all 1s ease;
    opacity: 0;
  }
  #e {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  #preguntaSkills {
    position: absolute;
    color: white;
    right: 5vw;
    top: 10vh;
    opacity: 0;
    z-index: 99;
  }
  #preguntaSkills:hover {
    transform: translateY(7px);
  }
  #cruzSkills {
    position: relative;
    color: black;
    top: 1vh;
    left: 90%;
  }
  #cruzSkills:hover {
    opacity: 0.7;
  }
  .parrafoSkills {
    position: relative;
    margin-right: 2vw;
    font-family: coolvetica;
    font-size: calc(16px + 0.1vw);
    text-justify: center !important;
    color: white;
    transition: 725ms ease;
    letter-spacing: 0.5px;
  }
  .iconSwipeContainer {
    position: fixed;
    left: 48vw;
    bottom: 15vh;
    z-index: 99;
  }
  @media (min-height: 900px) {
    .parrafoSkills {
      font-size: 20px;
    }
    .iconSwipeContainer {
      bottom: 20vh;
    }
    .containerSkills {
      margin-top: 15vh;
    }
  }
  .iconSwipe {
    font-size: 80px !important;
    opacity: 0.7;
    transition: all 2s ease;
  }
  .iconSwipe:hover {
    opacity: 0.1;
    transform: rotate(360deg);
  }
}
@media (max-width: 960px) {
  #containerSkills {
    position: fixed;
    background-color: black;
    margin-left: 0vw;
    margin-right: 0vw;
    margin-top: 13vh;
    padding-top: 7vh;
    padding-left: 2vh;
    padding-right: 2vh;
    text-justify: center !important;
    padding-bottom: 1vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 725ms ease;
    opacity: 0.95;
    z-index: 99;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    animation: cycle 10s infinite;
  }
  #containerSkills:hover {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.7);
  }
  .img1 {
    border-radius: 50px;
    bottom:5%;
    width: 100px;
    height: 100px;
    transition: 725ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    backface-visibility: hidden;
  }
  #fondoSkills {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 925ms;
  }
  #e {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  .iconos {
    position: relative;
    bottom:5%;
  }
  .iconContacto {
    padding: 5px;
    transition-duration: 3s ease;
    z-index: 999;
  }
  .iconContacto:hover {
    cursor: pointer;
    transition-duration: 3s ease;
    transform: translateY(-7px);
    opacity: 0.7;
  }
  #gitHub {
    position: absolute;
    top: 20%;
    color: white;
    transition-duration: 1s ease;
    opacity: 0;
    display: none;
  }
  #enviarMail {
    position: absolute;
    top: 20%;
    color: white;
    transition-duration: 1s ease;
    opacity: 0;
    display: none;
  }
  #preguntaSkills {
    position: absolute;
    color: white;
    right: 0vw;
    top: 15vh;
    opacity: 0;
    z-index: 99;
  }
  #preguntaSkills:hover {
    transform: translateY(7px);
  }
  #cruzSkills {
    position: absolute;
    color: black;
    top: 1vh;
    z-index: 9;
    left: 0%;
  }
  .parrafoSkills {
    position: relative;
    top: -10vh !important;
    font-family: coolvetica;
    padding-right: 2vw;
    font-size: 16px;
    text-justify: center !important;
    color: white;
    transition: 725ms ease;
    text-align: justify;
    text-justify: inter-word;
  }
  .iconSwipeContainer {
    position: fixed;
    left: 44vw;
    bottom: 5vh;
    z-index: 99;
  }
  .iconSwipe {
    font-size: 40px !important;
    opacity: 0.5;
    transition: all 2s ease;
  }
  .iconSwipe:hover {
    opacity: 0.1;
    transform: rotate(360deg);
  }
}
</style>
