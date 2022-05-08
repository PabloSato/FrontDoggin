<template>
  <nav class="filter-nav">
    <Multiselect
      v-model="tags"
      mode="tags"
      placeholder="Selecciona filtros"
      :options="TAGS"
      :search="true"
    />
  </nav>
</template>

<script>
import Multiselect from '@vueform/multiselect';
import { ref } from '@vue/reactivity';

export default {
  props: ['current'],
  components: { Multiselect },
  methods: {
    actualizarFiltro(filtro) {
      this.$emit('filtroActualizado', filtro);
    },
  },
  setup() {
    const TAGS = ref([]);
    TAGS.value = ['Agility', 'Cachorros', 'Razas grandes', 'Pastoreo'];

    return { TAGS };
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
