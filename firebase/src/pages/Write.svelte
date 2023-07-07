<script>
  import { getDatabase, ref, set, push} from "firebase/database";
  import { getStorage, ref as refImage, uploadBytes,getDownloadURL } from "firebase/storage";
  import Footer from "../components/Footer.svelte";

//database
    let title = "";
    let price = "";
    let description = "";
    let place = "";
    let files;
  
    async function writeUserData(imageUrl) {
      const db = getDatabase();
      push(ref(db, "items/"),{
        title,
        price,
        description,
        place,
        imageUrl,
      });
      window.location.hash="/";
    }

//여기서부터 storage
const storage = getStorage();
const storageRef = refImage(storage, '/images');



const uploadFile = async () => {
  const file = files[0]; 
  const name = file.name
  const imageRef = refImage(storage, name)
  const res  = await uploadBytes(imageRef,file)
  const url = await getDownloadURL(imageRef)
  return url
}

const handleSubmit = async() => {
  const url = await uploadFile();
  writeUserData(url);

}
  </script>


  <form id="write_form" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="title">이미지</label>
      <input type="file" id="image" name="image" bind:files/>
    </div>
    <div>
      <label for="title">제목</label>
      <input type="text" id="title" name="title" bind:value={title}/>
    </div>
    <div>
      <label for="price">가격</label>
      <input type="number" id="price" name="price" bind:value={price}/>
    </div>
    <div>
      <label for="description">설명</label>
      <input type="text" id="description" name="description" bind:value={description} />
    </div>
    <div>
      <label for="place">장소</label>
      <input type="text" id="place" name="place" bind:value={place}/>
    </div>
    <button class="write_button" type="submit">글쓰기 완료</button>
  </form>
  <Footer/>
<style>
    .write_button {
        background-color: tomato;
        margin: 10px;
        border-radius: 10px;
        padding: 5px 12px 5px 12px;
        color: white;
        cursor: pointer;
    }
</style>  