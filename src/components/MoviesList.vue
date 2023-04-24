<template>
  <div>
    <h3>Lista de Filmes</h3>
    <input type="text" placeholder="Nome do Filme..." v-model="item" />
    <button type="button" @click="addItem()">Adicionar Filme</button><br />
    <br />
    <ul v-for="(item, index) in items" :key="index">
      <li>
        {{ item }}
      </li>
    </ul>
  </div>
</template>
  
  <script>
import MixinsList from "@/mixins/MixinsList";
export default {
  name: "MoviesList",
  mixins: [MixinsList],
};
</script>