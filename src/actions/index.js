import getId from '../utils/getId';

export const createBook = (title, category) => ({
  type: 'CREATE_BOOK',
  id: getId(),
  title,
  category,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
