document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

function sendMsg() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="msg user">${text}</div>`;

  const t = text.toLowerCase();

  let reply = "";

  if (
    t.includes("policie") ||
    t.includes("zákon") ||
    t.includes("nábor") ||
    t.includes("řidič") ||
    t.includes("kriminal") ||
    t.includes("zbraň")
  ) {
    reply = "Ano, mohu vám poskytnout informace ohledně Policie ČR. Upřesněte prosím dotaz.";
  } else {
    reply = "Omlouvám se, s tímto dotazem vám nemohu pomoci. Mohu odpovídat pouze na otázky týkající se Policie České republiky.";
  }

  setTimeout(()=>{
    chat.innerHTML += `<div class="msg bot">${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 400);

  input.value = "";
}
