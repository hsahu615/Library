let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBooktoLibrary() {
  let name = document.querySelector(".name").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  document.querySelector(".name").value = ""
  document.querySelector(".author").value = ""
  document.querySelector(".pages").value = ""
  let book = new Book(name, author, pages);
  myLibrary.push(book);

  showcase();
}

function showcase() {
  let showcase = document.querySelector(".showcase");
  showcase.innerHTML = "";
  let count = 0;
  myLibrary.forEach(function (e) {
    let showcase = document.querySelector(".showcase");
    let card = document.createElement("div");
    card.setAttribute("class", `cards ${count}`);

    let pname = document.createElement("p");
    let pauthor = document.createElement("p");
    let ppages = document.createElement("p");

    pname.textContent = `Name: ${e.name}`;
    pauthor.textContent = `Author:  ${e.author}`;
    ppages.textContent = `Pages: ${e.pages}`;

    let btn = document.createElement("button");
    btn.innerHTML = `<i class="fa fa-trash-o" style="font-size:36px;color:red"></i>`;
    btn.setAttribute("id", `card${count}`);
    btn.setAttribute('class', 'btn')
    btn.setAttribute("onclick", "del(this.id)");


    card.appendChild(pname);
    card.appendChild(pauthor);
    card.appendChild(ppages);
    card.appendChild(btn);

    showcase.appendChild(card);
    count++;
  });
}
function del(cardNumber) {
  myLibrary.splice(Number(cardNumber.charAt(cardNumber.length - 1)), 1);
  showcase();
}

