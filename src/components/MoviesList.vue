<template>
  <div>
    <h3>Lista de Filmes</h3>
    <input type="text" placeholder="Nome do filme..." v-model="movie" />
    <button type="button" @click="addMovie()">Adicionar Filme</button><br />
    <br />
    <ul v-for="(movie, index) in movies" :key="index">
      <li>
        {{ movie }}
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  name: "MoviesList",
  data: () => ({
    movie: "",
    movies: [],
  }),
  methods: {
    addMovie() {
      this.movies.push(this.movie);
      this.movie = "";
    },
  },
};
</script>