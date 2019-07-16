import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';
import uuidv1 from 'uuid';

const initialState = {
  articles: []
};

// Reducers are responsible for producing the state of an application
// Take two parameters: the current state, an action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // State is immutable and cannot change in place
      // Resulting state is a copy of the initial state
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case FOUND_BAD_WORD:
      const badWordTitle = 'You typed a forbidden word! 😱';
      const id = uuidv1();
      const badWordPayload = {
        title: badWordTitle,
        id
      };
      return Object.assign({}, state, {
        articles: state.articles.concat(badWordPayload)
      });
    default:
      break;
  }
  return state;
};

export default rootReducer;
