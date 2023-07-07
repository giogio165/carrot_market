<script>
import Footer from "../components/Footer.svelte";
import { user$ } from "../store";
  
const logout = () => {
    user$.set(null);
    localStorage.removeItem("token");
    }
</script>
 
<div>나의 당근</div>
<button on:click={logout}>Logout</button>
<Footer/>