<script>
import "./css/main.css"

import Main from "./pages/Main.svelte";
import Notfound from "./pages/Notfound.svelte";
import Signup from "./pages/Signup.svelte";
import Write from "./pages/Write.svelte";

import Router from 'svelte-spa-router'

import Login from "./pages/Login.svelte";
import { user$ } from "./store";
import {GoogleAuthProvider,getAuth,signInWithCredential} from "firebase/auth"
import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";
  import Mypage from "./pages/Mypage.svelte";

let isLoading = true;
 
const checkLogin = async() => {
  const auth = getAuth();
  const token = localStorage.getItem("token");
  if(!token) return (isLoading = false)
  const credential = GoogleAuthProvider.credential(null, token);
  const result = await signInWithCredential(auth, credential)
  const user = result.user;
  user$.set(user);
  isLoading = false
}

const routes = {
  '/':Main,
  // '/login':Login,
  '/signup':Signup,
  '/write':Write,
  '/my':Mypage,
  '*':Notfound
}

onMount(()=> checkLogin())
</script>
{#if isLoading}
<Loading/>
{:else if !$user$}
<Login/>
{:else}
<Router routes={routes}/>
{/if}
<!-- 유저 정보가 없을 때는 로그인 보여주고 있을 때는 원래 화면을 보여주세요~ -->

