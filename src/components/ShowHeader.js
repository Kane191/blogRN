import React from 'react'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const ShowHeader = ({navigation, route}) => {
  const _id = route.params._id;
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Edit', {_id})}>
        <MaterialIcons name="edit" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default ShowHeader