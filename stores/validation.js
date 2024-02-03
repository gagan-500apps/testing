import { defineStore } from "pinia";

export const validation=defineStore('form',()=>{
    const registeredUser_data=[]
    const loginUser_data=[]
    // const boolean=null
    
    const regsisterstoredata=(userdata)=>{
        registeredUser_data.push(userdata)
        localStorage.setItem('registeredUser_data', JSON.stringify(registeredUser_data))
        console.log("register done");
    }

    const loginstoredata=(userdata)=>{
        loginUser_data.push(userdata)
        // console.log("done",loginUser_data);
                console.log('registeredUser_data',registeredUser_data);
                console.log('loginUser_data',loginUser_data);
            console.log('loginUser_data.Email',loginUser_data[0].Email);
            console.log('loginUser_data.Password',loginUser_data[0].Password);
            console.log("login Done");
    }

    const check=()=>{
        const boolean=registeredUser_data.find(n => n['Email']==loginUser_data[0].Email && n['Password']==loginUser_data[0].Password)
        console.log("checking done");
        return boolean
    }



    return {regsisterstoredata, loginstoredata, check}
}) 