<template>
  <div style="display: flex; flex-direction: row">
    <div style="flex-basis: 33%">
      <MoviesList />
    </div>
    <div style="flex-basis: 33%">
      <GamesList />
    </div>
    <div style="flex-basis: 33%">
      <PeopleList />
    </div>
  </div>
</template>

<script>
import GamesList from "./components/GamesList.vue";
import MoviesList from "./components/MoviesList.vue";
import PeopleList from "./components/PeopleList.vue";
export default {
  name: "App",
  components: {
    GamesList,
    MoviesList,
    PeopleList,
  },
};
</script>

<style>
</style>
