<template>
  <div>
    <h3>Lista da pessoa</h3>
    <input type="text" placeholder="Nome da Pessoa..." v-model="item" />
    <button type="button" @click="addItem()">Adicionar Pessoa</button><br />
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
  name: "PeopleList",
  mixins: [MixinsList, RemoveItemMixinList],
};
</script>