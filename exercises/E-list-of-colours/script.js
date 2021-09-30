function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById("content");
  let select = document.createElement("select");
  let p = document.createElement("p");

  content.appendChild(select);

  colours.forEach((colour) => {
    let options = document.createElement("option");
    options.textContent = colour;
    select.appendChild(options);
  });

  document
    .getElementsByTagName("select")[0]
    .addEventListener("click", function (event) {
      p.textContent = "You have selected: " + event.target.value;
      p.style.color = event.target.value;
      content.appendChild(p);
      console.log(event.target.value);
    });
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
