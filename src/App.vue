<template>
    <the-header title="RememberMe"></the-header>
    <stored-resource :resources="storedResources"></stored-resource>
    
</template>

<script>
import StoredResource from './components/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default{
    components:{
        'StoredResource':StoredResource,
        'TheHeader':TheHeader
    },   
    data(){
        return{
            storedResources:[
                {
                    id:'official-guide',
                    title:'Official Guide',
                    description:'The official Vue.js documentation.',
                    link:'https://vuejs.org'
                },
                {
                    id:'google',
                    title:'Google',
                    description:'Learn to google...',
                    link:'https://google.org'
                },
                
            ]
        };
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}
body{
    margin: 0;
}
</style>