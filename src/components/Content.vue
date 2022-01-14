<template>
  <div class="content">
    <v-container fluid class="mt-15 px-3 px-md-7 grey lighten-3">
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </transition>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}
</style>
