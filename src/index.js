function clearContainer() {
  let cont = document.querySelectorAll("#container");
  let els = cont.childNodes;
  els.map(el => {
    return el.parentNode.removeChild(el);
  });
}
