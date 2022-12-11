import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';
import { MOVIES } from '../data/movies';
import { useSelector, useDispatch, connect } from 'react-redux';
import { selectMovie } from '../store/actions/movies.action';

const MoviesScreen = ({navigation}) => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const handleSelectedCategory = (item) => {
        dispatch(selectMovie(item.id));
        navigation.navigate("MovieDetails", {
            name: item.name,
        })
    }

    const renderListItem = ({item}) => (
        <ListItem item={item} onSelected={handleSelectedCategory}/>
    )

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Peliculas</Text>
        <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        />
    </View>
  )
}

export default connect()(MoviesScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1160",
        alignItems: "center",
    },
    title:{
        fontFamily: "NotoSerifBold",
        fontSize: 40,
        color:"white",
    },
})