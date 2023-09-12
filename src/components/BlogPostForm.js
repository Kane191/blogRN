import React, { useState } from 'react';
import {TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons'; 

const BlogPostForm = ({submitBlogPost, blogPost}) => {
  const [image, setImage] = useState(null)
  const [post, setPost] = useState(blogPost.post);
  const [title, setTitle] = useState(blogPost.title);

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });
    console.log(result);
   
    
    if (!result.canceled){
      setImage(result.assets[0].uri);
    }
  }
  return (
    <>
      <Text>Title</Text>
      <TextInput 
        value={title}
        onChangeText={(text)=> setTitle(text)}
      />
      <Text>Post</Text>
      <TextInput 
        value={post}
        onChangeText={(text)=> setPost(text)}
      />
      <TouchableOpacity style={styles.imgPicker} onPress={pickImage}>
        <Feather name="image" size={24} color="black" />
        <Text>Pick Image</Text>
      </TouchableOpacity>
      {
        image ?
          <Image source={{uri: image}} style={styles.img}/>
        : null
      }
      <TouchableOpacity
        onPress={()=> submitBlogPost(title, post, image)}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

BlogPostForm.defaultProps = {
  blogPost: {
    title: '',
    post: ''
  }
}
const styles = StyleSheet.create({
  imgPicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 120,
    borderRadius: 5,
    backgroundColor: '#cecece'
  },
  img: {
    width: 300,
    height: 300
  },
  btn: {

  }
})
export default BlogPostForm;
