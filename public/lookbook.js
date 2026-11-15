const detail = document.querySelector("#dress-detail");

if (typeof detail.showModal === "function") {
  const detailImage = detail.querySelector(".detail-image");
  const detailTitle = detail.querySelector("#detail-title");
  const detailMaterial = detail.querySelector(".detail-material");
  const detailDescription = detail.querySelector(".detail-description");

  for (const dress of document.querySelectorAll(".dress")) {
    const button = dress.querySelector(".dress-open");
    const photo = dress.querySelector(".dress-photo");

    button.hidden = false;
    button.addEventListener("click", () => {
      detailImage.src = photo.src;
      detailImage.alt = photo.alt;
      detailTitle.textContent = dress.querySelector("h3").textContent;
      detailMaterial.textContent = dress.querySelector(".dress-caption p").textContent;
      detailDescription.textContent = dress.querySelector(".dress-notes").textContent;
      detail.showModal();
    });
  }
}
