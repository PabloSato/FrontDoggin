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
  background: #170f11;
  display: inline-block;
  color: #5f4bb6;
  font-size: 1rem;
  margin: 5px 5px 10px;
  width: 300px;
  border: none;
  padding: 14px;
  border-radius: 3px;
}
.filter-nav button.active {
  background:#9ab7d7
}
 button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;

  }
</style>
