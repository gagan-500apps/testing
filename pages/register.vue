<template>
   <FormComponent 
   :head="reg.Form_Heading"
   :fields="reg.Form_Fields"
   :button="reg.Form_button"
   @form-submit="register"
   />
</template>

<script setup>
import FormComponent from '~/components/FormComponent.vue';
import {userfromlogin} from '../stores/forms'

import {validation} from '../stores/validation'

const a=userfromlogin()
const reg=a.register_form[0]
// console.log('REG',reg);

const callValidation = validation();
// console.log("callValidation",callValidation);

const register=(formData)=>{
    // console.log('formdata',formData);

    const userData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      Password: formData.Password,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber
    }
    callValidation.regsisterstoredata(userData);


}

</script>









<!-- 
import FormComponent from '~/components/FormComponent.vue';
<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="register"
    />
</template>

<script setup>
import {useFormStore} from '~/stores/forms';
import { useLoginStore } from '~/stores/login';

const formstore = useFormStore()
const form=formstore.register_form[0];

const loginStore = useLoginStore();

const register=(formData)=>{
    const userData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      Password: formData.Password,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber
    };

    console.log('Registering the data', userData);
    loginStore.storeUser(userData);
}

</script> -->


