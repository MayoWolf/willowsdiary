const detail = document.querySelector("#dress-detail");
const dresses = document.querySelectorAll(".dress");
const filters = document.querySelector(".collection-filters");
const filterButtons = filters.querySelectorAll("button");
const filterStatus = document.querySelector("#filter-status");

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const finish = button.dataset.filter;
    let visibleCount = 0;

    for (const dress of dresses) {
      const matches = finish === "all" || dress.dataset.finish === finish;
      dress.hidden = !matches;
      visibleCount += Number(matches);
    }

    for (const filter of filterButtons) {
      filter.setAttribute("aria-pressed", String(filter === button));
    }

    filterStatus.textContent = visibleCount === 1
      ? "1 dress shown"
      : `${visibleCount} dresses shown`;
  });
}

filters.hidden = false;

if (typeof detail.showModal === "function") {
  const detailImage = detail.querySelector(".detail-image");
  const detailTitle = detail.querySelector("#detail-title");
  const detailMaterial = detail.querySelector(".detail-material");
  const detailDescription = detail.querySelector(".detail-description");

  for (const dress of dresses) {
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
