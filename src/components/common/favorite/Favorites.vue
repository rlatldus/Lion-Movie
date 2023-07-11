<template>
    <div>
        <span v-if="token && isFavorite(item)" class="favorite-text favorite">찜하기</span>
        <span v-if="token && !isFavorite(item)" class="favorite-text unfavorite">찜해제</span>
        <button class="favorite-button" :class="{ favorite: isFavorite(item), unfavorite: !isFavorite(item) }" v-if="token"
            @click="toggleFavorite(item)">
            <font-awesome-icon :icon="isFavorite(item) ? 'heart' : ['far', 'heart']" />
        </button>
        <button class="favorite-button unfavorite" v-else @click="showAlert">
            <font-awesome-icon icon="heart" :class="{ 'far': true }" />
            <span>찜하기</span>
        </button>
    </div>
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
.favorite-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease-in-out;
}

.favorite-text {
    margin-left: 8px;
    font-size: 14px;
    transition: color 0.2s ease-in-out;
}

.favorite {
    color: red;
}

.unfavorite {
    color: gray;

}

.favorite-button:hover {
    transform: scale(1.1);
}

.favorite-text.favorite:hover {
    color: darkred;
}

.favorite-text.unfavorite:hover {
    color: gray;
}
</style>