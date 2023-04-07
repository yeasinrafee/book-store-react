import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div>
      <h2>bookdetails</h2>
    </div>
  );
};

export default BookDetails;
