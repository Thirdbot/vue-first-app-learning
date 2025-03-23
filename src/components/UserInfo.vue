<template>
  <base-card>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components:{
    'base-card':BaseCard
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>