<template>
  <div>
    <h3>Lista de Jogos</h3>
    <input type="text" placeholder="Nome do Jogo..." v-model="item" />
    <button type="button" @click="addItem()">Adicionar Jogo</button><br />
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
  name: "GamesList",
  mixins: [MixinsList, RemoveItemMixinList],
};
</script>