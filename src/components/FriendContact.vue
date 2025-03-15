<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetail">Show Details</button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data(){
        return {
            detailAreVisible:false,
            friend:{
                id:'manuel',
                name:'Manuel Lorenz',
                phone:'01234567890',
                email:'manuel@localhost.com'
            },
        };
    },
    methods:{
        toggleDetail(){
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
};
</script>