/* XXFHen landing page. This file never imports or runs an exploit. */
(function () {
  "use strict";
  var ua = navigator.userAgent || "";
  var match = ua.match(/PlayStation\s+4[\/ ](\d+)\.(\d+)/);
  var firmware = match ? match[1] + "." + match[2] : null;
  var supported = firmware === "14.00";
  var form = document.getElementById("launch-form");
  var startButton = document.getElementById("start");
  var startLabel = document.getElementById("start-label");
  var hint = document.getElementById("hint");
  var status = document.getElementById("console-status");
  function picked() { return form.querySelector('input[name="build"]:checked').value; }
  function refreshSelection() {
    var personal = picked() === "personal";
    document.getElementById("personal-choice").className = "build" + (personal ? " selected" : "");
    document.getElementById("reference-choice").className = "build" + (!personal ? " selected" : "");
    startLabel.textContent = personal ? "Start XXFHen" : "Start reference HEN";
    startButton.disabled = !supported;
    if (supported) hint.textContent = personal ? "Press × to begin. Keep this page open while it loads." : "Loads the original host's bundled HEN, using an internet connection.";
  }
  if (supported) {
    status.textContent = "PS4 14.00 detected · ready";
  } else {
    document.getElementById("console-dot").className = "dot inactive";
    status.textContent = firmware ? "PS4 " + firmware + " detected · 14.00 required" : "Waiting for your PS4";
    hint.textContent = firmware ? "This host is configured for firmware 14.00." : "Open this address in your PS4 browser on firmware 14.00.";
  }
  form.addEventListener("change", refreshSelection, false);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!supported) return;
    if (navigator.onLine === false) {
      hint.textContent = "Connect your PS4 to the internet, then reload this host.";
      return;
    }
    try { sessionStorage.setItem("xxfhen.activation", String(Date.now())); }
    catch (error) { hint.textContent = "Browser storage is unavailable. Reopen the browser and try again."; return; }
    startButton.disabled = true;
    startLabel.textContent = "Opening loader…";
    location.href = picked() === "personal"
      ? "jb.html?log=1&afterglow=run&mode=goldhen&payload=xxfhen.bin%3Fv%3Dbundled-1"
      : "sentrix/jb.html?log=1&mem=1&slots=9100000&drain=12&hx1400=1&kv=1&fam=0&telemetry=0&stage3=1&stage4=1&stage5=1&stage6=1&stage7=1&stage8=1&stage9=1&stage10=1&goldhen=1&v=xxfhen-1";
  }, false);
  document.getElementById("reload").addEventListener("click", function (event) { event.preventDefault(); location.reload(); }, false);
  refreshSelection();
  if (supported) startButton.focus();
})();
