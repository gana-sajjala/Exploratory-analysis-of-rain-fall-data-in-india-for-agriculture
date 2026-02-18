const cropImages = {
  Rice:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxnlQk7pzPa30tVnn6AJpGx08wAYfbsJeyw&s",
  Maize:
    "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
  Wheat:
    "https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg",
  Millet:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsRgPQEhVQnkmt48Fk5L5GxOXdmOc1J21eg&s",
};

document
  .getElementById("rainfallForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const month1 = parseFloat(document.getElementById("month1").value);
    const month2 = parseFloat(document.getElementById("month2").value);
    const month3 = parseFloat(document.getElementById("month3").value);

    if (
      isNaN(month1) ||
      isNaN(month2) ||
      isNaN(month3) ||
      month1 < 0 ||
      month2 < 0 ||
      month3 < 0
    ) {
      alert("Please enter valid non-negative rainfall values.");
      return;
    }

    const avgRainfall = (month1 + month2 + month3) / 3;

    // Sample logic for crop recommendation
    let crop = "";

    if (avgRainfall > 150) {
      crop = "Rice";
    } else if (avgRainfall > 100) {
      crop = "Maize";
    } else if (avgRainfall > 50) {
      crop = "Wheat";
    } else {
      crop = "Millet";
    }

    const resultEl = document.getElementById("result");
    resultEl.innerHTML = `
      Recommended Crop based on rainfall: <span class="crop-name">${crop}</span>
      <img src="${cropImages[crop]}" alt="${crop} image" />
    `;
  });
