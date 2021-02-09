<template>
  <section>
    <canvas id="e"></canvas>
    <div id="container2">
      
    </div>
    
  </section>
</template>

<script>
import * as Three from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
      objects: [],
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      canJump: false,
      prevTime: performance.now(),
      velocity: null,
      direction: null,
      vertex: null,
      color: null,
      //loader: null,
    };
  },
  metaInfo: {
    title: "Neosyd",
    titleTemplate: "%s | 3D Model Viewer",
  },
  methods: {
    init: function() {
      let container = document.getElementById("container2");
      const canvas = document.querySelector("#e");
      this.renderer = new Three.WebGLRenderer({ canvas, antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(this.renderer.domElement);

      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 25;
      this.camera.position.y = 20;

      this.scene = new Three.Scene();

      let light = new Three.PointLight(0xffffff, 2, 300);
      light.position.set(1, 150, 100);
      this.scene.add(light);

      this.scene.background = new Three.Color(0x000000);
      this.scene.fog = new Three.Fog(0xffffff, 0, 2500);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      const loader = new GLTFLoader();

      //Goku
      loader.load("/goku/scene.gltf", gltf => {
          this.scene.add(gltf.scene)
          gltf.scene.scale.set(30,30,30) //scale here!
          gltf.scene.position.set(0,-5,0); //position here!
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      if(this.model){
          this.model.rotation.z += 0.01;
      }
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener('resize', this.onWindowResize, false);
  },
};
</script>

<style>
#container2{
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 925ms;
    background-color:rgba(0,0,0,0);
}
#e {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
</style>
