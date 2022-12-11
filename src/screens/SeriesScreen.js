import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SERIES } from '../data/series'
import ListItem from '../components/ListItem'
import { useSelector, useDispatch, connect } from 'react-redux';
import { selectSeries } from '../store/actions/series.action';

const SeriesScreen = ({navigation}) => {
    const series = useSelector((state) => state.series.series);
    const dispatch = useDispatch();

    const handleSelectedCategory = (item) => {
        dispatch(selectSeries(item.id));
        navigation.navigate("SeriesDetails", {
            name: item.name,
        })
    }

    const renderListItem = ({item}) => (
        <ListItem item={item} onSelected={handleSelectedCategory}/>
    )

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Series</Text>
        <FlatList
        data={series}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        />
    </View>
  )
}

export default connect()(SeriesScreen);

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