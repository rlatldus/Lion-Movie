<template>
    <div class="moviecard">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    </div>
</div></template>

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


<style lang="scss" scoped>
.moviecard {
    img {
        width: 100px;
        height: 100px;
    }
}
</style>