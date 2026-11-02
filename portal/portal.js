// Owner portal prototype. Sample data only, no network calls.
document.addEventListener("DOMContentLoaded", function () {
  var btns = document.querySelectorAll(".filter button");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var f = b.getAttribute("data-f");
      document.querySelectorAll(".sensors tbody tr").forEach(function (r) {
        r.hidden = !(f === "all" || r.getAttribute("data-state") === f);
      });
    });
  });
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  var img = lb.querySelector("img"), cap = lb.querySelector("p");
  document.querySelectorAll(".thumbs button").forEach(function (t) {
    t.addEventListener("click", function () {
      img.src = t.getAttribute("data-full"); img.alt = t.getAttribute("data-cap");
      cap.textContent = t.getAttribute("data-cap") + " (sample photo, click to close)";
      lb.hidden = false;
    });
  });
  lb.addEventListener("click", function () { lb.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });
});
