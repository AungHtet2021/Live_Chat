import { ref } from "vue";
import {auth} from '../firebase/config'
let error=ref(null);

let useSignin=async(email,password)=>{
    try{
        let resp=await auth.signInWithEmailAndPassword(email,password);
        if(!resp){
            throw new Error ("can't login user ")
        }
        return resp;
       }catch(err){
            error.value=err.message;
       }
}
let useLogin=()=>{
    return {error,useSignin};
}

export default useLogin;