<template>
    <base-card>
    <base-button @click="setSelectedTab('StoredResource')" :mode='computedStoreMode' >Stored Resources</base-button>
    <base-button @click="setSelectedTab('AddResources')" :mode="computedAddMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="seletedTab"></component>
    </keep-alive>
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
            resources:this.storedResources,
            addResource:this.AddResource,
            deleteResource:this.removeResource
        };
    },
    computed:{
        computedStoreMode(){
            return this.seletedTab === 'StoredResource' ? null:'flat'
        },
        computedAddMode(){
            return this.seletedTab === 'AddResources' ? null:'flat'
        }
    },
    methods:{
        setSelectedTab(tab){
            this.seletedTab = tab;
        },
        AddResource(title,desc,url){
            const newResource = {
                id:new Date().toISOString(),
                title:title,
                description:desc,
                link:url
            }
            this.storedResources.unshift(newResource);
            this.seletedTab = 'StoredResource';
        },
        removeResource(resId){
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>