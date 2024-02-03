import {defineStore} from "pinia"

export const userfromlogin = defineStore('from', ()=>{

const register_form=[
    {
                  Form_Heading: 'Registration',
                  Form_Fields: [
                    { label: 'FirstName', inputfield: 'text', value: '' },
                    { label: 'LastName', inputfield: 'text', value: '' },
                    { label: 'Password', inputfield: 'password', value: '' },
                    { label: 'Email', inputfield: 'email', value: '' },
                    { label: 'PhoneNumber', inputfield: 'tel', value: '' }
                  ],
                  Form_button: 'Register'
                }
]
                const login_form = [
                  {
                      Form_Heading:"Login",
                      Form_Fields : [
                          {label:"Email",inputfield:"email",value:""},
                          {label:"Password",inputfield:"password",value:""}
                      ],
                      Form_button: 'Login'
                  }
              ]

return {register_form, login_form}
})







// // import { defineStore } from "pinia";
// import { defineStore } from "pinia";

// export const useFormStore = defineStore('form', () => {
    

//     const register_form = [
//         {
//           Form_Heading: 'Registration',
//           Form_Fields: [
//             { label: 'FirstName', inputfield: 'text', value: '' },
//             { label: 'LastName', inputfield: 'text', value: '' },
//             { label: 'Password', inputfield: 'password', value: '' },
//             { label: 'Email', inputfield: 'email', value: '' },
//             { label: 'PhoneNumber', inputfield: 'tel', value: '' }
//           ],
//           Form_button: 'Register'
//         }
//       ]


//     const login_form = [
//         {
//             Form_Heading:"Login",
//             Form_Fields : [
//                 {label:"Email",inputfield:"email",value:""},
//                 {label:"Password",inputfield:"password",value:""}
//                 ],
//             Form_button: 'Login'
//         }
//     ]
//     return {register_form, login_form}
// })