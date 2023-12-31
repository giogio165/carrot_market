const form = document.getElementById("write_form");
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }
};
form.addEventListener("submit", handleSubmit);
