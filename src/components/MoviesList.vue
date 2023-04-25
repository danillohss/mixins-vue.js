<template>
  <div>
    <h3>{{ titulo }}</h3>
    <input type="text" placeholder="Nome do Filme..." v-model="item" />
    <button type="button" @click="addItem()">Adicionar Filme</button><br />
    <br />
    <ul v-for="(item, index) in items" :key="index">
      <li>
        {{ item }}
      </li>
    </ul>
    <button type="button" @click="ItemRemove()">Remover</button>
  </div>
</template>
  
  <script>
import RemoveItemMixinList from "@/mixins/RemoveItemMixinList";
import MixinsList from "@/mixins/MixinsList";
export default {
  name: "MoviesList",
  data: () => ({
    titulo: "Lista filmes",
  }),
  mixins: [MixinsList, RemoveItemMixinList],
  created() {
    console.log("MoviesList created");
  },
};
</script>