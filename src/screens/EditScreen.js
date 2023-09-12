import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation, route}) => {
  const _id = route.params._id;
  console.log(_id)
  const { data, editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((post)=> post._id === _id)

  return <BlogPostForm 
            blogPost={blogPost}
            submitBlogPost={(title, post, image)=>{
                editBlogPost(title, post, image, _id, ()=>{
                    navigation.pop()//takes you back to the previous screen
                })
            }}
         />
}

export default EditScreen