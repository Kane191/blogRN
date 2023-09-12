import React, { useReducer } from 'react';
import publicApi from '../api/publicApi';
import axios from 'axios';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blogPosts':
            return action.payload

        case 'add_blogPost':
          return [
            ...state,
            {
              _id: action.payload._id,
              image: action.payload.image,
              title: action.payload.title,
              post: action.payload.post
            }
          ]

        case 'edit_blogPost':
          return state.map((post)=> {
            return post._id === action.payload._id ? action.payload : post
          })

        case 'delete_blogPost':
          return state.filter((post)=>{
            return post._id !== action.payload._id
          })
          
        default:
            return state
    }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const getPosts = async () => {
    try {
      const { data } = await publicApi.get('/');
      if(data.message === 'Successfully fetched blog posts'){
        dispatch({type: 'get_blogPosts', payload: data.data})
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const addBlogPost = async (title, post, image, callback) => {
    // Create form data -> this allows us to send both files and text
    // Getting specific extension
    console.log(image)
    
    // "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fblog-23-425a5040-4de1-4119-8079-6b6e628a6674/ImagePicker/01e8377f-2ffb-4ff7-9d7c-a55989e449d9.jpeg"


    let splitString = image.split('.')
    let extension = splitString[splitString.length - 1]
    console.log(extension)

    const formData = new FormData();
    formData.append('title', title);
    formData.append('post', post);
    formData.append('image', {
      uri: image,
      type: `image/${extension}`,
      name: `image.${extension}`//doesn't affect
    })
    
    const { data } = await publicApi.post('/create', formData)
    console.log(data)
    if(data.message === 'Successfully created blog post'){
      dispatch({type: 'add_blogPost', payload: data.data})
      callback();
    }
  }

  const editBlogPost = async(title, post, image, _id, callback) => {
    let editedData  = {title, post}
    if(image){
      let splitString = image.split('.')
      let extension = splitString[splitString.length - 1]
      const formData = new FormData();
      formData.append('title', title);
      formData.append('post', post);
      formData.append('image', {
        uri: image,
        type: `image/${extension}`,
        name: `image.${extension}`
      })
      editedData = formData
    }

    const { data } = await publicApi.post(`/update/${_id}`, editedData)
    console.log(data)
    if(data.message === 'Successfully updated blog post'){
      dispatch({type: 'edit_blogPost', payload: {
        _id: data.data._id,
        title: data.data.title, 
        post: data.data.post
      }})
      callback();
    }
  }

  const deleteBlogPost = async (_id) => {
    const { data } = await publicApi.post(`/delete/${_id}`);
    console.log(data)
    if(data.message === 'Successfully deleted blog post'){
      dispatch({type: 'delete_blogPost', payload: {_id: _id}})
    }
  }

  return (
    <BlogContext.Provider value={{ 
      data: blogPosts, 
      getPosts, 
      addBlogPost,
      editBlogPost,
      deleteBlogPost
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
