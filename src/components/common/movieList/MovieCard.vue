<template>
    <div class="moviecard">
        <div class="cover" @mouseover="isHovered = true" @mouseout="isHovered = false">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <div class="texts" :class="{ 'overview-visible': isHovered }">
                <p>출시일 : {{ movie.release_date || movie.first_air_date }}</p>
                <p>관객수 : {{ movie.popularity || movie.first_air_date }}</p>
                <p>평점 :
                    <span v-for="star in starRatings" :key="star" class="star"
                        :class="{ filled: star <= movie.vote_average }">★</span>
                </p>
                <p>내용 : {{ movie.overview || movie.title || movie.name }}</p>
            </div>
        </div>
        <div class="script">
            <h2>{{ movie.title || movie.name }}</h2>
            <button @click="removeFavorite(movie)">찜삭제하기</button>
            <div class="star-ratings">
                <span v-for="star in starRatings" :key="star" class="star"
                    :class="{ filled: star <= movie.vote_average }">★</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    computed: {
        starRatings() {
            const ratings = Math.round(this.movie.vote_average / 2);
            return Array.from({ length: 5 }, (_, index) => index + 1).filter((star) => star <= ratings);
        },
    },
    setup(props) {
        const store = useStore();
        const isHovered = ref(false);
        const removeFavorite = (movie) => {
            store.dispatch('removeFavorite', movie);
        };

        return {
            isHovered,
            removeFavorite,
        }
    }
};

</script>


<style lang="scss" scoped>
.moviecard {
    color: white;
    border-radius: 20px;

    .cover {
        margin-top: 30px;
        margin-bottom: 10px;
        height: 300px;
        overflow: hidden;
        position: relative;
        border-radius: 20px;
        transition: transform 0.3s ease-in-out;
        color: rgba(255, 255, 255, 0);
        text-align: left;

        &:hover {
            color: rgb(255, 255, 255);
            transform: translateY(-30px);
            transition-delay: 0.3s;
        }


        img {
            position: absolute;
            max-width: 250px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            transition: transform 0.3s ease-in-out;

            &:hover {
                transition: all 0.3s ease-in-out;
                filter: brightness(0) invert(0);
                opacity: 0.7;
            }
        }

        .texts {
            margin: 10px;
            position: absolute;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            font-size: 12px;

        }
    }

    .script {
        font-size: 12px;

        h2 {
            text-align: center;
            height: 50px;
            font-size: 20px;
        }

        button {
            background-color: var(--light);
            position: absolute;
            height: 10%;
            top: 0;
            right: 0;
            border-radius: 5px;
        }
    }
}

.star-ratings {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .star {
        color: #FFD700;
        font-size: 16px;
        transition: color 0.3s ease-in-out;

        &.filled {
            color: #FFCC00;
        }
    }
}
</style>