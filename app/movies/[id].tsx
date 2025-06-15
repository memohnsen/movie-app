import { icons } from "@/constants/icons";
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface MovieInfoProps {
  label: string,
  value?: string | number | null
}

const MovieInfo = ({label, value}: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">{value || 'N/A'}</Text>
  </View>
)


const MovieDetails = ({overview, title}: Movie) => {
  const {id} = useLocalSearchParams()
  
  const {data: movie, loading} = useFetch(() => fetchMovieDetails(id as string))

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        <View>
          <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}} className='w-full h-[550]' resizeMode='stretch'/>
        </View>
        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className='text-white font-bold text-xl'>{movie?.title}</Text>
          <View className='flex-row gap-x-1 mt-2 items-center'>
            <Text className='text-light-200 text-sm'>{movie?.release_date} ∙ {movie?.runtime} minutes ∙ {movie?.original_language.toUpperCase()}</Text>
          </View>
            <View className='flex-row item-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
              <Image source={icons.star} className='size-4' />
              <Text className="text-white font-bold text-sm">{Math.round(movie?.vote_average ?? 0)/2}/5 ({movie?.vote_count})</Text>
            </View>
            <MovieInfo label="Overview" value={movie?.overview}/>
            <MovieInfo label="Genres" value={movie?.genres?.map(genre => genre.name).join(' ∙ ') || "N/A"}/>
            <MovieInfo label="Countries" value={movie?.production_countries.map(country => country.name).join(' ∙ ')}/>
            <View className="flex flex-row justify-between w-1/2">
              <MovieInfo label="Budget" value={`$${movie?.budget / 1000000} million`} />
              <MovieInfo label="Revenue" value={`$${Math.round(movie?.revenue / 1000000)} million`}/>
            </View>
            <MovieInfo label="Tagline" value={movie?.tagline}/>
            <MovieInfo label="Production Companies" value={movie?.production_companies.map(company => company.name).join(' ∙ ')}/>
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-2.5 flex flex-row items-center justify-center z-50" onPress={router.back}>
        <Image source={icons.arrow} className="size-5 mr-1 mt0.5 rotate-180" tintColor="#fff" />
        <Text className="text-white font-semirbold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails