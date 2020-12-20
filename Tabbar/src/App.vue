<template>
  <div id="app">
    <router-view></router-view>
    <!-- <TabBar></TabBar>
    <tab-bar></tab-bar> -->
    <!-- <main-tab-bar/> -->
    <!-- <MainTabBar></MainTabBar> -->
    <main-tab-bar>
      
    </main-tab-bar>
  </div>
</template>
<script>
    import MainTabBar from './components/MainTabBar'
    export default {
        name: 'App',
        components: {
            MainTabBar
        }
    }
</script>

<style>

</style>