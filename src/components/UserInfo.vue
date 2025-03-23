<template>
  <section >
    <base-card>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      <p>{{ infoText }}</p>
  </base-card>
</section>
</template>

<script>
import BaseCard from './BaseCard.vue';
import BaseBadge from './BaseBadge.vue';
export default {
  components:{
    'base-card':BaseCard,
    'base-badge':BaseBadge
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>