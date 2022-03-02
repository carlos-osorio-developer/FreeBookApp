import React from 'react';

export default function NewForm() {
  return (
    <form className="form">
      <input type="text" placeholder="Title" className="form-title" />
      <input type="text" placeholder="Author" className="form-author" />
      <input type="text" placeholder="Category" className="form-category" />
      <button type="submit" className="form-submit">Add</button>
    </form>
  );
}
