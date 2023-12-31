
import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width : windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top}= useSafeAreaInsets();
  
  if(isLoading){
    return(
      <View style={{ flex:1 , justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
    <View style={{ marginTop: top +20}}>
      <View style={{ height: 440}}>
        <Carousel 
          data = {nowPlaying}
          renderItem = { ({item}: any) => <MoviePoster movie = {item}/> }
          sliderWidth = { windowWidth}
          itemWidth = { 300}
          inactiveSlideOpacity={ 0.9}
        />
      </View>

      <HorizontalSlider title='Popular'   movies={popular}/>
      <HorizontalSlider title='Top Rated' movies={topRated}/>
      <HorizontalSlider title='Upcoming'  movies={upcoming}/>

    </View>
    </ScrollView>
  )
}
