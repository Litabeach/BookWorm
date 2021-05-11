import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


const Search = () => {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  
  // Handles updating component state when the user types into the input field
  const handleInputChange = e => {
    const { value } = e.target;
    setSearchBook(value);
  };

    // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  const handleFormSubmit = e => {
    e.preventDefault();
    API.getBooks(searchBook)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  
  const handleSaveBook = (e, data) => {
    e.preventDefault();

    API.saveBook(data)
      .then((res) => alert("Book Saved!"))
      .catch((err) => console.log(err));
  };

// function Detail(props) {
//   const [book, setBook] = useState({})

//   // When this component mounts, grab the book with the _id of props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   const {id} = useParams()
//   useEffect(() => {
//     API.getBook(id)
//       .then(res => setBook(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {book.title} by {book.author}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Synopsis</h1>
//               <p>
//                 {book.synopsis}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Detail;
