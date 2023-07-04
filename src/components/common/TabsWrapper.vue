<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">

        <ul class="tabs__header">

            <li 
                v-for="title in tabTitles" 
                :key="title"
                class="tabs__item"
                :class="{ selected: selectedTitle === title}"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>

        </ul>

        <slot />
    </div>
</template>

<style>
.tabs {    
    position: absolute;
    max-width: 60vw;
    margin: 0 auto;
    height: 95%;
}

.tabs__header {
    font-size: 90%;
    font-weight: 700;
    text-align: center;
    position: absolute;
    left:-11px;
    top:10px;
    width: 100.5%;
    list-style: none;
    padding: 0;
    margin: 0;
    /* display: flex; */
    /* justify-content: space-between; */
    /* gap: 5px; */
    
}

.tabs__header li:hover{
    background-color: rgb(108, 225, 225);
    
}
.tabs__item:hover{
scale :103%;
}
.tabs__item {
    flex: 1;
    background-color: #eee;
    padding: 5px 0;
    border-radius: 12px;
    transition: .4s all ease-out;
    cursor: pointer;
    user-select: none;
    
   
}

.tabs__item.selected {
    
    background-color: #2d82dd;
    color:#fbf5f5
}

.tabs__content {
    
    line-height: 1.8em;
    overflow-y:scroll;
    margin-top: 140px;
    background-color: #bfbfbf;
    height: 61%;    
    display: grid;
    place-items: center;
    border-radius: 5px;
    padding: 10px;
    
    
}
@media (min-width: 550px) and (max-width: 1023px){
    .tabs__header {
        width: 100%;
        left:-11.3px;

    }
}
</style>