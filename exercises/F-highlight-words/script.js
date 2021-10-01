function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.getElementById("content");
  let p = document.createElement("p");
  let select = document.createElement("select");

  content.appendChild(select);
  content.appendChild(p);


  paragraph = paragraph.split(" ")

  colours.forEach((colour) => {
    let option = document.createElement("option");
    option.textContent = colour;
    select.appendChild(option);

  });


 
   paragraph.forEach((word) => {
    let span = document.createElement("span");
    span.innerHTML = word + " ";
    p.appendChild(span);

    span.addEventListener("click",checkSelect);

  function checkSelect() {
  span.style.background = select.value
}
  });





}


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);














  // content.appendChild(selectElement);
  // content.appendChild(pElement);


  //  paragraph = paragraph.split(" ");
  
  // colours.forEach((colour )=> {
  //   let optionElement = document.createElement("option");
  //   optionElement.setAttribute("value",colour);
  //   optionElement.textContent = colour;
  //   selectElement.appendChild(optionElement);
  //   paragraph.forEach((word) => {
  //     let newSpan = document.createElement("span");
  //     newSpan.textContent = word;
  //     pElement.appendChild(newSpan);
  //      newSpan.addEventListener("click", choosecolour);
  //     function choosecolour() {
  //       //selectElement.value = colour;
  //       newSpan.style.background = selectElement.value;
  //     }
  //    });

     
    

    
  // });
  