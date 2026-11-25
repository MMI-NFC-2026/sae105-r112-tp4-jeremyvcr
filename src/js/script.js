// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

// CM 4 : un seul écouteur sur le parent commun.
accordeon.addEventListener("click", (event) => {
  let summary = event.target;
  // Adaptation au HTML du TP : l'image est un enfant direct du summary.
  if (summary.tagName === "IMG") {
    summary = summary.parentElement;
  }

  if (summary.tagName === "SUMMARY") {
    accordeon.querySelectorAll("details").forEach((det) => {
      // Fermer les autres, puis laisser le navigateur basculer celui qui est cliqué.
      if (det !== summary.parentElement) {
        det.open = false;
      }
    });
  }
});
