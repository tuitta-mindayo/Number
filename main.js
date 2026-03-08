const container = document.getElementById("InputField");
const form = document.getElementById("CustomForm");
const text = document.getElementById("txt");

container.addEventListener("click", (event) => {
  const target = event.target;
  
  if (target.tagName !== "BUTTON") return;

  const id = target.id;

  if (id.startsWith("ButtonConst")) {
    const num = id.replace("ButtonConst", ""); 
    text.textContent = num;
  } 
  else if (id === "ButtonCustom" && form.value != "")
  {
    text.textContent = form.value;
  }
});
