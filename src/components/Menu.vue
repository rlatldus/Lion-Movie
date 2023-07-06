
<template>
    <div class="nav-menu">           

        <div class="nav-content" >
            <img :src="logoURL" alt="MainLogo" class="logo_img" @mouseenter="showMenu()" @mouseleave="!showMenu()" />

            <ul class="nav-items" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'" @mouseenter="showMenu()" @mouseleave="!showMenu()" >
                <router-link to="/" class="button" ><li class="text">Home</li></router-link>
                <router-link to="/search" class="button"><li class="text">Search</li></router-link>
                <router-link to="/Favorite" class="button"><li class="text">Favorite</li></router-link>
                <router-link to="/Aboutus" class="button"><li class="text">About</li></router-link>
                <router-link to="/Login" class="button"><li class="text">Login</li></router-link>
                <router-link to="/Register" class="button"><li class="text">Register</li></router-link>
            </ul>
        </div>
    </div>
    </template>

<script setup>
import logoURL from '../assets/logo.png';
import { mapGetters } from 'vuex';
import { ref } from 'vue';

</script>
<style lang="scss" scoped>


@media  (max-width: 549px) {

*{text-decoration: none;}
    .nav-menu {  
padding-top: 20px;
position: fixed;
width: 100%;
z-index: 999;
background-color: var(--dark);
&:hover .nav-items{
    transition: all 0.3s ease-out;
    display: block;

    .button{
        background-color: var(--primary);
    }
}


}
.nav-content {flex-direction: column;
z-index: 100;
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px 30px;
align-items: center;


}


.logo_img{
    z-index: 99999;
    position: absolute;
    top:-21px;
    height: 42px;
    width: 42px;


}


.nav-items {
height: 195px;
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0;
padding: 0;
width: 110%;


li {    
    background-color: rgb(73, 134, 134);
margin-bottom: 5px;
height: 30px;
box-sizing: border-box;
padding: 8px;
text-align: center;
color: aliceblue;
    
}

}
li:hover{
        color: var(--primary);
        background-color: cadetblue;
        scale: 120%;

}
    
.open-menu {
    
opacity: 1;
height: 205px;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
}

.nav-items {
    
display: none;
flex-direction: column;
}

}
@media (min-width: 550px){
    .nav-menu{display: none;} 
}
</style>

<script>
export default {
data() {
    return {
        showMobileMenu: false,
    };
},
methods: {
showMenu() {
        this.showMobileMenu = !this.showMobileMenu;
    },

    },
};
</script>
	
	
