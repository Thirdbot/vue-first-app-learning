<template>
        <form @submit.prevent="SubmitData">
            <div>
                <label for="name">name:</label>
                <input type="text" v-model="enteredName
                "><br>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" v-model="enteredEmail
                "><br>
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="text" v-model="enteredPhone
                "><br>
            </div>
            
            <button>Add Contact</button>

        </form>
</template>

<script>
export default {
    emits:['add-contact'],
    data(){
        return {
            enteredName:'',
            enteredPhone:'',
            enteredEmail:''
        }
    },
    methods:{
        SubmitData(){
            this.$emit('add-contact',
                this.enteredName,this.enteredEmail,this.enteredPhone
            )
        }
    }
}
</script>
