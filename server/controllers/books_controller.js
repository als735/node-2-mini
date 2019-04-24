let books = []; // empty array 
let id = 0;  // id = 0 

module.exports = {  //looking for response 200 from the server, and if so then you send books? Is that whats happening here?  
  read: (req, res) => {
    res.status(200).send(books); 
  },
  create: (req, res) => {
    const { title, author } = req.body; //deconstructuring example, pulling from the body 
    let book = { // object of book, book has an id a title and an author 
      id: id,
      title: title,
      author: author
    };
    books.push(book); // pushing the object book into the empty array of books 
    id++;  // incrementing each time so you will go through all the books 
    res.status(200).send(books); // return books 
  },
  update: (req, res) => {  // we are updating a specific book by its id 
    let index = null; // index is undefined 
    books.forEach((book, i) => { // method executes a function once for each array element, book is the object, i is for each element in the object.  
      if (book.id === Number(req.params.id)) index = i; // Number is a built in javascript function which is used to conver data type to number. Number(query javascript variable) so if book.id is equal to whatever is in the body under the id param then give the index the value of i, which is . 
    });
    books[index] = { // books array, looking at the individual book because of the index in the bracket notation 
      id: books[index].id,  //updates the id with the new index for the book 
      title: req.body.title || books[index].title,  // updates the title with the response from the body or || from the books index 
      author: req.body.author || books[index].author // same as the things above 
    };
    res.status(200).send(books); //return or send books back 
  },
  delete: (req, res) => {
      let index = null; // index is undefined 
      books.forEach((book, i) => { //method executes once for each array in an element, so for each book and each element in book 
          if (book.id === Number(req.params.id)) index = i; //if books id is equal to the number coming through from the body params, then index is equal to i 
      }); 
      books.splice(index, 1); // and if thats the case then we want to remove, or splice out whatever fits that description 
      res.status(200).send(books); // then we return the books again 
  }
};