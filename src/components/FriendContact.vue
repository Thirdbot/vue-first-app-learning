<template>
    <li>
        <h2>{{ name }}{{ IsFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleDetail">{{ detailAreVisible ? 'Hide':'Show' }}</button>
        <button @click="toggleFavorite">Is Favorite</button>
        <button @click="delFriend">Delete</button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong>{{phoneNumber}}</li>
            <li><strong>Email:</strong>{{emailAddress}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props:{
        id:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        phoneNumber:{
            type:String,
            require:true
        },
        emailAddress:{
            type:String,
            require:true
        },
        IsFavorite:{
            type:Boolean,
            require:false,
            default:false
            }
        },
    emits:{'toggle-favorite':function(id){
        if(id){
            return true;
        }
        else{
            console.warn('id')
            return false;
        }
    }},
    data(){
        return {
            detailAreVisible:false,
        };
    },
    methods:{
        toggleDetail(){
            this.detailAreVisible = !this.detailAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite',this.id)          
        },
        delFriend(){
            this.$emit('delete-friend',this.id);
        }
    }
};
</script>