import React, { useState } from "react";
import EachReview from "./EachReview";

function Reviews({ list }) {
  function deleteReview(id) {
    // setReviews(
    //   list.filter((item) => {
    //     return id !== item.id;
    //   })
    // );
  }

  return (
    <div className="">
      {list.length > 0
        ? list.map((item, index) => {
            return <EachReview review={item} key={index} handleDelete={() => deleteReview(item.id)} />;
          })
        : "No Reviews"}
    </div>
  );
}

export default Reviews;
