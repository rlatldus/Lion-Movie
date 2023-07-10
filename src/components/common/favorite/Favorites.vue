<template>
    <button @click="toggleFavorite(item)">
        {{ isFavorite(item) ? '찜 해제' : '찜하기' }}
    </button>
</template>

<script>
import { useStore } from 'vuex';
import { ref, watchEffect } from 'vue';
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const store = useStore();
        const items = ref([]);

        const isFavorite = (item) => {
            const favorites = store.getters.getFavorites;
            return favorites.some((favorite) => favorite.id === item.id);
        };

        const toggleFavorite = (item) => {
            if (isFavorite(item)) {
                store.dispatch('removeFavorite', item);
            } else {
                store.dispatch('addFavorite', item);
            }
            console.log(store)
        };

        watchEffect(() => {
            items.value.forEach((item) => {
                item.isFavorite = isFavorite(item);
            });
        });

        return {
            items,
            toggleFavorite,
            isFavorite
        };
    }
};
</script>
<style scoped>
.favorite {
    display: flex;
}

.movieListWrap {
    padding-bottom: 20px;
    display: flex;


}

.img {
    width: 100px;
}
</style>
