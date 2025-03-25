<template>
    <base-card>
    <base-button @click="setSelectedTab('StoredResource')" :mode='computedStoreMode' >Stored Resources</base-button>
    <base-button @click="setSelectedTab('AddResources')" :mode="computedAddMode">Add Resource</base-button>
    </base-card>
    <!-- <add-resources></add-resources> -->
    <component :is="seletedTab"></component>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResources from './AddResources.vue';
export default{
    components:{
        StoredResource,
        AddResources
    },
    data(){
        return{
            //default
            seletedTab:'StoredResource',
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
        }
    },
    provide(){
        return{
            resources:this.storedResources
        };
    },
    computed:{
        computedStoreMode(){
            return this.seletedTab === 'stored-resources' ? null:'flat'
        },computedAddMode(){
            return this.seletedTab === 'add-resources' ? null:'flat'
        }
    }
    ,
    methods:{
        setSelectedTab(tab){
            this.seletedTab = tab;
        }
    }
}
</script>