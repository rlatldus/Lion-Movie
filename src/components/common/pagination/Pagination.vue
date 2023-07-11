<template>
    <div class="alignCard">
        <swiper v-if="movies.length > 0" :freeMode="true" :loop="true" :effect="'coverflow'" :coverflowEffect="{
            depth: 100,
            modifier: 1,
            rotate: 0,
            stretch: 0,
            slideShadows: false
        }" :breakpoints="{
    350: {
        slidesPerView: movies.length > 3 ? 3 : movies.length,
        spaceBetween: 20
    },
    549: {
        slidesPerView: movies.length > 3 ? 3 : movies.length,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: movies.length > 4 ? 5 : movies.length,
        spaceBetween: 30
    }
}" :pagination="{ clickable: true }" :navigation="true" :autoplay="{ delay: 1000 }" :modules="modules"
            class="swipersize" @slideChange="updateCurrentIndex($event.realIndex + 2)" ref="swiper">
            <swiper-slide v-for="movie in movies" :key="movie.id">
                <slot :movie="movie"></slot>
            </swiper-slide>
        </swiper>
        <p v-else class="empty-message">목록이 비었습니다</p>
    </div>
    <div v-if="movies.length > 0" class="img">
        <p>{{ currentIndex }}</p>
        <img :src="'https://image.tmdb.org/t/p/w500' + movies[currentIndex].backdrop_path"
            :alt="movies[currentIndex].title" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = [Pagination, Navigation, EffectCoverflow];
        return {
            modules,
        };
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },
    methods: {
        updateCurrentIndex(currentIndex) {
            if (currentIndex === this.movies.length) {
                this.currentIndex = 0;
            } else if (currentIndex > this.movies.length) {
                this.currentIndex = 1;
            } else {
                this.currentIndex = currentIndex;
            }
            console.log(this.currentIndex, this.movies.length);
        },
    },
};
</script>

<style lang="scss"  scoped>
.swipersize {
    width: 100%;
}

.img {
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        object-fit: cover;
        opacity: 0.5;
    }

    p {
        color: white;
    }
}


.empty-message {
    text-align: center;
    font-size: 24px;
    color: gray;
    margin-top: 20px;
}
</style>
