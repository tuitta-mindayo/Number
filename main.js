const container = document.getElementById("InputField");
const form = document.getElementById("CustomForm");
const text = document.getElementById("txt");

container.addEventListener("click", (event) => {
  if (target.tagName !== "BUTTON") return;

  const id = target.id;
  const num = id.replace("ButtonConst", ""); 

  if (id.startsWith("ButtonConst")) {
    text.textContent = num;
  } 
  // 2. 残り1つの特殊なボタンの判定
  else if (id === "ButtonCustom" && form.value != "")
  {
    text.textContent = form.value;
  }
});
