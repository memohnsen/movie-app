import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Details = ({overview, title}: Movie) => {
  const {id} = useLocalSearchParams()
  
  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(() => fetchMovies({query: ""}))

  return (
    <SafeAreaView>
      <Text className='text-black'>Movie Details: {id}</Text>
      <Text className='text-black'>Movie Name: {title}</Text>
      <Text className='text-black'>Movie Overview: {overview}</Text>
    </SafeAreaView>
  )
}

export default Details