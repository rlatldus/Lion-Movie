<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{ item.name }}
            <button @click="toggleFavorite(item)">
                {{ isFavorite(item) ? '찜 해제' : '찜하기' }}
            </button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, watchEffect } from 'vue';

export default {
    setup() {
        const store = useStore();
        const items = ref([
            // 여러 개의 아이템 데이터가 들어있는 배열
            { id: 1, name: '아이템 1' },
            { id: 2, name: '아이템 2' },
            { id: 3, name: '아이템 3' }
        ]);

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
