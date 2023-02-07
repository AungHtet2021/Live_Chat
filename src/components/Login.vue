
<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button >login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composables/useLogin"
export default{
    setup(props,context){

        let email=ref("");
        let password=ref("");
     

        let {error,useSignin}=useLogin();
        let login=async()=>{
         let resp=await useSignin(email.value,password.value);
         if(resp){
            context.emit('enterChatroom');
         }   
        }
        return {email,password,login,error}
    }
}
</script>

<style >

</style>