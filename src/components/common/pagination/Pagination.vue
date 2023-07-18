<template>
    <div class="alignCard">
        <div v-if="movies.length > 0" class="swaper">
            <div class="mediapc">
                <swiper :freeMode="true" :loop="true" :effect="'coverflow'" :coverflowEffect="{
                    depth: 100,
                    modifier: 1,
                    rotate: 0,
                    stretch: 0,
                    slideShadows: false
                }" class="swipersize" @slideChange="updateCurrentIndex($event.realIndex)" ref="swiper"
                    :pagination="{ clickable: true }" :navigation="movies.length > 0" :autoplay="{ delay: 1000 }"
                    :modules="modules" :breakpoints="{
                        549: {
                            slidesPerView: movies.length > 3 ? 3 : movies.length,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: movies.length > 4 ? 5 : movies.length,
                            spaceBetween: 30
                        }
                    }">
                    <swiper-slide v-for="movie in movies" :key="movie.id">
                        <slot :movie="movie"></slot>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="mediamo" v-for="movie in movies" :key="movie.id">
                <slot :movie="movie"></slot>
            </div>
        </div>
        <p v-else class="empty-message">목록이 비었습니다</p>
    </div>
    <div v-if="movies.length > 0" class="img">
        <img :src="'https://image.tmdb.org/t/p/w500' + movies[adjustedIndex]?.backdrop_path"
            :alt="movies[adjustedIndex].title" />
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
            if (this.movies.length >= 2) {
                if (currentIndex + 2 === this.movies.length + 1) {
                    this.currentIndex = 1;
                } else if (currentIndex + 2 === this.movies.length) {
                    this.currentIndex = 0;
                } else {

                    this.currentIndex = currentIndex + 2;
                }
            } else if (this.movies.length == 1) {
                this.currentIndex = currentIndex;
            }
        }
    },
    computed: {
        adjustedIndex() {
            let currentIndex = this.currentIndex;
            if (currentIndex > this.movies.length - 1) {
                currentIndex = currentIndex - 1;
            }
            return currentIndex;
        },
    },
};
</script>

<style lang="scss"  scoped>
.swaper {
    @media (max-width: 549px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .mediamo {
        @media (min-width: 549px) {
            display: none;
        }
    }

    .mediapc {
        @media (max-width: 549px) {
            display: none;
        }
    }

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
    margin-top: 20px;
    color: gray;
    text-align: center;
    font-size: 24px;
}
</style>
