<script>
  import { linkWithCredential } from "firebase/auth";

    const moveToHome = () => {
        window.location.hash = '/'
    }
    const moveToMypage = () => {
      window.location.hash = '/my'
    }
</script>
<footer>
    <div class="pages">
      <button class="pages-icons" on:click={moveToHome}>
        <i class="fa-solid fa-house"></i>
        <div class="pages-icons-title">홈</div>
      </button>
      <div class="pages-icons">
        <i class="fa-regular fa-building"></i>
        <div class="pages-icons-title">동네</div>
      </div>

      <div class="pages-icons">
        <i class="fa-regular fa-location-dot"></i>
        <div class="pages-icons-title">내 근처</div>
      </div>
      <div class="pages-icons">
        <i class="fa-regular fa-comments"></i>
        <div class="pages-icons-title">채팅</div>
      </div>
      <button class="pages-icons" on:click={moveToMypage}>
          <i class="fa-regular fa-user"></i>
          <div class="pages-icons-title">나의 당근</div>
      </button>
      
    </div>
    <a href="#/write" class="pages-writebtn">+ 글쓰기</a>
  </footer>
  <style>
    button {
      border: none;
      background-color: #fff;
    }
  </style>