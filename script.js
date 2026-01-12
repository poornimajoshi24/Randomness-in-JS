var btn = document.querySelector("button");
var main = document.querySelector("main");

var arr=['be happy',' love yourself',
  ' stay positive',' work hard',
  ' make a difference',' believe in yourself',
  ' never give up',' stay focused',
  ' embrace challenges',' be kind to others',
  ' keep learning',' stay curious',
  ' take risks',' be grateful',
  ' stay humble',' be patient',
  ' enjoy the journey',' live in the moment'
]
btn.addEventListener("click", function () {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");

  var a = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[a];

  /* ===== h1 STYLING ===== */
  h1.style.fontSize = "1.4rem";
  h1.style.fontFamily = "Arial, sans-serif";
  h1.style.color = "white";
  h1.style.textAlign = "center";
  h1.style.padding = "0.5rem";
  h1.style.pointerEvents = "none"; // optional

  /* ===== div STYLING ===== */
  var x = Math.random() * 80;
  var y = Math.random() * 80;

  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);
  var degree = Math.floor(Math.random() * 360);

  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.height = "120px";
  div.style.width = "120px";
  div.style.position = "absolute";
  div.style.left = y + "%";
  div.style.top = x + "%";
  div.style.transform = `rotate(${degree}deg)`;

  /* 🔥 CENTER TEXT INSIDE DIV */
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  div.appendChild(h1);
  main.appendChild(div);
});

