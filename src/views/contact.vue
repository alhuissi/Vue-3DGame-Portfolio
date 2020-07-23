<template>
  <section>
    <v-overlay :value="overlay" :opacity="0.93" color="black">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <canvas id="d"></canvas>

    <div id="fondoContacto">
      <v-btn text id="preguntaContacto" @click="openContacto()"
        ><v-icon text large color="#ffffff">mdi-email-outline</v-icon></v-btn
      >
      <div id="containerContacto">
        <v-form id="form" ref="form">
          <v-btn text id="cruzContacto" @click="closeContacto()"
            ><v-icon text color="#000000">mdi-close</v-icon></v-btn
          >
          <v-container>
            <v-row>
              <div class="tituloContacto">
                {{ $t("contactoTitulo") }}
              </div>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" style="padding-top:0;padding-bottom:0;">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required, rules.counter]"
                  label="Name"
                  maxlength="40"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" style="padding-top:0;padding-bottom:0;">
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="Email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
              v-model="message"
              label="Message"
              maxlength="200"
              full-width
              single-line
              style="padding-top:0;padding-bottom:0;"
            ></v-textarea>
            <v-card-actions>
              <v-btn text @click="resetForm">{{
                $t("contactoCancelar")
              }}</v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <template v-slot:activator="{ on }">
                    <v-btn icon class="my-0" @click="resetForm" v-on="on">
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Vaciar</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn @click="submit">{{ $t("contactoEnviar") }}</v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import * as Three from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { HalftonePass } from "three/examples/jsm/postprocessing/HalftonePass.js";
import { TWEEN } from "@tweenjs/tween.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//const TWEEN = require('@tweenjs/tween.js');

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      composer: null,
      object: null,
      controls: null,
      objects: [],
      light: null,
      glitchPass: null,
      mesh: null,
      name: "",
      email: "",
      message: "",
      formHasErrors: false,
      overlay: false,
      rules: {
        required: (value) => !!value || "Requerido",
        counter: (value) => value.length <= 200 || "Max 200 caracteres",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido";
        },
      },
    };
  },
  metaInfo: {
    title: "Deval",
    titleTemplate: "%s | Contact",
  },
  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        message: this.message,
        formSubmitted: false,
        isLoading: false,
      };
    },
  },
  watch: {
    name() {
      this.errorMessages = "";
    },
    overlay() {

    }
  },
  mounted() {
    this.init();
    this.render();
    window.addEventListener("resize", this.onWindowResize, false);
  },
  created() {
    emailjs.init("user_Ct0oD2668xpNvp6vyYxIa");
  },
  destroyed() {
    this.renderer.forceContextLoss();
    //document.body.removeChild(this.renderer.domElement);
    console.log("destroyed");
  },
  methods: {
    init: function() {
      let fondo = document.getElementById("fondoContacto");
      const canvas = document.querySelector("#d");
      this.renderer = new Three.WebGLRenderer({ canvas, antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      fondo.appendChild(this.renderer.domElement);
      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.camera.position.z = 500;


      //this.scene.background = new Three.Color(0x010214);
      this.scene.background = new Three.Color(0x000000);
      this.scene.fog = new Three.Fog(0xffffff, 0, 2500);

      this.object = new Three.Object3D();
      this.scene.add(this.object);

      let light = new Three.PointLight(0x7fffff, 1, 300);
      light.position.set(1, 150, 100);
      this.scene.add(light);

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(new RenderPass(this.scene, this.camera));

      let renderPass = new RenderPass(this.scene, this.camera);
      let params = {
        shape: 1,
        radius: 4,
        rotateR: Math.PI / 12,
        rotateB: (Math.PI / 12) * 2,
        rotateG: (Math.PI / 12) * 3,
        scatter: 0,
        blending: 1,
        blendingMode: 1,
        greyscale: false,
        disable: false,
      };
      let halftonePass = new HalftonePass(
        window.innerWidth,
        window.innerHeight,
        params
      );
      this.composer.addPass(renderPass);

      let glitchPass = new GlitchPass();
      //this.composer.addPass(glitchPass);

      const loader = new GLTFLoader();

      //Espacio
      loader.load(
        "/need_some_space/scene.gltf",
        (gltf2) => {
          this.scene.add(gltf2.scene);
          gltf2.scene.scale.set(10, 10, 10); //scale here!
          gltf2.scene.position.set(-500, -500, -500); //position here!
          this.objects.push(gltf2.scene);
          this.model2 = gltf2.scene.children[0];
        },
        undefined,
        undefined
      );

      //Pieza
      loader.load(
        "/room_simple/scene.gltf",
        (gltf) => {
          this.scene.add(gltf.scene);
          gltf.scene.scale.set(115, 115, 115); //scale here!
          gltf.scene.position.set(0, -150, 0); //position here!
          gltf.scene.rotateY;
          this.objects.push(gltf.scene);
          this.model = gltf.scene.children[0];
        },
        undefined,
        undefined
      );
      this.overlay = false;
    },
    render() {
      requestAnimationFrame(this.render);
      this.renderer.render(this.scene, this.camera);
      //this.object.rotation.x += 0.001;
      if (this.model) {
        this.model.rotation.z -= 0.0005;
      }
      this.composer.render();
    },
    onWindowResize: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submit() {
      this.overlay = true;
      event.preventDefault();
      if (this.email !== null && this.title !== null && this.mensaje !== null) {
        this.formHasErrors = false;
        this.isLoading = true;
        this.formSubmitted = false;
        let template_params = {
          from_name: this.name,
          from_email: this.email,
          message_html: this.message,
        };

        if (this.email !== "" && this.title !== "" && this.mensaje !== "") {
          let service_id = "gmail";
          let template_id = "template_dPfBh7mw";
          emailjs.send(service_id, template_id, template_params).then(
            (response) => {
              this.formSubmitted = true;
              this.isLoading = false;
              this.errorMessages = [];
              this.formHasErrors = false;
              this.name = "";
              this.email = "";
              this.message = "";
              this.overlay = false;
              this.$swal({
                title: "Mensaje enviado",
                text: "Te responderé a la brevedad",
                icon: "success",
                button: "Gracias",
              });
              console.log("SUCCESS You just sent an email...", response);
            },
            (error) => {
              console.log("FAILED Throw an error to user...", error);
              this.isLoading = false;
              this.overlay = false;
              this.$swal({
                title: "Error",
                text: "Inténtalo nuevamente más tarde",
                icon: "error",
                button: "Ok",
              });
            }
          );
        } else {
          this.overlay = false;
          this.$swal({
            title: "Error",
            text: "Tienes que completar las casillas",
            icon: "error",
            button: "Ok",
          });
        }
      } else {
        this.formHasErrors = true;
        this.overlay = false;
        this.$swal({
          title: "Error",
          text: "Inténtalo nuevamente más tarde",
          icon: "error",
          button: "Ok",
        });
      }
    },
    closeContacto() {
      document.getElementById("form").style.opacity = "0";
      document.getElementById("preguntaContacto").style.opacity = "1";
      document.getElementById("preguntaContacto").style.display = "";
      document.getElementById("form").style.zIndex = "-1";
      document.getElementById("form").style.display = "none";
    },
    openContacto() {
      document.getElementById("form").style.opacity = "1";
      document.getElementById("preguntaContacto").style.opacity = "0";
      document.getElementById("preguntaContacto").style.display = "none";
      document.getElementById("form").style.zIndex = "1";
      document.getElementById("form").style.display = "";
    },
  },
};
</script>

<style>
@media (min-width: 960px) {
  #containerContacto {
    position: relative;
    z-index: 3;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  }
  #form {
    background-color: rgba(255, 255, 255, 1);
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 5px;
    font-family: coolvetica;
    z-index: 19;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
    opacity: 0.95;
  }
  @media (min-height: 900px){
    #form {
      margin-top: 20vh;
    }
  }
  #form:hover {
    opacity: 1;
  }
  .tituloContacto {
    position: relative;
    font-family: coolvetica;
    font-size: 36px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  }
  #cruzContacto {
    position: relative;
    color: black;
    top: 10px;
    left: 93%;
    z-index: 99;
  }
  #cruzContacto:hover {
    opacity: 0.7;
  }
  #preguntaContacto {
    position: absolute;
    color: white;
    right: 5vw;
    top: 5vh;
    opacity: 0;
    z-index: 99;
  }
  #preguntaContacto:hover {
    transform: translateY(7px);
  }
  #fondoContacto {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 925ms;
  }
  #d {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 960px) {
  #containerContacto {
    position: relative;
    z-index: 3;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  }
  #form {
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    width: 84vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 13vh;
    padding: 1px;
    border-radius: 5px;
    font-family: coolvetica;
    z-index: 19;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
    opacity: 0.95;
  }
  #form:hover {
    opacity: 1;
  }
  @media (max-height: 420px) {
    #form {
      margin-top: 1vh;
    }
  }
  @media (min-height: 420px) {
    #form {
    }
  }
  .tituloContacto {
    position: relative;
    font-family: coolvetica;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    color: black;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  }
  #cruzContacto {
    position: absolute;
    color: black;
    top: 1vh;
    right: 0vw;
    z-index: 99;
  }
  #preguntaContacto {
    position: absolute;
    color: white;
    right: 0vw;
    top: 15vh;
    opacity: 0;
    z-index: 9;
  }
  #preguntaContacto:hover {
    transform: translateY(7px);
  }
  #fondoContacto {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 925ms;
  }
  #d {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
}
</style>
