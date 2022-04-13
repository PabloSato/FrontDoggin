<template>
  <single-cliente
    v-for="cliente in clientes"
    :key="cliente.nombre"
    :cliente="cliente"
  />
</template>

<script>
import SingleCliente from '../components/SingleCliente.vue';
import getClientes from '../componsables/getClientes';
export default {
  components: { SingleCliente },
  setup() {
    const { clientes, error, load } = getClientes();
    load();
    return { clientes };
  },
};
</script>

<style></style>
