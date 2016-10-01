// A reducer takes in two things:
   // 1. The action (info about what happened)
   // 2. Copy of the current state

function postComments(state = [], action) {

   switch(action.type) {
      case 'ADD_COMMENT' :
         return [...state, {
            user: action.author,
            text: action.comment
         }];
         break;
      case 'REMOVE_COMMENT' :
         return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
         ];
         break;
      default :
         return state;
   }

   return state;
}

function comments(state = [], action) {
   if(typeof action.postId !== 'undefined') {
      return {
         ...state,
         [action.postId]: postComments(state[action.postId], action)
      }
   }
   return state;
}

export default comments;
