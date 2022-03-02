import React from "react";

export default function Book(props) {
  return (
    <div className="book">
      <div className="book-left">
        <div className="info">
          <span>{props.category}</span>
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
        </div>
        <div className="buttons">
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
        </div>
      </div>
      <div className="book-center">
        <p>{props.completed}</p>
        <span>Completed</span>
      </div>
      <div className="book-right">
        <p>Current chapter</p>
        <span>Chapter {props.chapter}</span>        
        <button>Update Progress</button>
      </div>
    </div>
  );
}