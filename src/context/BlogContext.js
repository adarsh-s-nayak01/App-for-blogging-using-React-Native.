import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      //if this is true, we'll include those blogposts in a new array.
      return state.filter((blogPost) => blogPost.id !== action.payload);
      //blogpost with payload id we'll be excluded.
      //filter function will iterate over all the elements in the state array. then define a child function about what to do.
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
     //type will taken by the react -native and then provided to blog reducer
    //as second arguement.
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
