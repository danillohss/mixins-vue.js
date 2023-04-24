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
  </div>
</template>
  <script>
import MixinsList from "@/mixins/MixinsList";
export default {
  name: "PeopleList",
  mixins: [MixinsList],
};
</script>