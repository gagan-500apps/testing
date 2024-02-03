import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
    const state = {
        email: '',
        password: '',
        registeredUser_data: [],
        loggedInUser: null
    }

    const setEmail = (value) => {
        state.email = value
    }

    const setPassword = (value) => {
        state.password = value
    }

    const checkLogin = () => {
        state.loggedInUser = state.registeredUser_data.find(user => user.Email === state.email && user.Password === state.password);
        return state.loggedInUser;
    }

    const clearCredentials = () => {
        state.email = ''
        state.password = ''
    }

    const storeUser=(userdata)=>{
        state.registeredUser_data.push(userdata);
        //storeing the data in local storage
        localStorage.setItem('registeredUser_data', JSON.stringify(state.registeredUser_data));
        console.log('hello');
    }


    
    

    return { 
        email: state.email,
        password: state.password,
        setEmail,
        setPassword,
        clearCredentials,
        storeUser,
        checkLogin,
        registeredUser_data: state.registeredUser_data  
    }
})