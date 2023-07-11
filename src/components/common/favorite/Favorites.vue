<template>
    <button v-if="token" @click="toggleFavorite(item)">
        {{ isFavorite(item) ? '찜 해제' : '찜하기' }}
    </button>
    <button v-else @click="showAlert">찜하기</button>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { mapGetters, useStore } from 'vuex';

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
    computed: {
        ...mapGetters(["getToken"]),
        token() {
            return this.getToken;
        }
    },
    methods: {
        showAlert() {
            alert("찜기능은 로그인 후 가능합니다");
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
            item.video = true;
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
