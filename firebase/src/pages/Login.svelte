<script>
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginWithGoogle = async() => {
    try{
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        user$.set(user)
        //store.js에 user에 우리가 받은 user값을 넣어줘
        localStorage.setItem('token',token)
     }catch(error){
        console.error(error)
    }
    
}


</script>
{#if $user$ }
<div>{$user$?.displayName}로그인 됨</div>
{/if}
<div class="login">
    <div>로그인하기</div>
        <button class="login_button" on:click={loginWithGoogle}>
            <img class="btn_img" alt="btn_img" 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png"/>
            Google로 시작하기</button>
   
</div>

<style>
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .login_button{
        width: 200px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        border-radius: 3px;
        border: 1px solid gray;
        color: black;
        padding: 10px;
        cursor: pointer;
    }
    .btn_img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
   
</style>