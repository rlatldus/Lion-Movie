<template>
    <div class="moviecard">
        <h2>{{ movie.title }}</h2>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <p>{{ movie.overview }}</p>
        <p>Release Date: {{ movie.release_date }}</p>
        <p>Vote Average: {{ movie.vote_average }}</p>
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
.moviecard{

    img{
        width: 100px;
        
    }
}

</style>