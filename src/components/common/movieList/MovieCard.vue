<template>
    <div class="moviecard">
        <h2>{{ movie.title }}</h2>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <div class="script">
            <p>{{ movie.overview }}</p>
            <p>Release Date: {{ movie.release_date }}</p>
            <p>Vote Average: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style  lang="scss" scoped>
.moviecard {
    color: white;

    h2 {
        height: 100px;
    }

    img {
        display: block;
        width: 90%;
        object-fit: cover;

        &:hover {
            scale: 1.1;
            transition: all 200ms linear 200ms;
        }
    }

.script{
    font-size: 12px;
}

}
</style>