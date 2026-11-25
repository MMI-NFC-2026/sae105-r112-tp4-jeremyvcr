const accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", (event) => {
  let summary = event.target;
  if (summary.tagName === "IMG") {
    summary = summary.parentElement;
  }

  if (summary.tagName === "SUMMARY") {
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== summary.parentElement) {
        det.open = false;
      }
    });
  }
});
