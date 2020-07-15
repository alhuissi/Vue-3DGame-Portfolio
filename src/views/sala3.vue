<template>
  <section>
    <canvas id="h"></canvas>
    <div id="blocker">
      <v-card>
        <div id="flechaPlay1">
          <v-icon x-large color="#ffffff" class="neon">mdi-arrow-right</v-icon>
        </div>
        <v-card-title id="botonPlay" @click="onClickInstructions()"
          >entrar</v-card-title
        >
      </v-card>
    </div>
    <div id="instructions">
      <br /><br />
      <span style="font-size:36px">Controles:</span>
      <br /><br />
      movimiento: WASD<br />
      correr: SHIFT<br />
      saltar: ESPACIO<br />
      cámara: MOUSE <br />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
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
      direction: null
    };
  },
  metaInfo: {
    title: "Galería Pasional Secreta",
    titleTemplate: "%s | Sala 3"
  },
  methods: {
    init: function() {
      //document.getElementById("presentacion").style.zIndex = "9";
      this.blocker = document.getElementById("blocker");
      const canvas = document.querySelector("#h");
      this.renderer = new Three.WebGLRenderer({ canvas, antialias: true });
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );


      this.scene = new Three.Scene();
      //this.scene.background = new Three.Color(0x010214);
      if(window.innerWidth > 960){
        this.controls = new PointerLockControls(this.camera, document.body);
        this.camera.position.y = 2;
        this.camera.position.z = 50;
        this.scene.add(this.controls.getObject());
      }
      else{
        this.camera.position.y = 50;
        this.camera.position.z = 50;
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.camera.lookAt(new Three.Vector3(0, 30, 10));
      }
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

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.blocker.appendChild(this.renderer.domElement);

      const loader = new GLTFLoader();

      /*
      loader.load(
        "/room_of_museum/scene.gltf",
        gltf => {
          this.scene.add(gltf.scene);
          gltf.scene.scale.set(70, 50, 70);
          gltf.scene.position.set(0, 12, 50);
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined
      );
      */
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      if (this.controls.isLocked === true) {
        this.raycaster.ray.origin.copy(this.controls.getObject().position);
        this.raycaster.ray.origin.y -= 10;

        let time = performance.now();
        let delta = (time - this.prevTime) / 1000;

        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize();

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
        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);

        this.controls.getObject().position.y += this.velocity.y * delta;

        if (this.controls.getObject().position.y < 2) {
          this.velocity.y = 0;
          this.controls.getObject().position.y = 2;
          this.canJump = true;
        }
        if (this.controls.getObject().position.x < -133) {
          this.velocity.x = 0;
          this.controls.getObject().position.x = -133;
        }
        if (this.controls.getObject().position.x > 125) {
          this.velocity.x = 0;
          this.controls.getObject().position.x = 125;
        }
        if (this.controls.getObject().position.z < -80) {
          this.velocity.z = 0;
          this.controls.getObject().position.z = -80;
        }
        if (this.controls.getObject().position.z > 180) {
          this.velocity.z = 0;
          this.controls.getObject().position.z = 180;
        }

        this.prevTime = time;
      } else {
        //this.camera.position.z += 0.1;
      }
      this.render();
    },
    render: function() {
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
      this.instructions.style.display = "";
      this.instructions.style.opacity = 1;
      this.blocker.style.display = "";
      document.getElementById("botonPlay").style.opacity = "0";
      document.getElementById("flechaPlay1").style.opacity = "0";
      setTimeout(() => {
        this.instructions.style.opacity = 0;
      }, 4000);
    },
    onUnlock: function() {
      this.blocker.style.display = "block";
      document.getElementById("botonPlay").style.opacity = "1";
      document.getElementById("flechaPlay1").style.opacity = "1";
      this.instructions.style.display = "none";
      this.instructions.style.opacity = 0;
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
    }
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
  }
};
</script>

<style>
#blocker {
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  transition: 925ms;
}
@media (min-width: 960px) {
  #instructions {
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
    font-size: 30px;
    line-height: 34px;
    opacity: 0;
    transition: 925ms;
    z-index: 19;
  }
  #h {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  #botonPlay {
    position: fixed;
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 20px;
    left: 44.3vw;
    bottom: 20vh;
    line-height: 34px;
    text-align: center;
    letter-spacing: 1.2px;
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
    font-size: 40px;
    z-index: 8;
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
    font-size: 39px;
    transform: translateY(7px);
  }
  #flechaPlay1 {
    position: fixed;
    z-index: 9;
    bottom: 21.5vh;
    left: 41.2vw;
    animation: play1 500ms linear infinite;
    animation-direction: alternate-reverse;
  }
}
@media (max-width: 960px) {
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
    font-size: 30px;
    line-height: 34px;
    opacity: 0;
    transition: 925ms;
  }
  #h {
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
}
</style>
