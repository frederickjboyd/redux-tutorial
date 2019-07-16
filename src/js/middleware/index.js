import { ADD_ARTICLE } from '../constants/action-types';
import { foundBadWord } from '../actions';

const forbiddenWords = ['spam', 'money', 'heck', 'fortnite'];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function(next) {
    return function(action) {
      // Place app logic here
      switch (action.type) {
        // When the action type is ADD_ARTICLE, check if the article's title contains a forbidden word
        case ADD_ARTICLE:
          const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));

          // If a forbidden word is found, dispatch an action of type FOUND_BAD_WORD
          if (foundWord.length) {
            return dispatch(foundBadWord());
          }
          break;
        default:
          break;
      }
      // Otherwise, let the action pass
      return next(action);
    };
  };
};
