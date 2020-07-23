<template>
  <section>
    <canvas id="c"></canvas>
    <div id="blocker">
      <v-btn text id="pregunta" @click="open()"
        ><v-icon text large color="#ffffff">mdi-help</v-icon>
      </v-btn>
      <!--v-btn text id="esc" @click="onUnLock()"
        ><v-icon text large color="#ffffff">mdi-keyboard-esc</v-icon></v-btn
      -->

          <div id="presentacion">
            <v-btn text id="cruz" @click="close()"
              ><v-icon text color="#ffffff">mdi-close</v-icon></v-btn
            >

            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-row>
                    <div class="container">
                      <v-img
                        :src="image_srcAL"
                        class="img1"
                        contain
                        position="100% 0px"
                        ><!--div class="middle">
                      <v-btn fab small router to="/skills" class="text"
                        ><v-icon
                          >mdi-account-search</v-icon
                        ></v-btn>
                    </div--></v-img
                      >
                    </div>
                  </v-row>
                  <v-row class="iconos">
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
                  </v-row>
                </v-col>
                <v-col cols="8">
                  <div class="parrafo">
                    <v-card
                      style="background-color: rgba(0,0,0,0); color: white;"
                      ><v-card-title style="font-size: 3vh;">{{
                        $t("salutation")
                      }}</v-card-title></v-card
                    >
                    <p>
                      <span style="padding-left: 1vw;">
                        {{ $t("home1par") }}</span
                      >
                      <br />
                      <!--span style="padding-left: 1vw;">
                    {{ $t("home2par") }}Javascript, VueJS, Angular, Java, PHP,
                    Python.</span-->
                    </p>
                    <v-card
                      router
                      to="/skills"
                      style="background-color: rgba(0,0,0,0); color: white;"
                      ><v-card-title class="verHabilidades"
                        ><v-icon color="#0fffff">mdi-arrow-right</v-icon
                        >{{ $t("home1text") }}</v-card-title
                      ></v-card
                    >
                    <v-card
                      router
                      to="/portafolios"
                      style="background-color: rgba(0,0,0,0); color: white;"
                      ><v-card-title class="verHabilidades"
                        ><v-icon color="#0fffff">mdi-arrow-right</v-icon
                        >{{ $t("home2text") }}</v-card-title
                      ></v-card
                    >
                    <v-card
                      router
                      to="/contact"
                      style="background-color: rgba(0,0,0,0); color: white;margin-bottom:10px;"
                      ><v-card-title class="verHabilidades"
                        ><v-icon color="#0fffff">mdi-arrow-right</v-icon
                        >{{ $t("home3text") }}</v-card-title
                      ></v-card
                    >
                  </div>
                </v-col>
              </v-row>
            </v-container>
            </div>
      <v-card>
        <div id="flechaPlay1">
          <v-icon x-large color="#ffffff" class="neon">mdi-arrow-right</v-icon>
        </div>
        <v-card-title id="botonPlay" @click="onClickInstructions()">{{
          $t("playButton")
        }}</v-card-title>
        <!-- div id="flechaPlay2">
          <v-icon large color="#ffffff">mdi-arrow-left</v-icon>
        </div -->
      </v-card>
    </div>

    <div id="instructions">
      <span style="font-size:35px;text-transform:uppercase;text-shadow: 0px 0px 0px red;text-decoration:underline;"
        >{{ $t("home3instrucciones") }}</span
      >
      <br /><br />
      {{ $t("home3movimiento") }}:
      <div
        style='text-shadow: 0px 0px 0px red;font-family:"coolvetica";font-size:25px;margin-bottom:10px;margin-top:5px;'
      >
        WASD
      </div>
      {{ $t("home3correr") }}:
      <div
        style='text-shadow: 0px 0px 0px red;font-family:"coolvetica";font-size:25px;margin-bottom:10px;'
      >
        SHIFT
      </div>
      {{ $t("home3saltar") }}:
      <div
        style='text-shadow: 0px 0px 0px red;font-family:"coolvetica";font-size:25px;margin-bottom:10px;'
      >
        Espacio
      </div>
      {{ $t("home3volar") }}
      <div
        style='text-shadow: 0px 0px 0px red;font-family:"coolvetica";font-size:25px;margin-bottom:10px;'
      >
        F
      </div>
      {{ $t("home3camara") }}:
      <div
        style='text-shadow: 0px 0px 0px red;font-family:"coolvetica";font-size:25px;margin-bottom:10px;'
      >
        Mouse
      </div>
    </div>

    <v-carousel id="testimonios" hide-delimiters :show-arrows="false" cycle>
      <v-carousel-item>
        <v-sheet style="background-color:rgba(0,0,0,0);" height="100%">
          <v-row align="center" justify="center">
            <div id="testimonioText">
              "{{ $t("testimonio1") }}" <br />
              <v-img
                :src="require('@/assets/logos/logo-makine.png')"
                height="100px"
                width="100px"
                style="margin-left:auto;margin-right:auto;"
              ></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item
        ><v-sheet style="background-color:rgba(0,0,0,0);" height="100%">
          <v-row align="center" justify="center">
            <div id="testimonioText">
              "{{ $t("testimonio2") }}" <br />
              <v-img
                :src="require('@/assets/logos/logo-casa.png')"
                height="100px"
                width="100px"
                style="margin-left:auto;margin-right:auto;"
              ></v-img>
            </div>
          </v-row> </v-sheet
      ></v-carousel-item>
      <v-carousel-item
        ><v-sheet style="background-color:rgba(0,0,0,0);" height="100%">
          <v-row align="center" justify="center">
            <div id="testimonioText">
              "{{ $t("testimonio3") }}" <br />
              <v-img
                :src="require('@/assets/logos/logo-l-vk.png')"
                height="100px"
                width="100px"
                style="margin-left:auto;margin-right:auto;"
              ></v-img>
            </div>
          </v-row> </v-sheet
      ></v-carousel-item>
    </v-carousel>
    <div id="controlesMobile">
      <v-btn
        x-large
        style="position:fixed;left:43vw;bottom:5vh;"
        icon
        color="white"
        @click="mobileControlDown()"
        ><v-icon>mdi-arrow-down</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position:fixed;left:32vw;bottom:10vh;"
        icon
        color="white"
        @click="mobileControlLeft()"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position:fixed;left:54vw;bottom:10vh;"
        icon
        color="white"
        @click="mobileControlRight()"
        ><v-icon>mdi-arrow-right</v-icon></v-btn
      >
      <v-btn
        x-large
        style="position:fixed;left:43vw;bottom:16vh;"
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
      raycaster: null,
      instructions: null,
      objects: [],
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      running: false,
      canJump: false,
      prevTime: performance.now(),
      velocity: null,
      direction: null,
      //color: null,
      blocker: null,
      image_src: require("../assets/logo.png"),
      image_srcAL: require("../assets/AL.jpg"),
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
        },
        rail: {},
        bar: { background: "rgba(0,178,255,0.7)" },
      },
    };
  },
  metaInfo: {
    title: "Deval",
    titleTemplate: "%s | Web Developer",
  },
  methods: {
    init: function() {
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

      if (window.innerWidth > 960) {
        this.camera.position.y = 14;
        this.camera.position.z = 1240;
        this.controls = new PointerLockControls(this.camera, document.body);
        this.scene.add(this.controls.getObject());
      } else {
        this.camera.position.y = 20;
        this.camera.position.z = 2000;
        this.controls = new OrbitControls(
          this.camera,
          this.renderer.domElement
        );
      }

      //this.scene.background = new Three.Color(0x010214);
      this.scene.background = new Three.Color(0x000000);
      this.scene.fog = new Three.Fog(0xffffff, 0, 2500);

      let light = new Three.HemisphereLight(0xffffff, 0x777788, 1);
      light.position.set(0, 400, 0);
      this.scene.add(light);

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
        vertex.x += Math.random() * 20 - 0;
        vertex.y += Math.random() * 2;
        vertex.z += Math.random() * 20 - 0;
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
        box.position.x = Math.floor(Math.random() * 20 - 10) * 40;
        box.position.y = Math.floor(Math.random() * 20) * 20 + 20;
        box.position.z = Math.floor(Math.random() * 20 - 10) * 40;

        this.scene.add(box);
        this.objects.push(box);
      }

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.blocker.appendChild(this.renderer.domElement);

      const loader = new GLTFLoader();

      //Goku
      loader.load(
        "/goku/scene.gltf",
        (gltf) => {
          this.scene.add(gltf.scene);
          gltf.scene.scale.set(20, 20, 20); //scale here!
          gltf.scene.position.set(0, 2, 0); //position here!
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
        (gltf3) => {
          this.scene.add(gltf3.scene);
          gltf3.scene.scale.set(0.05, 0.05, 0.05); //scale here!
          gltf3.scene.position.set(-6, 8, 1240); //position here!
          this.objects.push(gltf3.scene);
          this.model2 = gltf3.scene.children[0];
        },
        undefined,
        undefined
      );
      //Pieza
      loader.load(
        "/my_workspace/scene.gltf",
        (gltf) => {
          this.scene.add(gltf.scene);
          gltf.scene.scale.set(7, 5, 5); //scale here!
          gltf.scene.position.set(-7, -15, 1240); //position here!
          gltf.scene.rotateY;
          this.objects.push(gltf.scene);
          this.model3 = gltf.scene.children[0];
        },
        undefined,
        undefined
      );
      this.overlay = false;
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      if (this.model2) {
        this.model2.rotation.z += 0.00002;
      }
      if (this.controls.isLocked === true) {
        this.raycaster.ray.origin.copy(this.controls.getObject().position);
        this.raycaster.ray.origin.y -= 14;

        let intersections = this.raycaster.intersectObjects(this.objects);

        let onObject = intersections.length > 0;

        let time = performance.now();
        let delta = (time - this.prevTime) / 1000;

        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize(); // this ensures consistent movements in all directions

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

        if (onObject === true) {
          this.velocity.y = Math.max(0, this.velocity.y);
          this.canJump = true;
        }

        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);

        this.controls.getObject().position.y += this.velocity.y * delta; // new behavior

        if (this.controls.getObject().position.y < 14) {
          this.velocity.y = 14;
          this.controls.getObject().position.y = 14;
          this.canJump = true;
        }

        this.prevTime = time;
      } else {
        //this.camera.position.z += 0.1;
      }

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onClickInstructions: function() {
      this.controls.lock();
    },
    onLock: function() {
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
      document.getElementById("controlesMobile").style.opacity = "1";
      document.getElementById("controlesMobile").style.display = "block";
      //document.getElementById("esc").style.opacity = "1";
      //document.getElementById("esc").style.display = "block";
      //document.getElementById("flechaPlay2").style.opacity = "0";
      setTimeout(() => {
        this.instructions.style.opacity = 0;
      }, 7000);
      setTimeout(() => {
        document.getElementById("testimonios").style.opacity = "0";
      }, 500);
      
    },
    onUnlock: function() {
      this.blocker.style.display = "block";
      document.getElementById("presentacion").style.opacity = "1";
      document.getElementById("botonPlay").style.opacity = "1";
      document.getElementById("flechaPlay1").style.opacity = "1";
      document.getElementById("controlesMobile").style.opacity = "0";
      document.getElementById("controlesMobile").style.display = "none";
      document.getElementById("testimonios").style.display = "block";
      //document.getElementById("esc").style.opacity = "0";
      //document.getElementById("esc").style.display = "none";
      //document.getElementById("flechaPlay2").style.opacity = "1";
      this.instructions.style.display = "none";
      this.instructions.style.opacity = 0;
      setTimeout(() => {
        document.getElementById("testimonios").style.opacity = "1";
      }, 500);
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
    onKeyDown: function(event) {
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
      }
    },
    onKeyUp: function(event) {
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
    pressed() {
      this.text = "You are pressing the button!";
      console.log(`press`);
    },
    released() {
      this.text = "Press me with A (Xbox) or X (PlayStation)!";
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
  },
  destroyed() {
    this.renderer.forceContextLoss();
    //document.body.removeChild(this.renderer.domElement);
    window.removeEventListener("resize", this.onWindowResize, false);
    document.removeEventListener("keydown", this.onKeyDown, false);
    document.removeEventListener("keyup", this.onKeyUp, false);
    this.controls.removeEventListener("lock", this.onLock, false);
    this.controls.removeEventListener("unlock", this.onUnlock, false);
    console.log("destroyed");
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
  position: fixed;
  z-index: 2;
  top: 3vh!important;
  margin-top: 0vh;
  padding-top: 0vh;
  width: 100%;
  height:20vh!important;
}
#testimonioText {
  color: rgb(218, 231, 238);
  z-index: 2;
  text-align: center;
}
@media (min-width: 960px) {
  #instructions {
    position: fixed;
    display: none;
    top: 23vh;
    justify-content: center;
    text-align: center;
    text-justify:center;
    width:100vw;

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
    left: 44.3vw;
    bottom: 16vh;
    font-family: "quantum";

    line-height: 34px;
    text-align: center;
    letter-spacing: 1.2px;
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;

    font-size: 20px;
    z-index: 99;
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
    transition: 925ms ease;
  }
  #botonPlay:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(7px);
  }
  #flechaPlay1 {
    position: fixed;
    z-index: 9;
    bottom: 16.5vh;
    left: 41.2vw;
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
    display:none;
    opacity:0;
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
    margin-left: 22vw;
    margin-right: 22vw;
    margin-top: 23vh;
    padding-top: 0vh;
    text-justify: center !important;
    padding-bottom: 0vh;
    background-color: rgba(0, 0, 0, 0.95);
    max-height:50vh;
    transition: 725ms ease;
    opacity: 1;
    z-index: 9;
    border-radius:55px;
    border: 1px solid rgba(255,255,255,0.5);
    animation: cycle 10s infinite alternate-reverse;
    /*box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);*/
  }
  #presentacion:hover {
    transition: 725ms ease;
    opacity: 1;
    background-color: rgba(0, 0, 0, 1);
  }
  .parrafo {
    position: relative;
    font-family: coolvetica;
    font-size: 14px;
    text-justify: center !important;
    letter-spacing: 0.8px;
    color: white;
    width: 35vw;
    transition: 725ms ease;
  }
  .img1 {
    position: relative;
    border-radius: 75px;
    width: 100px;
    height: 100px;
    left: 4vw;
    top: 5vh;
    filter: saturate(0%);
    transition: all 325ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    backface-visibility: hidden;
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
  .img1:hover {
    filter: contrast(90%) saturate(100%);
  }
  .img1:hover .middle {
    opacity: 1;
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
  .iconos {
    position: relative;
    top: 15%;
    left: 39%;
  }
  .iconContacto {
    padding: 5px;
    transition-duration: 3s ease;
  }
  .iconContacto:hover {
    cursor: pointer;
    transition-duration: 3s ease;
    transform: translateY(-18px);
    opacity: 0.7;
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
  }
  #testimonioText {
    width: 80vw;
    font-size: 12px;
    font-weight: 600;
    letter-spacing:0.3px;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
  }
  @media (min-height: 900px) {
    #presentacion {
      margin-top: 25vh;
    }
    .parrafo{
      font-size: calc(10px + 0.5vw);
    }
    #flechaPlay1{
      bottom: 21.5vh;
    }
    #botonPlay{
      font-size: 40px;
      padding: 15px;
      padding-top: 10px;
      padding-bottom: 20px;
      bottom:20vh;
    }
    .img1{
      width: 150px;
      height: 150px;
    }
    .iconContacto:hover {
      transform: translateY(-7px);
    }
    #testimonioText {
      width: 80vw;
      font-size: 20px;
      font-weight: 600;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    }
    .verHabilidades{
      font-size: calc(10px + 0.5vw);
    }
  }
}
@media (max-width: 960px) {
  #testimonios {
    top: 8vh;
    opacity:0;
    display:none;
  }
  #testimonioText {
    width: 90vw;
    font-size: 12px;
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
    /* 
        display: -webkit-box;
        display: -moz-box;
        display: box;
        */
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
    margin-left: 2vw;
    margin-right: 2vw;
    width:96vw;
    margin-top: 14vh;
    border: 1px;
    border-radius: 5px;
    border-style: solid;
    border-color: white;
    text-justify: center !important;
    display:block;
    padding-bottom: 3vh;
    background-color: rgba(0, 0, 0, 1);
    transition: 725ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    opacity: 0.95;
    z-index: 999;
  }
  #presentacion:hover {
    opacity: 1;
  }
  .parrafo {
    position: relative;
    font-family: coolvetica;
    font-size: 16px;
    text-justify: center !important;
    color: white;
    width: 77vw;
    top: 7vh;
    left: -27vw;
    transition: 725ms ease;
  }
  .img1 {
    position: absolute;
    top: -10px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    left: 30vw;
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
    filter: contrast(90%) saturate(140%);
    transition: 725ms ease;
    animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;
    backface-visibility: hidden;
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
  .img1:hover {
    opacity: 0.9;
  }
  .img1:hover .middle {
    opacity: 1;
  }
  .text {
    opacity: 0.7;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
    font-size: 20px;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .img1:hover .text {
    transform: translateX(80%);
  }
  .verHabilidades {
    color: white;
    font-size: 13px;
    transition: 725ms;
    padding: 0;
  }
  .verHabilidades:hover {
    opacity: 0.7;
    transform: translateX(7px);
    font-size: 12px;
  }
  .iconos {
    position: relative;
    top: 7vh;
    left: 62vw;
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
    left: -16%;
    color: white;
    transition-duration: 1s ease;
    opacity: 0;
    display: none;
  }
  #enviarMail {
    position: absolute;
    top: 20%;
    left: 22%;
    color: white;
    transition-duration: 1s ease;
    opacity: 0;
    display: none;
  }
}
</style>
