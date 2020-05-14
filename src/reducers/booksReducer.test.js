import reducer from './booksReducer';
import { addBook } from '../actions/bookActions';

describe('books reducer', () => {
  it('handles the add book action', () => {
    const state = [];
    const action = addBook({
        author: 'Nayyirah Waheed',
        title: 'Salt',
        genre: 'Poetry',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
        synopsis: 'It was only and ever love'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([
        {
            author: 'Nayyirah Waheed',
            title: 'Salt',
            genre: 'Poetry',
            imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
            synopsis: 'It was only and ever love'
        }
    ]);
  });

});


//_id: '5ebc6ebeb94f5edd42545645', 