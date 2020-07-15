<template>
  <section>
    <div id="container2"></div>
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

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(0xffffff);
      this.scene.fog = new Three.Fog(0xffffff, 0, 750);

      let light = new Three.HemisphereLight(0xeeeeff, 0x777788, 0.75);
      light.position.set(0.5, 1, 0.75);
      this.scene.add(light);

      this.controls = new PointerLockControls(this.camera, document.body);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      const loader = new GLTFLoader();

      //Goku
      loader.load("/goku/scene.gltf", gltf => {
          this.scene.add(gltf.scene)
          //gltf.scene.scale.set(30,30,30) //scale here!
          gltf.scene.position.set(0,-0.2,0); //position here!
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
    height: 100vh;
    width: 100vw;
}
</style>
