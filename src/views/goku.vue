<template>
  <section>
    <div id="blocker">
        <div id="instructions">
            <br /><br />
            <span style="font-size:36px">Haz click para moverte</span>
            <br /><br />
            Movimiento: WASD<br />
            Saltar: ESPACIO<br />
            Cámara: MOUSE
        </div>
    </div>
  </section>
</template>

<script>
import * as Three from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null, 
      model: null,
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
    };
  },
  metaInfo: {
    title: "Neosyd",
    titleTemplate: "%s | Lab",
  },
  methods: {
    init: function() {
      this.blocker = document.getElementById('blocker');

      this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.y = 10;
      this.camera.position.z = 40;

      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(0xffffff);
      this.scene.fog = new Three.Fog(0xffffff, 0, 750);

      let light = new Three.HemisphereLight(0xeeeeff, 0x777788, 0.75);
      light.position.set(0.5, 1, 0.75);
      //this.scene.add(light);

      this.controls = new PointerLockControls(this.camera, document.body);
      this.instructions = document.getElementById('instructions');

      this.scene.add(this.controls.getObject());

      this.raycaster = new Three.Raycaster(new Three.Vector3(), new Three.Vector3(0, - 1, 0), 0, 10);

      this.velocity = new Three.Vector3();
      this.direction = new Three.Vector3();
      // floor

      let floorGeometry = new Three.PlaneBufferGeometry(1000, 1000, 100, 100);
      floorGeometry.rotateX(- Math.PI / 2);

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
        color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        colors.push(color.r, color.g, color.b);
      }

      floorGeometry.setAttribute('color', new Three.Float32BufferAttribute(colors, 3));
      let floorMaterial = new Three.MeshBasicMaterial({ vertexColors: true });
      let floor = new Three.Mesh(floorGeometry, floorMaterial);
      this.scene.add(floor);

      // objects

      let boxGeometry = new Three.BoxBufferGeometry(20, 2, 20);
      boxGeometry = boxGeometry.toNonIndexed(); // ensure each face has unique vertices

      position = boxGeometry.attributes.position;
      this.colors = [];

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        this.colors.push(color.r, color.g, color.b);
      }

      boxGeometry.setAttribute('color', new Three.Float32BufferAttribute(colors, 3));

      for (let i = 0; i < 1000; i++) {

        let boxMaterial = new Three.MeshPhongMaterial({ specular: 0xffffff, flatShading: true, vertexColors: true });
        boxMaterial.color.setHSL(Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75);

        let box = new Three.Mesh(boxGeometry, boxMaterial);
        box.position.x = Math.floor(Math.random() * 20 - 10) * 40;
        box.position.y = Math.floor(Math.random() * 20) * 20 + 20;
        box.position.z = Math.floor(Math.random() * 20 - 10) * 40;

        this.scene.add(box);
        this.objects.push(box);

      }

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      const loader = new GLTFLoader();

      //Goku
      loader.load("/goku/scene.gltf", gltf => {
          this.scene.add(gltf.scene)
          gltf.scene.scale.set(20,20,20) //scale here!
          gltf.scene.position.set(0,20,0); //position here!
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined);

      //Espacio
      loader.load("/our_corner_of_universe/scene.gltf", gltf => {
          this.scene.add(gltf.scene)
          gltf.scene.scale.set(20,20,20) //scale here!
          gltf.scene.position.set(0,2,0); //position here!
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      /*if(this.model){
        this.model.rotation.z += 0.01;
      }*/
        if (this.controls.isLocked === true) {

            this.raycaster.ray.origin.copy(this.controls.getObject().position);
            this.raycaster.ray.origin.y -= 10;

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
                    this.velocity.z -= this.direction.z * 1000.0 * delta;
                }
                else {
                    this.velocity.z -= this.direction.z * 400.0 * delta;
                }
            }
            if (this.moveLeft || this.moveRight) {
                if (this.running) {
                    this.velocity.x -= this.direction.x * 1000.0 * delta;
                }
                else {
                    this.velocity.x -= this.direction.x * 400.0 * delta;
                }
            }

            if (onObject === true) {
                this.velocity.y = Math.max(0, this.velocity.y);
                this.canJump = true;
            }

            this.controls.moveRight(- this.velocity.x * delta);
            this.controls.moveForward(- this.velocity.z * delta);

            this.controls.getObject().position.y += (this.velocity.y * delta); // new behavior

            if (this.controls.getObject().position.y < 10) {
                this.velocity.y = 0;
                this.controls.getObject().position.y = 10;
                this.canJump = true;
            }

            this.prevTime = time;

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
        this.instructions.style.display = 'none';
        this.blocker.style.display = 'none';
    },
    onUnlock: function() {
        this.blocker.style.display = 'block';
        this.instructions.style.display = '';
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
    window.addEventListener('resize', this.onWindowResize, false);
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('keyup', this.onKeyUp, false);
    this.instructions.addEventListener('click', this.onClickInstructions, false);
    this.controls.addEventListener('lock', this.onLock, false);
    this.controls.addEventListener('unlock', this.onUnlock, false);
  },
  destroyed() {
    this.renderer.forceContextLoss()
    console.log('destroyed');
  },
};
</script>

<style>
    #blocker {
      position: fixed;
      top: 5%;
      width: 100%;
      height: 95%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index:2;
    }

    #instructions {
      width: 100%;
      height: 95%;
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

      cursor: pointer;
    }
    canvas {
        position: absolute;
        top: 0%;
        width: 100%;
        height: 95%;
        
    }
</style>
