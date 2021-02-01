import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function SavedBooks() {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        loadBooks()
      }, [])

     async function loadBooks() {
       let result = await API.getBooks()
       setBooks(result.data);
       console.log(result.data);
     }

     async function deleteBook(id){
       let result = await API.deleteBook(id);
       console.log(result);
       loadBooks();
     }

    return(
    <div className="card">
    <div className="card-body">
      <h1>Results</h1>
    </div>
    {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                      <div class="card">
                        <div class="card-body">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a class="btn btn-light" href={book.link} role="button" target="_blank">View</a>
                            <button class="btn btn-dark" type="button" onClick={() => deleteBook(book._id)} >Delete</button>
                          </div>
                          <h5 class="card-title">{book.title}</h5>
                          <p class="card-text">By:{book.authors}</p>
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
    )
}

export default SavedBooks;