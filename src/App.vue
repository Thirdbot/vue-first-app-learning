
<template>
  <div>
    <the-header></the-header>

    <button @click="setSeletedComponent('active-goals')">Active Goals</button>
    <button @click="setSeletedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="seleted_components"></component>
    </keep-alive>

    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals :goals="activeUser.goals">
      <template #default="slotProps">
        <p>{{ slotProps.item }}</p>
      </template>
    </course-goals>
  </div>
</template>


<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components:{
    'the-header': TheHeader,
    'badge-list':BadgeList,
    'course-goals':CourseGoals,
    'manage-goals':ManageGoals,
    'active-goals':ActiveGoals
  },
  data() {
    return {
      seleted_components:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
        goals:['control everything','being good']
      },
    };
  },
  methods:{
    setSeletedComponent(selected){
      this.seleted_components = selected;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>