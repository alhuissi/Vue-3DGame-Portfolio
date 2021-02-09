<template>
  <section>
    <canvas id="l"></canvas>
    <div id="blockerLab">
      <v-row justify="center">
        <v-card id="botonPlayLab" @click="onClickInstructions2()">
            {{ $t("playButton") }}
          </v-card>
        </v-row>
    </div>
    <div id="instructionsLab">
        <br /><br />
        <span style="font-size:36px;">{{ $t("home3instrucciones") }}:</span>
        <br /><br />
        {{ $t("home3movimiento") }}: WASD<br />
        {{ $t("home3correr") }}: SHIFT<br />
        {{ $t("home3saltar") }}: ESPACIO<br />
        {{ $t("home3volar") }}: F <br />
        {{ $t("home3camara") }}: MOUSE <br />
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
      model3: null,
      model4: null,
      raycaster: null,
      instructions: null,
      objects: [],
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      running: false,
      canJump: false,
      isMobile: false,
      prevTime: performance.now(),
      velocity: null,
      direction: null,
      blocker: null,
    };
  },
  metaInfo: {
    title: "Deval",
    titleTemplate: "%s | Lab",
  },
  methods: {
    init: function () {
      this.blocker = document.getElementById("blockerLab");
      const canvas = document.querySelector("#l");
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
        this.camera.position.z = 1500;
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

      this.instructions = document.getElementById("instructionsLab");

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
          gltf.scene.scale.set(25, 25, 25); //scale here!
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
    animate: function () {
      requestAnimationFrame(this.animate);
      if (this.model2) {
        this.model2.rotation.z += 0.00002;
      }
      if (this.model4) {
        this.model4.rotation.z += 0.0002;
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
    onClickInstructions2: function () {
      this.controls.lock();
    },
    onLock2: function () {
      this.instructions.style.display = "block";
      setTimeout(() => {
        this.instructions.style.opacity = 1;
      }, 500);

      this.blocker.style.display = "";
      document.getElementById("botonPlayLab").style.opacity = "0";
      setTimeout(() => {
        this.instructions.style.opacity = 0;
      }, 7000);
    },
    onUnlock2: function () {
      this.blocker.style.display = "block";
      document.getElementById("botonPlayLab").style.opacity = "1";
      this.instructions.style.display = "none";
      this.instructions.style.opacity = 0;
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
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener("resize", this.onWindowResize, false);
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false);
    this.controls.addEventListener("lock", this.onLock2, false);
    this.controls.addEventListener("unlock", this.onUnlock2, false);
    document.getElementById("botonPlayLab").style.zIndex = "9999";
    if(window.innerWidth < 960){
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
    this.controls.removeEventListener("lock", this.onLock2, false);
    this.controls.removeEventListener("unlock", this.onUnlock2, false);
  },
};
</script>

<style>
#blockerLab {
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

#instructionsLab {
  width: 100%;
  height: 100%;
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
  font-family: Arial;
  font-size: 14px;
  line-height: 24px;
}
#l {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
#botonPlayLab {
    position: fixed;
    padding: 15px;
    padding-top: 3px;
    padding-bottom: 7px;
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
  #botonPlayLab:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(7px);
  }
@media (max-width: 960px) {
  #botonPlayLab {
    display: none;
    opacity:0;
    padding: 10px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    width: 50%;
    font-size: 20px;
  }
  #instructionsLab {
    display: none;
    opacity:0;
    margin-top: 10vh;
  }
}
</style>
