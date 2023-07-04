<template>
    <div class="wrapper" @mouseleave="!showMenu()">
        <div class="nav-menu">
            <i class="fas fa-bars bar" @click,@mouseenter="showMenu()" @mouseenter="showMenu()">
            </i>
            <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <div class="logo"></div>
                <ul class="nav-items ">
                    <router-link to="/" class="button">
                        <li>Home</li>
                    </router-link>
                    <router-link to="/search" class="button">
                        <li>Search</li>
                    </router-link>
                    <router-link to="/Favorite" class="button">
                        <li>Favorite</li>
                    </router-link>
                    <router-link to="/Aboutus" class="button">
                        <li>About</li>
                    </router-link>
                    <router-link to="/Login" class="button">
                        <li>Login</li>
                    </router-link>
                    <router-link to="/Register" class="button">
                        <li>Register</li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media (max-width: 549px) {
    .nav-menu {
        padding-top: 10px;
        position: fixed;
        width: 100%;
        z-index: 999;
        background-color: var(--dark);
    }
    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.7s ease-out;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        align-items: center;
    }
    .logo {
        position: absolute;
        top: -20px
    }
    .nav-menu:hover .nav-items {
        display: block;
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
            height: 30px;
            background-color: var(--dark);
            box-sizing: border-box;
            padding: 8px;
            text-align: center;
            color: aliceblue;
        }
    }

    i {
        height: 30px;
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
        // border:5px solid rgb(45, 142, 167);
        display: block;
    }
    .open-menu {
        opacity: 1;
        height: 215px;
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

@media (min-width: 550px) {
    .nav-menu {
        display: none;
    }
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
	
	
