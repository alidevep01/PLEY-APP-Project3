import React, { useState } from "react";
import EachReview from "./EachReview";

function Reviews({ list }) {
  const [reviews, deleteReviews] = useState("");
  function deleteReview(id) {
    // setReviews(
    //   list.filter((item) => {
    //     return id !== item.id;
    //   })
    // );
  }

  handleDeleteReview = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/pley/${window.location.pathname.split("/")[2]}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    
    }).then( res => {
      console.log('id:',reviews)
      const copyReviews = [...list]
      const findIndex = list.findIndex(
        (review) => review._id === id 
      )
      copyReviews.splice(findIndex, 1)
      // this.setState({ reviews: copyReviews})

    })
    console.log(id)
  }

  return (
    <div className="">
      {list.length > 0
        ? list.map((item, index) => {
            return <EachReview review={item} key={index} handleDelete={() => deleteReview(item.id)} />;
          })
        : "No Recipes"}
    </div>
  );
}

export function handleDeleteReview() {
  return (
    <main>
      <EachReview handleDeleteReview={Reviews.handleDeleteReview} />
    </main>
  );
}

export default Reviews;
