console.log("🔥 Injected script running");

// Log cookies
console.log("Cookies:", document.cookie);

// Visual proof
const div = document.createElement("div");
div.innerText = "Injected JS Executed";
div.style.position = "fixed";
div.style.bottom = "10px";
div.style.right = "10px";
div.style.background = "black";
div.style.color = "white";
div.style.padding = "8px";
div.style.zIndex = "9999";
document.body.appendChild(div);
