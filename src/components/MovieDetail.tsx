import React from 'react'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditInterface'
import { FlatList, Text, View,StyleSheet } from 'react-native'
import { CastItem } from './CastItem';
//import currencyFormatter from 'currency-formatter'

interface Props {
    movieFull : MovieFull;
    cast : Cast[];
}

export const MovieDatail = ({movieFull, cast}: Props) => {
    
    return (
    <>
        <View>
            {/* <Text>{movieFull.vote_average}</Text> */}
            <Text style={{ marginLeft: 5}}>
                {/* - {movieFull.genres.map( g => g.name ).join(',')} */}
            </Text>
            <Text style={styles.titles}>
                Historia
            </Text>
            <Text style={{ fontSize: 16}}>
                {/* {movieFull.overview} */}
            </Text>
            <Text style={styles.titles}>
                Presupuesto
            </Text>
            <Text>
            {/* {currencyFormatter.format(movieFull.budget, {code : 'USD'})} */}
            </Text>
            <View style={{ marginTop: 10 , marginBottom: 100}}>
                <Text style={ styles.titles}>
                    Actores
                </Text>
                <FlatList 
                    data={cast}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=><CastItem actor={item}/> }
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    style={{marginTop:10, height:70}}
                />
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    titles: {
        fontSize: 23 , 
        fontWeight: 'bold',
        marginTop : 10,
        marginHorizontal:20
    }
})
