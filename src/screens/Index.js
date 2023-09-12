import React, {useContext, useEffect} from 'react';
import { View, Button, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import BlogContext from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'; 

const Index = ({navigation}) => {
  const { data, getPosts, deleteBlogPost } = useContext(BlogContext);
  const backendUrl = 'https://59a8-105-163-156-237.ngrok-free.app/'

  useEffect(()=>{
    getPosts();

    const listener = navigation.addListener('focus', ()=>{
        getPosts();
    });

    return () =>{
        if(listener){
            listener.remove()
        }
    }   

  }, []);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Create')}>
            <Text style={styles.txt}>Create Blog Post</Text>
        </TouchableOpacity>
        <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=> navigation.navigate('Show', {_id: item._id})}>
                    <View style={styles.postCont}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{item.title}</Text>
                            <TouchableOpacity onPress={()=> deleteBlogPost(item._id)}>
                                <AntDesign name="delete" size={24} color="grey" />
                            </TouchableOpacity>
                        </View>
                        {
                            item.image?
                                <Image source={{uri: backendUrl + item.image}} style={styles.img}/>
                            : null
                        }
                        <Text>{item.post}</Text>
                    </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    postCont:{
       borderWidth: 1,
       borderColor: 'grey',
       borderRadius: 10,
       marginHorizontal: 20,
       marginTop: 10,
       paddingVerical: 10,
       paddingHorizontal: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#000',
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 5
    },
    txt: {
        color: '#fff'
    },
    img: {
        // width: 300,
        height: 300
    },

})

export default Index