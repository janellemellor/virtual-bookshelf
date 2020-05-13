import React, { createContext, useState, useContext } from "react";
 
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const onChange = ({ target }) => {
    const setFormInputsFactory = {
      title: setTitle,
      author: setAuthor,
      genre: setGenre,
      image: setImage, 
      synopsis: setSynopsis
    };

    setFormInputsFactory[target.name](target.value);
  }

};


