<template>
  <section>
    <canvas id="c"></canvas>
    <div id="blocker">
      <v-btn text id="pregunta" @click="open()"
        ><v-icon text large color="#ffffff">mdi-help</v-icon>
      </v-btn>

      <div id="presentacion">
        <!-- Scroll solo en versión para celular -->
        <vue-scroll v-if="this.isMobile" :ops="ops">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" align="center">
                <div
                  class="happyCustomers"
                  style="
                    color: white;
                    font-family: coolvetica;
                    text-transform: uppercase;
                    font-size: 14px;
                  "
                >
                  { {{ $t("homeTextClients") }} }
                </div>
              </v-col>
            </v-row>
            <v-row style="z-index: 9999 !important">
              <v-col cols="12">
                <v-carousel
                  id="testimonios"
                  hide-delimiters
                  touchless
                  height="400px"
                  :show-arrows="false"
                  cycle
                >
                  <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                    <v-row align="center" justify="center">
                      <v-col cols="12">
                        <div id="testimonioText">
                          "{{ $t("testimonio1") }}" <br />
                          <v-img
                            :src="require('@/assets/logos/logo-makine.png')"
                            height="50px"
                            width="50px"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              background-color: rgba(255, 255, 255, 0.9);
                              border-radius: 50px;
                              margin-top: 1vh;
                            "
                          ></v-img>
                        </div>
                      </v-col>
                    </v-row>
                  </v-carousel-item>
                  <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                    <v-sheet
                      style="background-color: rgba(0, 0, 0, 0)"
                      height="100%"
                    >
                      <v-row align="center" justify="center">
                        <v-col cols="12">
                          <div id="testimonioText">
                            "{{ $t("testimonio2") }}" <br />
                            <v-img
                              :src="require('@/assets/logos/logo-casa.png')"
                              height="50px"
                              width="50px"
                              style="
                                margin-left: auto;
                                margin-right: auto;
                                background-color: rgba(255, 255, 255, 0.9);
                                border-radius: 50px;
                                margin-top: 1vh;
                              "
                            ></v-img>
                          </div>
                        </v-col>
                      </v-row> </v-sheet
                  ></v-carousel-item>
                  <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                    <v-sheet
                      style="background-color: rgba(0, 0, 0, 0)"
                      height="100%"
                    >
                      <v-row align="center" justify="center">
                        <v-col cols="12">
                          <div id="testimonioText">
                            "{{ $t("testimonio3") }}" <br />
                            <v-img
                              :src="require('@/assets/logos/logo-l-vk.png')"
                              height="50px"
                              width="50px"
                              style="
                                margin-left: auto;
                                margin-right: auto;
                                background-color: rgba(255, 255, 255, 0.9);
                                border-radius: 50px;
                                margin-top: 1vh;
                              "
                            ></v-img>
                          </div>
                        </v-col>
                      </v-row> </v-sheet
                  ></v-carousel-item>
                  <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                    <v-sheet
                      style="background-color: rgba(0, 0, 0, 0)"
                      height="100%"
                    >
                      <v-row align="center" justify="center">
                        <v-col cols="12">
                          <div id="testimonioText">
                            "{{ $t("testimonio4") }}" <br />
                            <v-img
                              :src="require('@/assets/logos/logo-beatup.png')"
                              height="50px"
                              width="50px"
                              style="
                                margin-left: auto;
                                margin-right: auto;
                                background-color: rgba(255, 255, 255, 0.9);
                                border-radius: 50px;
                                margin-top: 1vh;
                              "
                            ></v-img>
                          </div>
                        </v-col>
                      </v-row> </v-sheet
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
            <v-row style="padding-left: 2vw; padding-bottom: 1vh">
              <v-col cols="12" md="4" align="center">
                <v-card class="serviciosCard flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <v-icon size="100" color="orange">
                        mdi-monitor-cellphone
                      </v-icon>
                      <br />
                      <div
                        style="
                          color: white;
                          font-family: coolvetica;
                          font-size: calc(16px + 0.3vw);
                          width: 80%;
                          margin-top: 1vh;
                        "
                      >
                        {{ $t("home1service") }}
                      </div>
                    </div>
                    <div class="flip-card-back">
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home1service_a") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home1service_b") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home1service_c") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home1service_d") }}
                      </v-row>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" align="center">
                <v-card class="serviciosCard flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <v-icon size="100" color="orange">
                        mdi-code-tags-check
                      </v-icon>
                      <br />
                      <div
                        style="
                          color: white;
                          font-family: coolvetica;
                          font-size: calc(16px + 0.3vw);
                          width: 80%;
                          margin-top: 1vh;
                        "
                      >
                        {{ $t("home2service") }}
                      </div>
                    </div>
                    <div class="flip-card-back">
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home2service_a") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home2service_b") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home2service_c") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home2service_d") }}
                      </v-row>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" align="center">
                <v-card class="serviciosCard flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <v-icon size="100" color="orange">
                        mdi-database-lock
                      </v-icon>
                      <br />
                      <div
                        style="
                          color: white;
                          font-family: coolvetica;
                          font-size: calc(16px + 0.3vw);
                          width: 80%;
                          margin-top: 1vh;
                        "
                      >
                        {{ $t("home3service") }}
                      </div>
                    </div>
                    <div class="flip-card-back">
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home3service_a") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home3service_b") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home3service_c") }}
                      </v-row>
                      <v-row no-gutters
                        ><v-icon small style="margin-right: 5px" color="orange"
                          >mdi-circle</v-icon
                        >{{ $t("home3service_d") }}
                      </v-row>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card outlined router to="/skills" color="rgba(0, 0, 0, 0)">
                  <div class="seeSkills2">
                    <v-icon color="#0fffff">mdi-arrow-right</v-icon
                    >{{ $t("home1text") }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </vue-scroll>

        <!-- Versión Desktop -->
        <v-container v-if="!this.isMobile" fluid>
          <v-row style="padding-left: 2vw; padding-bottom: 1vh">
            <v-col cols="12" md="4" align="center">
              <v-card class="serviciosCard flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <v-icon size="100" color="orange">
                      mdi-monitor-cellphone
                    </v-icon>
                    <br />
                    <div
                      style="
                        color: white;
                        font-family: coolvetica;
                        font-size: calc(16px + 0.3vw);
                        width: 80%;
                        margin-top: 1vh;
                      "
                    >
                      {{ $t("home1service") }}
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home1service_a") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home1service_b") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home1service_c") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home1service_d") }}
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" align="center">
              <v-card class="serviciosCard flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <v-icon size="100" color="orange">
                      mdi-code-tags-check
                    </v-icon>
                    <br />
                    <div
                      style="
                        color: white;
                        font-family: coolvetica;
                        font-size: calc(16px + 0.3vw);
                        width: 80%;
                        margin-top: 1vh;
                      "
                    >
                      {{ $t("home2service") }}
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home2service_a") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home2service_b") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home2service_c") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home2service_d") }}
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" align="center">
              <v-card class="serviciosCard flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <v-icon size="100" color="orange">
                      mdi-database-lock
                    </v-icon>
                    <br />
                    <div
                      style="
                        color: white;
                        font-family: coolvetica;
                        font-size: calc(16px + 0.3vw);
                        width: 80%;
                        margin-top: 1vh;
                      "
                    >
                      {{ $t("home3service") }}
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home3service_a") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home3service_b") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home3service_c") }}
                    </v-row>
                    <v-row no-gutters
                      ><v-icon small style="margin-right: 5px" color="orange"
                        >mdi-circle</v-icon
                      >{{ $t("home3service_d") }}
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" align="center">
              <div
                class="happyCustomers"
                style="
                  color: white;
                  font-family: coolvetica;
                  text-transform: uppercase;
                "
              >
                { {{ $t("homeTextClients") }} }
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" align="center">
              <v-carousel
                id="testimonios"
                hide-delimiters
                :show-arrows="false"
                cycle
              >
                <v-carousel-item
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <v-sheet
                    style="background-color: rgba(0, 0, 0, 0)"
                    height="100%"
                  >
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12">
                        <div id="testimonioText">
                          "{{ $t("testimonio1") }}" <br />
                          <v-img
                            :src="require('@/assets/logos/logo-makine.png')"
                            height="100px"
                            width="100px"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              background-color: rgba(255, 255, 255, 0.9);
                              border-radius: 50px;
                              margin-top: 1vh;
                            "
                          ></v-img>
                        </div>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <v-sheet
                    style="background-color: rgba(0, 0, 0, 0)"
                    height="100%"
                  >
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12">
                        <div id="testimonioText">
                          "{{ $t("testimonio2") }}" <br />
                          <v-img
                            :src="require('@/assets/logos/logo-casa.png')"
                            height="100px"
                            width="100px"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              background-color: rgba(255, 255, 255, 0.9);
                              border-radius: 50px;
                              margin-top: 1vh;
                            "
                          ></v-img>
                        </div>
                      </v-col>
                    </v-row> </v-sheet
                ></v-carousel-item>
                <v-carousel-item
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <v-sheet
                    style="background-color: rgba(0, 0, 0, 0)"
                    height="100%"
                  >
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12">
                        <div id="testimonioText">
                          "{{ $t("testimonio3") }}" <br />
                          <v-img
                            :src="require('@/assets/logos/logo-l-vk.png')"
                            height="100px"
                            width="100px"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              background-color: rgba(255, 255, 255, 0.9);
                              border-radius: 50px;
                              margin-top: 1vh;
                            "
                          ></v-img>
                        </div>
                      </v-col>
                    </v-row> </v-sheet
                ></v-carousel-item>
                <v-carousel-item
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <v-sheet
                    style="background-color: rgba(0, 0, 0, 0)"
                    height="100%"
                  >
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12">
                        <div id="testimonioText">
                          "{{ $t("testimonio4") }}" <br />
                          <v-img
                            :src="require('@/assets/logos/logo-beatup.png')"
                            height="100px"
                            width="100px"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              background-color: rgba(255, 255, 255, 0.9);
                              border-radius: 50px;
                              margin-top: 1vh;
                            "
                          ></v-img>
                        </div>
                      </v-col>
                    </v-row> </v-sheet
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-card>
        <div id="flechaPlay1">
          <v-icon x-large color="#ffffff" class="neon">mdi-arrow-right</v-icon>
        </div>
        <v-row justify="center">
          <v-col cols="12" align="center">
            <v-card-title id="botonPlay" @click="onClickInstructions()">{{
              $t("playButton")
            }}</v-card-title>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <v-img
      :src="image_src"
      contain
      width="50px"
      height="50px"
      style="position: fixed; bottom: 2vh; left: 2vw; z-index: 999"
    ></v-img>

    <div id="hablar">
      <span>{{ $t("home3hablar") }}</span>
      <br /><br />
    </div>

    <div id="instructions">
      <span
        style="
          font-size: 35px;
          text-transform: uppercase;
          text-shadow: 0px 0px 0px red;
          text-decoration: underline;
        "
        >{{ $t("home3instrucciones") }}</span
      >
      <br /><br />
      {{ $t("home3movimiento") }}:
      <div
        style="
          text-shadow: 0px 0px 0px red;
          font-family: 'coolvetica';
          font-size: 25px;
          margin-bottom: 10px;
          margin-top: 5px;
        "
      >
        WASD
      </div>
      {{ $t("home3correr") }}:
      <div
        style="
          text-shadow: 0px 0px 0px red;
          font-family: 'coolvetica';
          font-size: 25px;
          margin-bottom: 10px;
        "
      >
        SHIFT
      </div>
      {{ $t("home3saltar") }}:
      <div
        style="
          text-shadow: 0px 0px 0px red;
          font-family: 'coolvetica';
          font-size: 25px;
          margin-bottom: 10px;
        "
      >
        Espacio
      </div>
      <!--div>
      {{ $t("home3volar") }}
        <div
          style="
            text-shadow: 0px 0px 0px red;
            font-family: 'coolvetica';
            font-size: 25px;
            margin-bottom: 10px;
          ">
          F
        </div>
      </div-->
      {{ $t("home3camara") }}:
      <div
        style="
          text-shadow: 0px 0px 0px red;
          font-family: 'coolvetica';
          font-size: 25px;
          margin-bottom: 10px;
        "
      >
        Mouse
      </div>
      {{ $t("home3salir") }}:
      <div
        style="
          text-shadow: 0px 0px 0px red;
          font-family: 'coolvetica';
          font-size: 25px;
          margin-bottom: 10px;
        "
      >
        ESC
      </div>
    </div>

    <div id="controlesMobile">
      <v-btn
        x-large
        style="position: fixed; left: 43vw; bottom: 5vh"
        icon
        color="white"
        @click="mobileControlDown()"
        ><v-icon>mdi-arrow-down</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position: fixed; left: 32vw; bottom: 10vh"
        icon
        color="white"
        @click="mobileControlLeft()"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position: fixed; left: 54vw; bottom: 10vh"
        icon
        color="white"
        @click="mobileControlRight()"
        ><v-icon>mdi-arrow-right</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position: fixed; left: 43vw; bottom: 16vh"
        icon
        color="white"
        @click="mobileControlUp()"
        ><v-icon>mdi-arrow-up</v-icon></v-btn
      >
    </div>
  </section>
</template>

<script>
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null,
      model: null,
      model2: null,
      model3: null,
      model4: null,
      model5: null,
      raycaster: null,
      instructions: null,
      objects: [],
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      running: false,
      canJump: false,
      goku: false,
      isMobile: false,
      prevTime: performance.now(),
      velocity: null,
      direction: null,
      blocker: null,
      water: null,
      sky: null,
      image_src: require("../assets/logo.png"),
      image_srcAL: require("../assets/AL.jpg"),
      firstPlay: true,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: { scrollingX: false },
        rail: {},
        bar: {
          background: "#4AD1B6",
          keepShow: true,
          onlyShowBarOnScroll: false,
        },
      },
    };
  },
  metaInfo: {
    title: "The Deval",
    titleTemplate: "%s | Web Developer",
  },
  methods: {
    init: function () {
      document.getElementById("presentacion").style.zIndex = "9";
      this.blocker = document.getElementById("blocker");
      const canvas = document.querySelector("#c");
      this.renderer = new Three.WebGLRenderer({ canvas, antialias: true });
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.scene = new Three.Scene();
      let light = new Three.HemisphereLight(0xffffff, 0x777788, 1);
      light.position.set(0, 400, 0);
      this.scene.add(light);

      this.scene.background = new Three.Color(0x000000);
      this.scene.fog = new Three.Fog(0xffffff, 0, 2500);

      const loader = new GLTFLoader();

      //Pieza
      loader.load(
        "/my_workspace/scene.gltf",
        (gltf5) => {
          this.scene.add(gltf5.scene);
          gltf5.scene.scale.set(7, 5, 5); //scale here!
          gltf5.scene.position.set(-7, -15, 1240); //position here!
          gltf5.scene.rotateY;
          this.objects.push(gltf5.scene);
          this.model5 = gltf5.scene.children[0];
        },
        undefined,
        undefined
      );
      //Mini Espacio
      loader.load(
        "/need_some_space/scene.gltf",
        (gltf3) => {
          this.scene.add(gltf3.scene);
          gltf3.scene.name = "miniEspacio";
          gltf3.scene.scale.set(0.05, 0.05, 0.05); //scale here!
          gltf3.scene.position.set(-6, 8, 1240); //position here!
          this.objects.push(gltf3.scene);
          this.model3 = gltf3.scene.children[0];
        },
        undefined,
        undefined
      );

      if (window.innerWidth > 960) {
        this.camera.position.y = 14;
        this.camera.position.z = 1240;
        this.controls = new PointerLockControls(this.camera, document.body);
        this.scene.add(this.controls.getObject());
      } else {
        this.camera.position.y = 20;
        this.camera.position.z = 1360;
        this.controls = new OrbitControls(
          this.camera,
          this.renderer.domElement
        );
      }

      //this.scene.background = new Three.Color(0x010214);

      let light3 = new Three.PointLight(0x07fff7, 1, 250);
      light3.position.set(0, 10, 1000);
      this.scene.add(light3);

      this.instructions = document.getElementById("instructions");

      this.raycaster = new Three.Raycaster(
        new Three.Vector3(),
        new Three.Vector3(0, -1, 0),
        0,
        10
      );

      this.velocity = new Three.Vector3();
      this.direction = new Three.Vector3();
      // floor

      let floorGeometry = new Three.PlaneBufferGeometry(1000, 1000, 100, 100);
      floorGeometry.rotateX(-Math.PI / 2);

      // vertex displacement

      let position = floorGeometry.attributes.position;
      let vertex = new Three.Vector3();

      for (let i = 0, l = position.count; i < l; i++) {
        vertex.fromBufferAttribute(position, i);
        vertex.x += Math.random() * 20 + 1200;
        vertex.y += Math.random() * 2 - 10;
        vertex.z += Math.random() * 20 - 600;
        position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices
      position = floorGeometry.attributes.position;
      let colors = [];
      let color = new Three.Color();

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );
        colors.push(color.r, color.g, color.b);
      }

      floorGeometry.setAttribute(
        "color",
        new Three.Float32BufferAttribute(colors, 3)
      );
      let floorMaterial = new Three.MeshBasicMaterial({ vertexColors: true });
      let floor = new Three.Mesh(floorGeometry, floorMaterial);
      this.scene.add(floor);

      // objects

      let boxGeometry = new Three.BoxBufferGeometry(20, 2, 20);
      boxGeometry = boxGeometry.toNonIndexed(); // ensure each face has unique vertices

      position = boxGeometry.attributes.position;
      this.colors = [];

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );
        this.colors.push(color.r, color.g, color.b);
      }

      boxGeometry.setAttribute(
        "color",
        new Three.Float32BufferAttribute(colors, 3)
      );

      for (let i = 0; i < 1000; i++) {
        let boxMaterial = new Three.MeshPhongMaterial({
          specular: 0xffffff,
          flatShading: true,
          vertexColors: true,
        });
        boxMaterial.color.setHSL(
          Math.random() * 0.2 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );

        let box = new Three.Mesh(boxGeometry, boxMaterial);
        box.position.x = Math.floor(Math.random() * 20 - 10) * 40 + 1200;
        box.position.y = Math.floor(Math.random() * 20) * 20 + 20;
        box.position.z = Math.floor(Math.random() * 20 - 10) * 40 - 600;

        this.scene.add(box);
        this.objects.push(box);
      }

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.blocker.appendChild(this.renderer.domElement);

      //Goku
      loader.load(
        "/goku/scene.gltf",
        (gltf) => {
          this.scene.add(gltf.scene);
          gltf.scene.scale.set(25, 27, 25); //scale here!
          gltf.scene.position.set(0, 2, 0); //position here!
          gltf.scene.rotation.y = Math.PI;
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined
      );

      //Espacio
      loader.load(
        "/need_some_space/scene.gltf",
        (gltf2) => {
          this.scene.add(gltf2.scene);
          gltf2.scene.scale.set(14, 14, 14); //scale here!
          gltf2.scene.position.set(-1500, -1500, 1500); //position here!
          this.objects.push(gltf2.scene);
          this.model2 = gltf2.scene.children[0];
        },
        undefined,
        undefined
      );
      loader.load(
        "/need_some_space/scene.gltf",
        (gltf4) => {
          this.scene.add(gltf4.scene);
          gltf4.scene.scale.set(1, 1, 1); //scale here!
          gltf4.scene.position.set(500, 500, 1000); //position here!
          this.objects.push(gltf4.scene);
          this.model4 = gltf4.scene.children[0];
        },
        undefined,
        undefined
      );
      //Camino jungla pirata
      loader.load(
        "/game_pirate_adventure_map/scene.gltf",
        (gltf6) => {
          this.scene.add(gltf6.scene);
          gltf6.scene.scale.set(0.025, 0.025, 0.025); //scale here!
          gltf6.scene.position.set(0, 0, 1220); //position here!
          gltf6.scene.rotation.y = Math.PI; //position here!
          gltf6.scene.rotateY;
          this.objects.push(gltf6.scene);
          this.model6 = gltf6.scene.children[0];
        },
        undefined,
        undefined
      );
      this.overlay = false;

      let waterGeometry = new Three.PlaneBufferGeometry(10000, 10000);

      this.water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new Three.TextureLoader().load(
          "/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = Three.RepeatWrapping;
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
      this.water.position.y = -12;
    },
    animate: function () {
      let time = performance.now();
      requestAnimationFrame(this.animate);
      if (this.water) {
        this.water.material.uniforms["time"].value += 1.0 / 60.0;
      }
      if (this.model2) {
        this.model2.rotation.z += 0.00005;
      }
      if (this.model4) {
        this.model4.rotation.z += 0.0002;
      }
      if (this.controls.isLocked === true) {
        this.raycaster.ray.origin.copy(this.controls.getObject().position);
        this.raycaster.ray.origin.y -= 14;

        if (this.firstPlay) {
          const parent = this.model3.parent;
          let MiniEspacio = this.scene.getObjectByName("miniEspacio");
          this.scene.remove(MiniEspacio);
          this.scene.add(this.water);
          //this.velocity.z -= 0.1;
          this.firstPlay = false;
        }

        let intersections = this.raycaster.intersectObjects(this.objects);

        let onObject = intersections.length > 0;

        let delta = (time - this.prevTime) / 1000;

        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize(); // this ensures consistent movements in all directions

        //Controles y velocidad
        if (this.moveForward || this.moveBackward) {
          if (this.running) {
            this.velocity.z -= this.direction.z * 1400.0 * delta;
          } else {
            this.velocity.z -= this.direction.z * 700.0 * delta;
          }
        }
        if (this.moveLeft || this.moveRight) {
          if (this.running) {
            this.velocity.x -= this.direction.x * 1400.0 * delta;
          } else {
            this.velocity.x -= this.direction.x * 700.0 * delta;
          }
        }

        //Colisiones
        if (onObject === true) {
          this.velocity.y = Math.max(0, this.velocity.y);
          this.canJump = true;
        }
        if (
          this.controls.getObject().position.z < 10 &&
          this.controls.getObject().position.z > -10 &&
          this.controls.getObject().position.x < 10 &&
          this.controls.getObject().position.x > -10
        ) {
          //this.velocity.z = 0;
          //this.controls.getObject().position.z = -20;
          document.getElementById("hablar").style.opacity = "1";
          document.getElementById("hablar").style.display = "block";
          this.goku = true;
        } else {
          document.getElementById("hablar").style.opacity = "0";
          document.getElementById("hablar").style.display = "none";
          this.goku = false;
        }

        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);

        this.controls.getObject().position.y += this.velocity.y * delta; // new behavior

        if (this.controls.getObject().position.y < 14) {
          this.velocity.y = 0;
          this.controls.getObject().position.y = 14;
          this.canJump = true;
        }

        this.prevTime = time;
      } else {
        //this.camera.position.z += 0.1;
      }

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function () {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onClickInstructions: function () {
      this.controls.lock();
    },
    hablar() {
      console.log('hablando');
      this.$swal({
        title: this.$t("goku"),
        text: this.$t("goku2"),
        confirmButtonText: this.$t("goku3"),
      }).then((result) => {
        if (result.isConfirmed) {
          this.controls.lock();
        }
      });
    },
    dejarDeHablar() {},
    onLock: function () {
      if (!this.goku) {
        this.instructions.style.display = "block";
        setTimeout(() => {
          this.instructions.style.opacity = 1;
        }, 500);

        this.blocker.style.display = "";
        document.getElementById("presentacion").style.display = "block";
        document.getElementById("presentacion").style.opacity = "0";
        document.getElementById("botonPlay").style.opacity = "0";
        document.getElementById("flechaPlay1").style.opacity = "0";
        document.getElementById("testimonios").style.display = "none";
        //document.getElementById("controlesMobile").style.opacity = "1";
        //document.getElementById("controlesMobile").style.display = "block";
        //document.getElementById("esc").style.opacity = "1";
        //document.getElementById("esc").style.display = "block";
        //document.getElementById("flechaPlay2").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("testimonios").style.opacity = "0";
        }, 500);
        setTimeout(() => {
          this.instructions.style.opacity = 0;
        }, 7000);
      }
    },
    onUnlock: function () {
      if (this.goku) {
        this.hablar();
      } else {
        this.blocker.style.display = "block";
        document.getElementById("presentacion").style.opacity = "1";
        document.getElementById("botonPlay").style.opacity = "1";
        document.getElementById("flechaPlay1").style.opacity = "1";
        document.getElementById("testimonios").style.opacity = "1";
        //document.getElementById("controlesMobile").style.opacity = "0";
        //document.getElementById("controlesMobile").style.display = "none";
        document.getElementById("testimonios").style.display = "block";
        //document.getElementById("esc").style.opacity = "0";
        //document.getElementById("esc").style.display = "none";
        //document.getElementById("flechaPlay2").style.opacity = "1";
        this.instructions.style.display = "none";
        this.instructions.style.opacity = 0;
      }
    },
    mobileControlUp() {
      this.moveForward = true;
    },
    mobileControlDown() {
      this.moveBackward = true;
    },
    mobileControlLeft() {
      this.moveLeft = true;
    },
    mobileControlRight() {
      this.moveRight = true;
    },
    mobileControlEsc() {
      this.onUnLock();
    },
    onKeyDown: function (event) {
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          this.moveForward = true;
          break;

        case 37: // left
        case 65: // a
          this.moveLeft = true;
          break;

        case 40: // down
        case 83: // s
          this.moveBackward = true;
          break;

        case 39: // right
        case 68: // d
          this.moveRight = true;
          break;

        case 16: // shift
          this.running = true;
          break;

        case 32: // space
          if (this.canJump === true) this.velocity.y += 350;
          this.canJump = false;
          break;

        case 70: // F
          if (this.velocity.y <= 200) this.velocity.y += 50;
          break;

        case 90: // Z
          if (this.goku) {
            this.controls.unlock();
          }
          break;

        case 17: // ctrl
          /*if(this.goku = true){
            console.log('estoy con goku')
          }*/
          console.log(
            "x: " +
              this.controls.getObject().position.x +
              ", y: " +
              this.controls.getObject().position.y +
              ", z: " +
              this.controls.getObject().position.z
          );
          console.log("this.goku: " + this.goku);
          break;
      }
    },
    onKeyUp: function (event) {
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          this.moveForward = false;
          break;

        case 37: // left
        case 65: // a
          this.moveLeft = false;
          break;

        case 40: // down
        case 83: // s
          this.moveBackward = false;
          break;

        case 39: // right
        case 68: // d
          this.moveRight = false;
          break;

        case 16: // shift
          this.running = false;
          break;
      }
    },
    close() {
      document.getElementById("presentacion").style.opacity = "0";
      document.getElementById("pregunta").style.opacity = "1";
      document.getElementById("pregunta").style.display = "block";
      document.getElementById("testimonios").style.display = "";
      document.getElementById("testimonios").style.opacity = "1";
      document.getElementById("presentacion").style.zIndex = "-1";
      document.getElementById("presentacion").style.display = "none";
    },
    open() {
      document.getElementById("presentacion").style.opacity = "1";
      document.getElementById("pregunta").style.opacity = "0";
      document.getElementById("pregunta").style.display = "none";
      document.getElementById("testimonios").style.display = "none";
      document.getElementById("testimonios").style.opacity = "0";
      document.getElementById("presentacion").style.zIndex = "9";
      document.getElementById("presentacion").style.display = "";
    },
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener("resize", this.onWindowResize, false);
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false);
    this.controls.addEventListener("lock", this.onLock, false);
    this.controls.addEventListener("unlock", this.onUnlock, false);
    document.getElementById("botonPlay").style.zIndex = "9999";
    if (window.innerWidth < 960) {
      console.log("phone");
      this.isMobile = true;
    }
  },
  destroyed() {
    this.renderer.forceContextLoss();
    //document.body.removeChild(this.renderer.domElement);
    window.removeEventListener("resize", this.onWindowResize, false);
    document.removeEventListener("keydown", this.onKeyDown, false);
    document.removeEventListener("keyup", this.onKeyUp, false);
    this.controls.removeEventListener("lock", this.onLock, false);
    this.controls.removeEventListener("unlock", this.onUnlock, false);
  },
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.swal2-title {
  font-family: coolvetica;
  font-size: calc(14px + 1vw) !important;
  color: white !important;
}
.swal2-content {
  font-family: coolvetica;
  font-size: calc(10px + 0.5vw) !important;
  color: white !important;
}
.swal2-confirm {
  color: black !important;
  font-family: coolvetica;
}
.swal2-popup {
  background-color: rgba(10, 10, 10, 0.9) !important;
  border-radius: 10px !important;
  width: 40vw !important;
  transition: all 725ms ease;
  z-index:999;
  box-shadow: 2px 2px 100px rgba(199, 180, 11, 0.1);
}
@media (min-width: 960px) {
  .swal2-popup {
    width: 40vw !important;
  }
}
@media (max-width: 960px) {
  .swal2-popup {
    width: 90vw !important;
  }
}
.swal2-container{

}
.swal2-popup:hover {
  background-color: rgba(10, 10, 10, 1) !important;
  /*box-shadow: 2px 2px 100px rgba(199, 180, 11, 0.2);*/
}
#blocker {
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  transition: 925ms;
}
#testimonios {
  z-index: 2;
  top: 1vh !important;
  margin-top: 0vh;
  padding-top: 0vh;
  padding-left:2vw;
  width: 100%;
  overflow: visible;
}
#testimonioText {
  color: rgb(218, 231, 238);
  z-index: 99;
  width: 95%;
  text-align: center;
}
.seeSkills2 {
  position: relative;
  font-size: 16px;
  color: white;
  font-family: coolvetica;
  transition: 325ms ease;
  margin-left: 10vw;
  margin-top: 10vh;
  bottom: 10vh;
}
.seeSkills2:hover {
  opacity: 0.5;
  font-size: 15px;
}
@media (min-width: 960px) {
  .serviciosCard {
    background-color: rgb(6, 1, 31) !important;
    border-style: solid;
    border-color: lightblue;
    border-width: 1px;
    height: 230px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 20px !important;
    perspective: 1000px;
  }
  #hablar {
    position: fixed;
    display: none;
    justify-content: center;
    text-align: center;
    text-justify: center;
    bottom: 25vh;
    width: 100vw;
    color: #ffffff;
    text-shadow: 2px 2px 4px blue;
    text-align: center;
    font-family: ethnocentric;
    font-size: 20px;
    line-height: 34px;
    opacity: 0;
    transition: 925ms;
    z-index: 9999;
  }
  #instructions {
    position: fixed;
    display: none;
    top: 23vh;
    justify-content: center;
    text-align: center;
    text-justify: center;
    width: 100vw;
    color: #ffffff;
    text-shadow: 2px 2px 4px blue;
    text-align: center;
    font-family: ethnocentric;
    font-size: 20px;
    line-height: 34px;
    opacity: 0;
    transition: 925ms;
    z-index: 19;
  }
  .happyCustomers {
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
  #c {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  #botonPlay {
    position: fixed;
    padding: 15px;
    padding-top: 3px;
    padding-bottom: 7px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16vh;
    font-family: "quantum";
    line-height: 34px;
    text-align: center;
    letter-spacing: 1.2px;
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
    font-size: calc(16px + 0.5vw);
    z-index: 999;
    transition: 925ms ease;
  }
  #botonPlay:hover {
    background-color: rgba(255, 255, 255, 0.9);
    font-size: calc(14px + 0.5vw);
  }
  #flechaPlay1 {
    position: fixed;
    z-index: 9;
    bottom: 16.5vh;
    left: 41vw;
    animation: play1 500ms linear infinite;
    animation-direction: alternate-reverse;
  }
  #flechaPlay2 {
    position: fixed;
    z-index: 9;
    bottom: 21.5vh;
    left: 54.8vw;
    animation: play2 500ms linear infinite;
    animation-direction: alternate-reverse;
  }
  #cruz {
    position: absolute;
    display: none;
    opacity: 0;
    color: black;
    top: 10px;
    left: 92%;
    z-index: 9999;
  }
  #cruz:hover {
    opacity: 0.7;
  }
  #pregunta {
    position: absolute;
    color: black;
    right: 5vw;
    top: 5vh;
    opacity: 0;
    z-index: 99;
  }
  #pregunta:hover {
    transform: translateY(7px);
  }
  #presentacion {
    position: relative;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 10vh;
    padding-top: 2vh;
    padding-right: 2vw;
    text-justify: center !important;
    padding-bottom: 0vh;
    background-color: rgba(0, 0, 0, 0.95);
    height: 90%;
    max-height: 65vh;
    transition: 725ms ease;
    opacity: 1;
    z-index: 9;
    border-radius: 55px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    animation: cycle 10s infinite alternate-reverse;
    /*box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);*/
  }
  #presentacion:hover {
    transition: 725ms ease;
    opacity: 1;
    background-color: rgba(0, 0, 0, 1);
  }
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .container {
    position: relative;
  }
  .text {
    opacity: 1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
    font-size: 20px;
    color: black;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .text:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0);
    opacity: 1;
  }
  .verHabilidades {
    color: white;
    font-size: 14px;
    letter-spacing: 0.8px;
    transition: 725ms;
    padding: 0;
  }
  .verHabilidades:hover {
    opacity: 0.7;
    transform: translateX(7px);
  }
  #gitHub {
    position: absolute;
    top: 20%;
    left: -16%;
    color: white;
    transition: all 1s ease;
    opacity: 0;
  }
  #enviarMail {
    position: absolute;
    top: 20%;
    left: 22%;
    color: white;
    transition: all 1s ease;
    opacity: 0;
  }
  .iconContacto:hover + #gitHub {
    opacity: 1;
  }
  .iconContacto:hover + #enviarMail {
    opacity: 1;
  }
  .iconContacto:hover + #gitHub:before {
    width: 100%;
    opacity: 1;
  }
  .iconContacto:hover + #enviarMail:before {
    width: 100%;
    opacity: 1;
  }
  #controlesMobile {
    display: none;
  }
  #gitHub:before {
    position: absolute;
    opacity: 0;
    content: "";
    width: 1px;
    background-color: white;
    transition: all 2s ease;
    height: 1px;
    bottom: 0;
  }
  #enviarMail:before {
    position: absolute;
    opacity: 0;
    content: "";
    width: 1px;
    background-color: white;
    transition: all 2s ease;
    height: 1px;
    bottom: 0;
  }
  #testimonios {
    top: 10vh;
    height: 20vh !important;
  }
  #testimonioText {
    width: 90%;
    font-size: calc(10px + 0.2vw);
    font-weight: 600;
    letter-spacing: 0.3px;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
  }
  .happyCustomers {
    font-size: calc(10px + 0.5vw);
    padding-left:2vw;
  }
  @media (min-height: 900px) {
    #presentacion {
      margin-top: 10vh;
      height: 100%;
      max-height: 58vh;
    }
    #flechaPlay1 {
      bottom: 21.5vh;
    }
    #botonPlay {
      font-size: 40px;
      padding: 15px;
      padding-top: 10px;
      padding-bottom: 20px;
      bottom: 20vh;
    }
    .iconContacto:hover {
      transform: translateY(-7px);
    }
    #testimonioText {
      width: 90%;
      font-size: 16px;
      font-weight: 600;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    }
    .verHabilidades {
      font-size: calc(10px + 0.5vw);
    }
  }
}
@media (max-width: 960px) {
  .serviciosCard {
    background-color: rgb(6, 1, 31) !important;
    border-style: solid;
    border-color: lightblue;
    border-width: 1px;
    height: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-right: 2vw;
    border-radius: 20px !important;
    perspective: 1000px;
  }
  #testimonios {
    margin-top: 10vh;
    margin-left: 2vw;
    height: 100%;
  }
  #testimonioText {
    width: 90vw;
    font-size: calc(16px + 0.1vw);
    padding-right: 5vw;
    font-weight: 600;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
  }
  #controlesMobile {
    display: none;
    opacity: 0;
    position: fixed;
    bottom: 5vh;
    transition: 725ms ease;
    color: #ffffff;
    z-index: 9;
  }
  #instructions {
    display: none;
    position: fixed;
    left: 7vw;
    bottom: 8vh;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    box-orient: horizontal;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    color: #ffffff;
    text-align: center;
    font-family: brokenz;
    font-size: 30px;
    line-height: 34px;
    opacity: 0;
    transition: 925ms;
  }
  #c {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  #botonPlay {
    display: none;
    position: fixed;
    padding: 15px;
    padding-top: 5px;
    padding-bottom: 10px;
    left: 38%;
    bottom: 8vh;
    font-family: "quantum";
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
    font-size: 20px;
    z-index: 99;
    transition: 925ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
  }
  #botonPlay:hover {
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 19px;
    transform: translateY(7px);
  }
  #cruz {
    position: absolute;
    color: black;
    margin-top: 5px;
    left: 80%;
    z-index: 9;
  }
  #pregunta {
    position: absolute;
    color: black;
    right: 2vw;
    top: 15vh;
    opacity: 0;
    z-index: 99;
  }
  #pregunta:hover {
    transform: translateY(7px);
  }
  #esc {
    display: none;
    position: absolute;
    color: black;
    left: 5vw;
    top: 15vh;
    opacity: 1;
    z-index: 99;
  }
  #presentacion {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding-top: 15vh;
    border: 1px;
    border-radius: 5px;
    border-style: none;
    border-color: white;
    text-justify: center !important;
    display: block;
    padding-bottom: 3vh;
    background-color: rgba(0, 20, 70, 0.3);
    transition: 725ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    opacity: 0.95;
    z-index: 999;
  }
  #presentacion:hover {
    opacity: 1;
  }
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .container {
    position: relative;
  }
  .text {
    opacity: 0.7;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
    font-size: 20px;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .verHabilidades {
    color: white;
    font-size: 16px;
    transition: 725ms;
    padding: 0;
  }
  .verHabilidades:hover {
    opacity: 0.7;
    transform: translateX(7px);
    font-size: 12px;
  }
  .happyCustomers {
    padding-right: 0vw;
    margin-top: 2vh;
    font-size: calc(14px + 2vw);
  }
}
</style>
