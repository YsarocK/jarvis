<template>
    <div class="weather-topbar">
        <p id="weather_place" class="come-in-top">{{ cityname }}</p>
        <img :src="iconsrc" alt="" class="come-in-top">
        <p class="come-in-top">{{ humidity }} % d'humidité</p>
        <p class="come-in-top">{{ temp_max }}°C / {{ temp_min }}°C</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'topbar-weather',
    props: {
        city: String,
    },
    data() {
        return {
            cityname: "",
            weather: [],
            iconsrc: "",
            air: "",
            timer: "",
            temp_max: "",
            temp_min: "",
            humidity: "",
        }
    },
    mounted() {
        this.getWeather();
        // this.timer = setInterval(this.getWeather, 300000)
    },
    methods: {
        getWeather() {
            axios
                .get("https://api.openweathermap.org/data/2.5/weather?q=" + this.city +"&appid=4bc1dfad041971b912c3c1bac4c3a4e3")
                .then(response => {
                    var results = response.request.response;
                    results = JSON.parse(results);
                    this.weather = results;
                    this.temp_max = Math.round(this.weather.main.temp_max - 273.15);
                    this.temp_min = Math.round(this.weather.main.temp_min - 273.15);
                    this.cityname = this.weather.name;
                    this.humidity = this.weather.main.humidity;
                    this.iconsrc = 'http://openweathermap.org/img/wn/' + results.weather['0'].icon + '@2x.png';
                });
        }
    }
}
</script>

<style scoped>
.weather-topbar{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    width: 100%;
    color: indianred;
    z-index: 10000;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
}

.weather-topbar>div{
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
}

.weather-topbar>*{
    margin-right: 15px;
    margin-bottom: 0;
}

.weather-topbar img{
    height: 100%;
}

#weather_place{
    font-weight: 400;
    margin: 0;
}
</style>