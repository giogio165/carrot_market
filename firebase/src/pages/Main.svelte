<script>
  import {onMount} from "svelte"
  import { each } from "svelte/internal";
  import Footer from "../components/Footer.svelte";
  import {getDatabase, ref, onValue} from "firebase/database"

  $: items = []

  const calcTime = (timestamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    
    if (hour > 0 ) return `${hour}시간 전`;
    else if (minute > 0 ) return `${minute} 분 전`;
    else if (second > 0) return `${second}초 전`;
    else return "방금 전"
  }

  const db = getDatabase()
  const itemsRef = ref(db, "items/");
  onMount(()=> {
    onValue(itemsRef, (snapshot)=>{
    const data = snapshot.val();
    items = Object.values(data).reverse();
  });
  });
  
</script>

<header>
    <div class="info-bar">
      <div class="info-bar__time">20:55</div>
      <div class="info-bar__network">
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-battery-full"></i>
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-bar__adress">
        역삼1동<i class="fa-solid fa-caret-down"></i>
      </div>

      <div class="menu-bar__icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-bell"></i>
      </div>
      <div class="alarm"></div>
    </div>
  </header>

  <main>
    {#each items as item}
    <div class="items">
      <div class="items-img">
      <img alt="lv_img" src={item.imageUrl}/>
    </div>
    <div class="items-info">  
       <div class="items-info__title">{item.title}</div>
        <div class="items-info__time">{item.place} {calcTime(item.insertAt)}</div>
      <div class="items-info__price" >{item.price}</div>
      <div>{item.description}</div>
    </div>
    </div>
    
    {/each}
    
    
  </main>
  <Footer/>
  <div class="media-info-msg">화면을 줄여주세요</div>

  <style>
    @import '@fortawesome/fontawesome-free/css/all.css';
  </style>