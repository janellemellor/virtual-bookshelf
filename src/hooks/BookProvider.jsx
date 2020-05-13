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
  };
  
  const onSubmit = (event) => {
      event.preventDefault();    
  };

  const context = {
     onSubmit, 
     onChange, 
     title, 
     author, 
     genre, 
     image, 
     synopsis
  };

  return (
    <BookContext.Provider value={context} >
        {children}
    </BookContext.Provider>
  );
};




