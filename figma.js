// DNR Redirect Execution POC
(function () {
  try {
    // Console confirmation
    console.log("[POC] Redirected script executed successfully");

    // Alert for immediate visibility
    alert("POC: Redirected script executed");

    // Visual banner on page
    const banner = document.createElement("div");
    banner.innerText = "POC: DNR Redirect Script Running";
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.background = "#111";
    banner.style.color = "#fff";
    banner.style.padding = "12px";
    banner.style.fontSize = "16px";
    banner.style.textAlign = "center";
    banner.style.zIndex = "999999";

    document.documentElement.appendChild(banner);

  } catch (err) {
    console.error("[POC] Execution error:", err);
  }
})();
