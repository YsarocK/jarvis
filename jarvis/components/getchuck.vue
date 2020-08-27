<template>
    <!-- <div class="container_jarvis" id="chucknorris_container">
        <h3 >Chuck Norris Facts</h3>
        <div class="facts" v-for="joke in jokes" :key="joke.id">
            <p class="come-in">{{ joke }}</p>
        </div>
    </div> -->
    <div>
        <h3>Chuck facts</h3>
        <v-card
        v-for="joke in jokes"
        :key="joke.id"
        class="mt-5"
        outlined     
        style='overflow: hidden'       
        >
        <v-card-text class="come-in">{{ joke }}</v-card-text>
        <a target="blank"><v-card-subtitle class="come-in">by Chuck Norris</v-card-subtitle></a>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'getchuck',
    props: {
        categorie: String,
    },
    data() {
        return {
            jokes: [],
            timer: ''
        }
    },
    mounted() {
        this.getjokes();
        this.timer = setInterval(this.getjokes, 600000)
    },
    methods: {
        getjokes() {
            if(this.categorie == "" ||	this.categorie == null ||	this.categorie == 'all'){
                var request = 'https://api.chucknorris.io/jokes/random';
            } else {
                request = 'https://api.chucknorris.io/jokes/random?category=' + this.categorie;
            }
            this.jokes = [];
            for (var i=0; i < 3; i++) {
            axios
                .get(request)
                .then(response => {
                    this.jokes.push(response.data.value);
                })
            }
        }
    }
}
</script>

<style>
#chucknorris_container{
    text-align: left;
    display: flex;
}

#chucknorris_container .facts {
    width: 100%;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: #1f4068;
    color: white;
    overflow: hidden;
}
</style>