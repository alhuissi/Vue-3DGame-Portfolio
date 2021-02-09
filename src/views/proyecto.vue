<template>
  <section>
  
  </section>
</template>

<script>
import * as proyectos from "../data.json";


export default {
  data() {
    return {
      test: proyectos.pages,
      test2: proyectos.apps,
      proyectoSelected: proyectos.apps.rubik,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {},
        rail: {},
        bar: { background: "#0f0fa7" },
      },
    };
  },
  components: {

  },
  directives: {

  },
  metaInfo: {
    title: "Deval",
    titleTemplate: "%s | Proyecto",
  },
  methods: {

  },
  mounted() {

  },
  computed: {},
};
</script>

<style lang="scss" scoped>

@media (min-width: 960px) {

}
@media (max-width: 960px) {
  
}
</style>
