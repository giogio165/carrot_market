<script>
  import Footer from "../components/Footer.svelte";

</script>
<form action="/signup" method="POST">
    <div>
      <label for="id">아이디</label>
      <input type="text" id="id" name="id" />
    </div>
    <div>
      <label for="password">패스워드</label>
      <input type="password" id="password" name="password" />
    </div>
    <div><button type="submit">회원 가입</button></div>
  </form>
  <Footer/>