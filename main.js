document.addEventListener("DOMContentLoaded", () => {
  const countryList = document.getElementById("country-list");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(0, 25).forEach((country) => {
        const listItem = document.createElement("li");
        listItem.textContent = country.name.common;
        countryList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
});
