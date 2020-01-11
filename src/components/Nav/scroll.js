// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const header = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.fontSize = "20px";
    header.style.backgroundColor = "#94baecdd";
  } else {
    header.style.fontSize = "30px";
    header.style.backgroundColor = "#94baecff";
  }
}
