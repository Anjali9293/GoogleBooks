import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
const BASEURL = "https://www.googleapis.com/books/v1";
const MONGO_API = "https://www.googleapis.com/books/v1";



function Books() {
   const BookInput = useRef();
   const [books, setBooks] = useState([]);

  function formatBook(book) {
    console.log(book);
    return {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors ? 
        book.volumeInfo.authors.join(", ") : "N/A",
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
      subtitle: book.volumeInfo.subtitle
    };
  }

  const SearchBook = async function (event){
    event.preventDefault();
    let searchvalue = BookInput.current.value;
    console.log(`input:${searchvalue}`);
    setBooksforAPI(searchvalue);
  }

  async function save(book) {
    let result = await API.saveBook(book);
    console.log(result);
  }

  async function setBooksforAPI(name){
    let { data } = await axios.get(`${BASEURL}/volumes?q=${name}`);
    console.log(data);
    setBooks(data.items);
    console.log(data.items);
  }

  return (
    <div>
    <div class="card">
    <div class="card-body">
      <h1>Book Search</h1>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Book</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={BookInput}></textarea>
     </div>
     <button type="button" class="btn btn-outline-secondary" onClick={SearchBook}>Search</button>
    </div>
    </div>
    <div class="card">
    <div class="card-body">
      <h1>Results</h1>
    </div>
    {books.length ? (
              <List>
                {books.map(bookItem => {
                  let book = formatBook(bookItem);
                  return (
                    <ListItem key={book.id}>
                      <div class="card">
                        <div class="card-body">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a class="btn btn-light" href={book.link} role="button" target="_blank">View</a>
                            <button class="btn btn-dark" type="button" onClick={() => save(book)}>Save</button>
                          </div>
                          <h5 class="card-title">{book.title}</h5>
                          <label for="exampleFormControlTextarea1" class="form-label">{book.subtitle}</label>
                          <p class="card-text">By: {book.authors}</p>
                          <div class="row">
                            <div class="col-2">
                            <img src={book.image} class="card-img-top" alt="imglink"/>
                            </div>
                            <div class="col-10">
                            <p>{book.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
  </div>
  </div>
  )
  
};

export default Books;