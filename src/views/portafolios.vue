<template>
  <section>
    <v-overlay :value="overlayPreview" :opacity="0.93" color="black">
      <div class="overlayContainer">
        <v-btn icon @click="overlayPreview = false" class="closeOverlay">
          <v-icon large>mdi-close</v-icon>
        </v-btn>

        <v-img
          :src="
            require('@/assets/thumbnailsportafolios/ogp_' +
              proyectoSelected.id +
              '_big.jpg')
          "
          contain
          class="previewImg"
        >
          <div class="middlePortafolios2">
            <a :href="proyectoSelected.path" target="_blank">
              <v-btn large outlined class="textPortafolios2">{{
                $t("worksBoton2")
              }}</v-btn>
            </a>
          </div>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div
          class="nombreProyectoSelected"
          style="text-shadow: 1px 1px 10px rgba(5,5,250,0.9);"
        >
          {{ proyectoSelected.title }}
          <a :href="proyectoSelected.path" target="_blank">
            <div
              style="font-size:calc(12px + 0.1vw);color:white;font-family:Arial;"
              id="opacHover"
            >
              {{ proyectoSelected.path }} </div></a>
              <a :href="proyectoSelected.path2" target="_blank">
            <div
              style="font-size:calc(12px + 0.1vw);color:white;font-family:Arial;"
              id="opacHover"
            ><span v-if="proyectoSelected.path2"> {{ proyectoSelected.path2 }} </span>
            </div></a>
            <a :href="proyectoSelected.path3" target="_blank">
            <div
              style="font-size:calc(12px + 0.1vw);color:white;font-family:Arial;"
              id="opacHover"
            ><span v-if="proyectoSelected.path3"> {{ proyectoSelected.path3 }} </span>
            </div></a>
          <div
            style="font-size:calc(10px + 0.2vw);color:white;font-family:Arial;"
          >
            {{ $t("year") }} {{ proyectoSelected.ano }}
          </div>
          <div
            style="font-size:calc(20px + 0.5vw);text-shadow: 1px 1px 10px rgba(5,5,250,0.9);margin-top:1vh;"
          >
            {{ $t("categorias") }}
          </div>
          <div
            style="font-size:calc(14px + 0.2vw);color:white;font-family:Arial;"
          >
            {{ $t("categorias-" + proyectoSelected.id) }}
          </div>
          <div
            style="font-size:calc(20px + 0.5vw);color:white;margin-top:1vh;;text-shadow: 1px 1px 10px rgba(5,5,250,0.9);"
          >
            {{ $t("techUsed") }}
          </div>
          <div
            style="font-size:calc(14px + 0.2vw);color:white;font-family:Arial;"
          >
            {{ proyectoSelected.techUsed }}
          </div>
        </div>
      </div>
      <div class="resumenProyectoSelected">
        <!--div style="font-size:26px;color:white;margin-bottom:1vh;;text-shadow: 1px 1px 10px rgba(5,5,250,0.9);">
          {{ $t("resu") }}
        </div-->
        <span style="margin-left:1vw;font-family:Arial;">{{
          $t("resumen-" + proyectoSelected.id)
        }}</span>
        <a :href="proyectoSelected.path" target="_blank">
          <div class="visitSite">
            <v-icon>mdi-arrow-right</v-icon>{{ $t("worksBoton2") }}
          </div>
        </a>
      </div>
    </v-overlay>

    <div id="containerPortafolios">
      <div id="works" class="neon">{{ $t("worksTitulo") }}</div>
      <div class="example-3d">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="proyecto in allProjectsFiltered" :key="proyecto.id">
            <v-img
              :src="require('@/assets/logos/logo-' + proyecto.id + '.png')"
              class="item2"
              @click="
                proyectoSelected = proyecto;
                overlayPreview = !overlayPreview;
              ">
              <div class="middlePortafolios">
                <v-btn fab text class="textPortafolios"
                  ><v-icon x-large>mdi-magnify</v-icon></v-btn
                >
              </div>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="tituloProyectoSwiper">
              {{ proyecto.title }}
            </div>
            <div class="tipoProyectoSwiper">
              {{ proyecto.tipo }}
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          
        </swiper>
        <!--div>
            <v-container class="categorias">
              <v-row>
                <v-col cols="3" md="3" v-for="categoria in categorias" :key="categoria" align="center">
                  <span class="categoria" @click="seleccionarCategoria(categoria)">{{ categoria }}</span>
                </v-col>
              </v-row>
            </v-container>
          </div-->
      </div>
    </div>
  </section>
</template>

<script>
import * as proyectos from "../data.json";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      test: proyectos.pages,
      test2: proyectos.apps,
      categoriaSelected: 'All',
      categorias: ['All','Wordpress','Ecommerce','Webapp'],
      proyectoSelected: proyectos.apps.rubik,
      overlayPreview: false,
      isAlive: true,
      swiperOption: {
        initialSlide: 7,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        mousewheel: {
          invert: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 5,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  metaInfo: {
    title: "The Deval",
    titleTemplate: "%s | Portfolio",
  },
  methods: {
    onKeyDown: function(event) {
      switch (event.keyCode) {
        case 27: // esc
          this.overlayPreview = false;
          break;
      }
    },
    seleccionarCategoria(categoria){
      this.categoriaSelected = categoria;
    }
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown, false);
  },
  computed: {
    allProjects: {
      get: function (){
        return this.test ? this.test : null;
      },
      set: function (newValue) {
        this.test = newValue;
      },
    },
    allProjectsFiltered: function() {
      // Por hacer
      let filteredProjects = [];
      if(this.categoriaSelected == 'Wordpress'){
        /*for(element of this.allProjects){
          if(element.category == 'Wordpress'){
            filteredProjects.push(element);
          }
        }*/
        return filteredProjects;
      }else if(this.categoriaSelected == 'Ecommerce'){
        return this.allProjects;
      }else if(this.categoriaSelected == 'Webapp'){
        return this.allProjects;
      }
      else{
        return this.allProjects;
      }
      
    }
  },
};
</script>

<style lang="scss" >
#opacHover {
  transition: all 500ms ease;
  opacity: 1;
}
#opacHover:hover {
  opacity: 0.7;
}
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    background-color: rgba(255, 255, 255, 0);
    background-position: center;
    background-size: cover;
    color: white;
  }
  .swiper-pagination-bullet {
    background-color:grey!important;
  }
  .swiper-pagination {
    bottom:10vh;
    background-color: rgba(255, 255, 255, 0);
  }
}
.item2 {
  width: 100%;
  height: 98%;
  margin-top: 15%;
  transition: all 725ms ease;
}
.swiper-slide:hover .item2 {
  padding-left: 10%;
  padding-right: 10%;
  cursor: pointer;
}
.swiper-slide:hover {
  background-color: rgba(255, 255, 255, 0);
}
.swiper-slide:hover .tituloProyectoSwiper {
  cursor: pointer;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 178, 255, 0.7), 0 0 10px rgba(0, 178, 255, 0.7),
    0 0 20px rgba(0, 178, 255, 0.7), 0 0 40px rgba(38, 104, 127, 1),
    0 0 80px rgba(38, 104, 127, 1), 0 0 90px rgba(38, 104, 127, 1),
    0 0 100px rgba(38, 104, 127, 1), 0 0 140px rgba(38, 104, 127, 1),
    0 0 180px rgba(38, 104, 127, 1);
}
.swiper-slide:hover .tipoProyectoSwiper:before {
  opacity: 1;
  width: 100%;
}
.tituloProyectoSwiper {
  font-size: 30px;
  position: fixed;
  font-family: coolvetica;
  font-weight: 400;
  top: 100%;
  transition: all 725ms ease;
}
.swiper-slide:hover .tipoProyectoSwiper {
  opacity: 1;
}
.previewImg {
  margin-left: auto;
  margin-right: auto;
  top: 5vh;
  width: 50%;
  height: 50%;
}
.visitSite {
  color: white;
  margin-top: 1vh;
  transition: all 325ms ease;
}
.visitSite:hover {
  opacity: 0.7;
}
.nombreProyectoSelected {
  position: relative;
  top: 5vh;
  font-size: calc(26px + 1vw) !important;
  font-family: coolvetica;
}
.tipoProyectoSwiper {
  position: fixed;
  opacity: 0;
  font-size: 16px;
  bottom: 90%;
  z-index: -1;
  font-weight: 400;
  font-family: coolvetica;
  transition: all 2s ease;
}
.tipoProyectoSwiper:before {
  position: absolute;
  opacity: 0;
  content: "";
  width: 1px;
  background-color: white;
  transition: all 2s ease;
  height: 2px;
  bottom: 0;
}
.tipoProyectoSwiper:after {
  position: absolute;
  opacity: 0;
  content: "";
  width: 1px;
  background-color: white;
  transition: all 2s ease;
  height: 2px;
}
.categorias{
  color:rgb(200, 200, 200);
  font-weight:800;
  cursor: pointer;
}
.categoria{
  border-style: solid;
  border-color:rgb(200, 200, 200);
  border-width:2px;
  border-radius:5px;
  padding:5px;
  transition: 325ms ease-in-out;
  font-size:calc(10px + 0.2vw);
}
.categoria:hover{
  opacity:0.7;
}
@media (min-width: 960px) {
  .categorias{
    width:30vw;
    padding-left:0vw;
    margin-top:-9vh!important;
    z-index:9;
  }
  .example-3d {
    width: 100%;
    height: 80vh;
    padding-top: 15vh;
    padding-bottom: 50px;
  }
  @media (min-height: 900px) {
    .example-3d{
      padding-top: 25vh;
    }
  }
  .closeOverlay {
    position: fixed;
    right: 5vw;
    top: 5vw;
    z-index: 9999;
    transition: all 725ms ease;
  }
  .closeOverlay {
    opacity: 0.7;
  }
  .overlayContainer {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    text-align: center;
  }
  .previewImg {
    position: relative;
    margin-left: 10vw;
    top: 10vh;
    width: 50%;
    height: 50%;
    transition: all 725ms ease;
    /*animation: cycle 10s linear infinite;
    animation-direction: alternate-reverse;*/
  }
  .previewImg:hover {
    opacity: 0.85;
  }
  .nombreProyectoSelected {
    position: absolute;
    top: 15vh;
    left: 65vw;
    font-size: 50px;
  }
  .column_wrapper {
    position: relative;
    padding-top: 0vh;
    margin-left: 10vw;
    margin-right: 10vw;
    text-align: center;
    column-count: 3;
    /*background-color: white;*/
  }
  .item {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    border: 1px;
    border-radius: 5px;
    border-style: solid;
    border-color: white;
    padding-bottom: 0 !important;
    height: 15vh;
    width: 15vw;
    transition: 0.95s cubic-bezier(0.55, 0, 0.1, 1);
    cursor: pointer;
  }
  .item:hover {
    opacity: 0.7;
    z-index: 99;
  }
  .proyectoTitulo {
    margin-top: 10px;
    margin-bottom: 50px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .proyectoTitulo:hover {
    opacity: 0.9;
    color: #fff;
    text-shadow: 0 0 5px rgba(0, 178, 255, 0.7), 0 0 10px rgba(0, 178, 255, 0.7),
      0 0 20px rgba(0, 178, 255, 0.7), 0 0 40px rgba(38, 104, 127, 1),
      0 0 80px rgba(38, 104, 127, 1), 0 0 90px rgba(38, 104, 127, 1),
      0 0 100px rgba(38, 104, 127, 1), 0 0 140px rgba(38, 104, 127, 1),
      0 0 180px rgba(38, 104, 127, 1);
  }
  .item:hover .proyectoTitulo {
  }
  #containerPortafolios {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url("../assets/bck2.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
  }
  #containerScroll {
    position: fixed;
    top: 10%;
    left: 0%;
    width: 100vw;
    height: 75%;
  }
  .textPortafolios {
    opacity: 1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
    font-size: 20px;
    cursor: pointer;
    color: black;
    padding: 7px;
    font-family: coolvetica;
    transition: 725ms ease;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .textPortafolios:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0);
    color: white;
    transform: rotateZ(45deg);
  }
  .textPortafolios2 {
    opacity: 1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .textPortafolios2:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  }
  .middlePortafolios {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .middlePortafolios2 {
    position: relative;
    transition: 0.5s ease;
    opacity: 0;
    top: 90%;
    left: 87%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .item2:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0;
    margin: 0;
    border-radius: 15px;
  }
  .item2:hover .middlePortafolios {
    opacity: 1;
  }
  .previewImg:hover .middlePortafolios2 {
    opacity: 1;
  }
  #works {
    position: relative;
    text-align: center;
    top: 10vh;
    color: white;
    letter-spacing: 1.5px;
    font-family: coolvetica;
    font-size: 36px;
  }
  .resumenProyectoSelected {
    position: absolute;
    top: 65vh;
    left: 10vw;
    max-width: 50vw;
    font-size: 18px;
    justify-content: initial;
    text-justify: initial !important;
    font-family: coolvetica;
  }
}
@media (max-width: 960px) {
  .example-3d {
    width: 100%;
    height: 80vh;
    padding-top: 2vh;
    padding-bottom: 50px;
  }
  .categorias{
    width:95vw;
    padding-left:0vw;
    margin-top:-14vh!important;
    z-index:9;
  }
  .categoria{

  }
  .swiper-pagination{
    bottom:12vh!important;
  }
  .closeOverlay {
    z-index: 9999;
    transition: all 525ms ease;
  }
  .overlayContainer {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    text-align: center;
  }
  #containerPortafolios {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url("../assets/bck2.jpg");
    background-position: 50% -75px; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    position: absolute;
    text-align: center;
    top: -80vh;
    left: 0vw;
    background-color: black;
    width: 100%;
    z-index: 3;
  }
  .previewImg {
    max-width: 35%;
  }
  .column_wrapper {
    position: relative;
    margin-left: 7vw;
    margin-right: 7vw;
    text-align: center;
    column-count: 1;
  }
  .item {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    opacity: 0.9;
    height: 20vh;
    transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .item:hover {
    opacity: 1;
  }
  .proyectoTitulo {
    padding-top: 10px;
    margin-bottom: 35px;
    color: white;
    font-size: 16px;
    transition: opacity 0.95s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .proyectoTitulo:hover {
    opacity: 0.5;
  }
  .textPortafolios {
    opacity: 1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
    font-size: 20px;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .textPortafolios2 {
    opacity: 1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .textPortafolios:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  }
  .middlePortafolios {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .middlePortafolios:hover {
    opacity: 1;
  }
  .middlePortafolios2 {
    position: relative;
    transition: 0.5s ease;
    opacity: 1;
    top: 80%;
    left: 77%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .item:hover .middlePortafolios {
    opacity: 1;
  }
  #works {
    position: relative;
    top: -3vh;
    margin-left: auto;
    margin-right: auto;
    color: white;
    letter-spacing: 1.5px;
    font-family: coolvetica;
    font-size: 26px;
  }
  .resumenProyectoSelected {
    display: none;
    position: absolute;
    font-family: coolvetica;
    font-size: 16px;
    justify-content: initial;
    text-justify: initial !important;
  }
  .tipoProyectoSwiper {
    opacity: 1;
  }
}
</style>
