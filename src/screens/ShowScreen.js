import React, {useContext} from 'react';
import { View, Text} from 'react-native';
import BlogContext from '../context/BlogContext';

const ShowScreen = ({route}) => {
  const _id = route.params._id;
  console.log(_id)
  const { data } = useContext(BlogContext)

  const blogPost = data.find((post)=> post._id === _id)
  return (
    <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.post}</Text>
    </View>
  )
}

export default ShowScreen;