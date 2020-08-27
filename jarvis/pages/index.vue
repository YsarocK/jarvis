<template>
<v-app>
    <v-main>
        <v-container>
            <v-row
            >
                <v-col
                cols="12"
                >
                    <getweather :city="'Toulouse'"></getweather>
                </v-col>
                <v-col
                cols="12"
                >
                <nuxt-link to="/about" class="mr-2">A propos</nuxt-link>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <getnews></getnews>
                </v-col>
                <v-col
                cols="12"
                md="8"
                >
                    <getchuck></getchuck>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import getnews from '../components/getnews.vue';
import getchuck from '../components/getchuck.vue';
import getweather from '../components/getweather.vue';

export default {
    components: {
        getnews,
        getchuck,
        getweather,
    },
    head() {
        return {
            title: 'Dashboard',
        }
    }
}
</script>

<style>

*{
    font-family: 'Signika', sans-serif;
}

h3{
    color: indianred;
}

.v-application a{
    text-decoration: none;
    color: black !important;
}

.come-in {
    transform: translateY(150px);
    animation: come-in 1.5s ease forwards;
}
.come-in:nth-child(odd) {
    animation-duration: 1s; /* So they look staggered */
}

@keyframes come-in {
    to { transform: translateY(0); }
}

.come-in-top {
    transform: translateY(-150px);
    animation: come-in 1.5s ease forwards;
}
.come-in-top:nth-child(odd) {
    animation-duration: 1s; /* So they look staggered */
}

@keyframes come-in-top {
    to { transform: translateY(0); }
}

</style>