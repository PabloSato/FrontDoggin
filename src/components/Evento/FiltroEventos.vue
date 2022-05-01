<template>
  <nav class="filter-nav">
    <button
      @click="actualizarFiltro('activos')"
      :class="{ active: current === 'activos' }"
    >
      Activos
    </button>
    <button
      @click="actualizarFiltro('misEventos')"
      :class="{ active: current === 'misEventos' }"
    >
      Mis Eventos
    </button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    actualizarFiltro(filtro) {
      this.$emit('filtroActualizado', filtro);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
