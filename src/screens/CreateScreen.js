import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import BlogContext from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const { addBlogPost } = useContext(BlogContext);
  return (
    <View>
        <Text>Create Blog</Text>
        <BlogPostForm
          submitBlogPost={(title, post, image)=> addBlogPost(title, post,image, ()=> {
            // allows you to add extra code like navigation
            navigation.navigate('Home')
          })}
        />
    </View>
  )
}

export default CreateScreen