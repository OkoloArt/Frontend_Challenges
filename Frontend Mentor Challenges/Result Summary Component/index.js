const summaryDiv = document.querySelector(".summary");

// Fetch the JSON data
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Iterate through the data and create HTML elements
    data.forEach((item) => {
      const summaryItemDiv = document.createElement("div");
      summaryItemDiv.classList.add("summary-item", item.category.toLowerCase());

      const summaryTitleDiv = document.createElement("div");
      summaryTitleDiv.classList.add("summary-title", "flex-group");

      const iconImg = document.createElement("img");
      iconImg.src = item.icon;
      iconImg.alt = item.category.toLowerCase();
      summaryTitleDiv.appendChild(iconImg);

      const categoryTitle = document.createElement("h5");
      categoryTitle.textContent = item.category;
      summaryTitleDiv.appendChild(categoryTitle);

      summaryItemDiv.appendChild(summaryTitleDiv);

      const scoreParagraph = document.createElement("p");
      scoreParagraph.classList.add("score");
      scoreParagraph.innerHTML = `<span>${item.score}</span> / 100`;

      summaryItemDiv.appendChild(scoreParagraph);

      summaryDiv.appendChild(summaryItemDiv);
    });

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Continue";
    summaryDiv.appendChild(buttonElement);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
