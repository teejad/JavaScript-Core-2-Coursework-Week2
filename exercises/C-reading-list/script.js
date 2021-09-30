function readingList(books) {
  // Write your code here...
  const content = document.querySelector('#content');
  let ul = document.createElement("ul");
  let h1 = document.createElement("h1");
  h1.textContent = "Books List";
  content.appendChild(h1);
  content.appendChild(ul);
  // ul.style.display = "flex" 

  books.forEach((book) => {
    let li = document.createElement("li");
    let para = document.createElement("para");
    let img = document.createElement("img");
    img.style.width = "50%"
    li.style.padding = "40px"
    li.style.width = "50%" 
    li.style.marginLeft = "20pt"
    li.style.margin = "100px 0 0 100px"
    li.style.listStyle = "none"
    // content.style.display = "flex"
    para.textContent = `${book.title} - ${book.author}`;
    ul.appendChild(li);
    li.appendChild(para);
    li.appendChild(img);

    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
    if(book.title === 'The Design of Everyday Things'){
      img.src = 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    } else if(book.title === 'The Most Human Human') {
      img.src = 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg';
    } else if (book.title === 'The Pragmatic Programmer'){
      img.src ='https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg';
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
    
  }
];

readingList(books);