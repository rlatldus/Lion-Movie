<template>
    <swiper :freeMode="true" :loop="true" :breakpoints="{
        350: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        549: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }" :pagination="{
    clickable: true
}" :navigation="true" :modules="modules" class="swipersize">
        <SwiperSlide v-for="movie in movies" :key="movie.id">
            <slot :movie="movie"></slot>
        </SwiperSlide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = [Pagination, Navigation];
        return {
            modules
        };
    },
    data() {
        return {
        }
    },
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.swipersize {
    width: 80%;
}
</style>

