import React from 'react';
import { useBookProvider } from '../../hooks/BookProvider';

const Form = () => {
    const { onSubmit, onChange, title, author, genre, imageUrl, synopsis  } = useBookProvider();
    
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <input name="title" type="text" value={title} onChange={onChange} placeholder="title" />
        <input name="author" type="text" value={author} onChange={onChange} placeholder="author" /> 
        <input name="genre" type="text" value={genre} onChange={onChange} placeholder="genre" />
        <input name="image" type="text" value={imageUrl} onChange={onChange} placeholder="image url" />
        <textarea name="synopsis" value={synopsis} onChange={onChange} placeholder="synopsis" >
        </textarea>
        <button>Add Book!</button>
      </fieldset>
    </form>    
  );  
};

export default Form;
