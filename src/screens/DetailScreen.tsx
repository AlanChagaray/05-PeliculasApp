import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions , ActivityIndicator} from 'react-native';
import { RootStackParams } from '../navigator/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDatail } from '../components/MovieDetail';
//import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route}:Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { movieFull, cast } = useMovieDetails(movie.id);


  return (
    <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{uri}}
            style={ styles.posterImage}
          />
        </View>
        <View style = {styles.marginContainer}>
          <Text style={ styles.subTitle}>{movie.original_title}</Text>
          <Text style={ styles.title}>{movie.title}</Text>
        </View>
            <ActivityIndicator color="grey" size={20 } style ={ {marginTop: 20 }} />
            <MovieDatail movieFull={movieFull!} cast={cast} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
      width: '100%',
      height : screenHeight * 0.7,
      overflow: 'hidden',
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,

        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25
    },
    posterImage:{
      flex: 1
    },
    marginContainer: {
      marginTop: 20,
      marginHorizontal: 20
    },
    subTitle: {
      fontSize: 16
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }
})