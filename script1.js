const form = document.querySelector("form");
const fileInput = document.querySelector(".file-input");
const imagePreview = document.getElementById("imagePreview");
const pdfPreview = document.getElementById("pdfPreview");

fileInput.onchange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileName = file.name.toLowerCase();

    // Check if the selected file is an image
    if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png")) {
      imagePreview.style.display = "block";
      pdfPreview.style.display = "none";

      // Display the selected image in the image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else if (fileName.endsWith(".pdf")) {
      imagePreview.style.display = "none";
      pdfPreview.style.display = "block";

      // Display the selected PDF in the PDF preview
      pdfPreview.src = URL.createObjectURL(file);
    } else {
      alert("Unsupported file type. Please select an image (JPEG, JPG, PNG) or a PDF.");
    }
  }
};

form.addEventListener("click", () => {
  fileInput.click();
});
