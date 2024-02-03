<template>
    <h1>{{ head }}</h1>
    <div v-for="(filed,index) in fields" :key=index>
    <label>{{ filed.label }}</label>
    <input type="filed.inputfield" v-model="filed.value" />
    </div>
    <button @click="handelsubmit">{{ button }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const probs= defineProps({
    head: String,
    fields: Array,
    button: String,
})


const emits = defineEmits(['form-submit'])
const handelsubmit = ()=>{
    const fromdata={}
    probs.fields.forEach(n=>{
        fromdata[n.label]=n.value
        n.value=''
    })
    emits("form-submit", fromdata)
}


</script>

<!-- <template>
    <div>
      <p>{{ heading }}</p>
      
      <div v-for="(field, index) in fields" :key="index">
        <label>{{ field.label }}</label>
        <input :type="field.inputfield" v-model="field.value"/>
      </div>
  
      <button @click="handleSubmit">{{ button }}</button>
    </div>
</template>  -->


<!-- <script setup>
 import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    heading: String,
    fields: Array,
    button: String,
  })

  const emits = defineEmits(['form-submit'])
  
  const handleSubmit = () => {
    const formData = {}
    props.fields.forEach(field => {
       
      formData[field.label] = field.value   //here field.label are email,password   and field.vlaue are the values of email and password
      
       field.value = '' // reset value of the field after submiting.
    })
    emits("form-submit", formData)
  }

</script> -->