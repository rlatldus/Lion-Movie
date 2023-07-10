<template>
    <swiper v-if="movies.length > 0" :freeMode="true" :loop="true" :effect="'coverflow'" 
    :coverflowEffect="{
        depth: 100,
        modifier: 1,
        rotate: 0,
        stretch: 0,
        slideShadows: true
    }" :breakpoints="{
    350: {
        slidesPerView: movies.length > 4 ? 1 : movies.length,
        spaceBetween: 20
    },
    549: {
        slidesPerView: movies.length > 4 ? 3 : movies.length,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: movies.length > 4 ? 5: movies.length,
        spaceBetween: 30
    }
}" :pagination="{ clickable: true }" :navigation="true" :autoplay="{ delay: 3000 }" :modules="modules"
        class="swipersize">
        <swiper-slide v-for="movie in movies" :key="movie.id">
            <slot :movie="movie"></slot>
        </swiper-slide>
    </swiper>
    <p v-else class="empty-message">목록이 비었습니다</p>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = [Pagination, Navigation, EffectCoverflow];
        return {
            modules
        };
    },
    data() {
        return {};
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
}

.empty-message {
    text-align: center;
    font-size: 24px;
    color: gray;
    margin-top: 20px;
}
</style>
