<template>
    <div class="conteiner">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Company</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link to="/dashboard" class="nav-link">Home</router-link>
                    <router-link to="/ordenes" class="nav-link">Ordenes</router-link>
                    <b-nav-item href="#">Inventario</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Profile</b-nav-item>
                    <b-nav-item href="#" @click="salir">Log Out</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        salir(){
            localStorage.removeItem('userToken');
            this.$store.state.tokenLogin = "";
            this.$store.state.datosEnStore = false;
            this.$router.replace('/');
        }
    },
}
</script>

<style lang="scss">

</style>