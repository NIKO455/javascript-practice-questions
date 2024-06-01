const submitForm = document.getElementById("submitData");
let imageURL = document.getElementById("imageURL");
let alertMsg = document.getElementById("alert-msg");
submitForm.addEventListener("submit", (e) => {
  let imageHeight = document.getElementById("imageHeight").value;
  let imageWidth = document.getElementById("imageWidth").value;
  let textContent = document.getElementById("textContent").value;
  let backgroundColor = document.getElementById("backgroundColor").value;
  let textColor = document.getElementById("textColor").value;
  let replaceImage = document.getElementById("replace-image");
  let imageURL = document.getElementById("imageURL");

  e.preventDefault();
  let url = "https://placehold.co";
  //   600x400/000000/FFF?text=Hello+World

  // Add image size to url
  if (imageHeight.length > 0 && imageWidth.length > 0) {
    url += `/${imageHeight}x${imageWidth}`;
  } else {
    url += `/600x600`;
  }

  // Adding backgroundColor to url
  url += `/${backgroundColor.replace("#", "")}`;

  // Adding textColor to url
  url += `/${textColor.replace("#", "")}`;

  // Adding textContent to url
  if (textContent.length > 0) {
    url += `?text=${textContent.split(" ").join("+")}`;
  }

  // Adding image to default image
  replaceImage.src = url;

  // Adding URL to input
  imageURL.style.display = "block";
  imageURL.value = url;
});

imageURL.addEventListener("click", () => {
  window.navigator.clipboard.writeText(imageURL.value);
  alertMsg.style.display = "block";

  setTimeout(() => {
    alertMsg.style.display = "none";
  }, 2000);
});
