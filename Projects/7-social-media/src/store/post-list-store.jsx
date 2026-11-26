import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      },

    })
  }


  return <PostList.Provider value={
    {
      postList,
      addPost,
      deletePost,
      // these all three are objects that we are passing to the context provider so that we can use them in them 
    }

  }>
    {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Going to Delhi',
  body: 'I am going to Delhi for my job preparation . I will be there until I found a job.',
  reactions: 2,
  userId: 'user-18',
  tags: ['job', 'Delhi', ' Job preparation']
},
{
  id: '2',
  title: 'Going to Mumbai',
  body: 'I am going to Mumbai for my job preparation . I will be there until I found a job.',
  reactions: 15,
  userId: 'user-19',
  tags: ['getjob', 'Mumbai', ' Job preparation']
},]
export default PostListProvider;

