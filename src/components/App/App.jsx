import React from 'react';
import { BookProvider } from '../../hooks/BookProvider';
import Form from '../Form/Form';

export default function App() {
  return(
    <BookProvider>
      <Form />
    </BookProvider>
  ); 
}
  