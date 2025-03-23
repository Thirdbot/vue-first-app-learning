<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>please input data in form</h2>
            <button @click="confirmError">Okay...</button>
        </error-alert>
    </div>

</template>

<script>
import errorAlert from './errorAlert.vue';
export default{
    data(){
        return{
            inputIsInvalid:false
        }
    },
    components:{
        'error-alert':errorAlert
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true   ;       
            }
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>