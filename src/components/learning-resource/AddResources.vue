<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
        <p>Unfortunatly, at least one input value is invalid.</p>
        <p>Please check all inputs value</p>
    </template>

    </base-dialog>
    <base-card>
    <form @submit.prevent="summitData">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" ref="en_title" >
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" name="description" ref="en_desc"/>
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <input type="url" id="link" name="link" ref="en_link">
        </div>
        <div>
            <base-button type="submit" >Add Resource</base-button>
        </div>
        
    </form>
    </base-card>
</template>

<script>
export default{
    inject:['addResource'],
    data(){
        return {
            inputIsInvalid:false
        }
    },
    methods:{    
        summitData(){
            const enteredTitle = this.$refs.en_title.value;
            const enteredDesc = this.$refs.en_desc.value;
            const enteredLink = this.$refs.en_link.value;
            if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === ''){
                this.inputIsInvalid = true;
                return;
            }
            
            this.addResource(enteredTitle,enteredDesc,enteredLink)
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }   
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>