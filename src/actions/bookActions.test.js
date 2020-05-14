import { ADD_BOOK, addBook } from './bookActions';

describe('book actions', () => {
  it('creates an ADD_BOOK action', () => {
    const action = addBook({
        author: 'Nayyirah Waheed',
        title: 'Salt',
        genre: 'Poetry',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
        synopsis: 'It was only and ever love'
      });
    expect(action).toEqual({
      type: ADD_BOOK,
      payload: {
        _id: '5ebc6ebeb94f5edd42545645',
        author: 'Nayyirah Waheed',
        title: 'Salt',
        genre: 'Poetry',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
        synopsis: 'It was only and ever love'
      }
    });
  });
    
})
