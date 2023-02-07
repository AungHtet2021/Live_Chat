import { ref } from "vue";
import {auth } from '../firebase/config'

let error=ref(null);
let createAccount=async(email,password,displayName)=>{
    try{
        let resp= await auth.createUserWithEmailAndPassword(email,password);
        if(!resp){
            throw new Error("could not create new user")    
        }
        resp.user.updateProfile({displayName});
       return resp;
       }catch(err){
            error.value=err.message;
      
       }
}

let useSignup=()=>{
    return {error,createAccount}
}

export default useSignup;