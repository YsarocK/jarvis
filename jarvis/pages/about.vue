<template>
<v-app>
    <v-main>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                >
                    <getweather :city="'Bordeaux'"></getweather>
                </v-col>
                <v-col
                cols="12"
                >
                <nuxt-link to="/" class="mr-2">Home</nuxt-link>
                </v-col>
                <v-col
                cols="12"
                sm="6">
                    <aboutme></aboutme>
                </v-col>
                <v-col
                cols="12"
                sm="4">
                    <technologies></technologies>
                </v-col>
                <v-col
                cols="12"
                sm="4">
                    <aboutcontact></aboutcontact>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import getweather from '../components/getweather.vue';
import aboutme from '../components/aboutme.vue'
import technologies from '../components/abouttechnologies.vue';
import aboutcontact from '../components/aboutcontact.vue'

export default {
    name: 'about',
    components: {
        getweather,
        technologies,
        aboutcontact,
        aboutme
    }, 
    head() {
        return {
            title: 'A propos';
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Signika', sans-serif;
 
}
.v-application a{
    text-decoration: none;
    color: black !important;
}
</style>