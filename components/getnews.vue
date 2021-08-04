<template>
  <div>
      <h3>Last News</h3>
      <v-card
        v-for="post in news"
        :key="post.id"
        class="mt-5"
        outlined
        style='overflow: hidden'      
        >
        <div class="d-flex flex-no-wrap">
          <v-avatar
          class="ma-3 come-in"
          size="100"
          tile
          >
            <v-img :src="post.thumbnail_standard" ></v-img>
          </v-avatar>
          <div>
          <a :href="post.url" target="blank"><v-card-subtitle class="px-5 py-3 come-in">{{ post.title }}</v-card-subtitle></a>
          <v-card-text class="px-5 pb-3 pt-0 come-in">{{ post.abstract }}</v-card-text>
          </div>
        </div>
      </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'getnews',
  data () {
    return {
      news: [],
      timer: '',
    }
  },
  mounted() {
      this.getNews();
      this.timer = setInterval(this.getNews, 300000)
  },

  methods: {
     getNews() {
       axios
        .get("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=UPeJfUvsefxBpt97ZndomeHaWU4HTAb7&limit=5")
        .then(response => {
            var results = response.data.results;
            results = JSON.stringify(results);
            results = JSON.parse(results);
            this.news = results;
        })
    }
  }
}
</script>

<style>
  .v-application a{
    text-decoration: none;
    color: black;
  }
</style>