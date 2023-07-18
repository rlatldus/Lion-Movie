<script setup>
import { useSlots, ref, provide } from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">

        <ul class="tabs__header">

            <li v-for="title in tabTitles" :key="title" class="tabs__item" :class="{ selected: selectedTitle === title }"
                @click="selectedTitle = title">
                {{ title }}
            </li>

        </ul>
        <div class="modal_Content">
            <slot />
        </div>
    </div>
</template>

<style>
.tabs {
    text-align: center;
    position: absolute;
    max-width: 50vw;
    margin: 0 auto;
    height: 95%;

}

.tabs__header {
    align-items: center;
    font-size: 80%;
    font-weight: 700;
    color: #fbf5f5;
    text-align: center;
    position: absolute;
    top: 5px;
    width: 100%;
    list-style: none;
    padding: 10px;


}

.tabs__header li:hover {
    background-color: rgb(108, 225, 225);

}

.tabs__item:hover {
    scale: 103%;

}

.tabs__item {

    flex: 1;
    margin-bottom: 3px;
    background-color: cadetblue;
    padding: 5px 0;
    transition: .4s all ease-out;
    cursor: pointer;
    user-select: none;
    height: 25px;


}

.tabs__item.selected {


    background-color: #2d82dd;
    color: #fbf5f5
}

.tabs__content {
    text-align: justify;
    line-height: 1.8em;
    overflow-y: scroll;
    margin-top: 130px;
    background-color: #bfbfbf;
    height: 61%;
    border-radius: 5px;


}

.modal_Content {

    padding: 10px;
    height: 100%;
    font-size: 85%;
}

@media (max-width:549px) {
    .tabs__item {
        width: 137%;
    }

    .tabs__content {
        width: 137%;
    }
}

/* .tabs__header {

    font-size: 74%;

} */
</style>