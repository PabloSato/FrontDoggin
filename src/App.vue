<template .container-flex>
  <router-view />
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';
export default {
  computed: {
    // isLogin(){
    //   return localStorage.getItem('token');
    // },
  },
  methods: {
    ...mapActions(['leerToken']),
  },
  created() {
    this.leerToken();
  },
  updated() {
    console.log('modificado');
  },
};
</script>

<style></style>
