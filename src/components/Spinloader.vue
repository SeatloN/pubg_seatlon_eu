<template>
  <div>
    <div class="text-xs-center">
      <v-progress-circular :size="150" :width="10" color="black" indeterminate>Loading...</v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinloader',
};
</script>

<style>
</style>
