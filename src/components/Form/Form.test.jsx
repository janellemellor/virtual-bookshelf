import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { BookProvider } from '../../hooks/BookProvider';

describe('Form Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <BookProvider>
        <Form onSubmit={() => {}} onChange={() => {}} title='Salt' author='Nayyirah Waheed' genre='poetry' imageUrl='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg' synopsis='It was only and ever love' />
      </BookProvider>);
      expect(wrapper).toMatchSnapshot();
  });  
});
