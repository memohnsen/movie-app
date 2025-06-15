import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

type Props = {
    placeholder: string
    onPress?: () => void
}

const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#Ab8bff" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A8B5DB"
        className="flex-1 ml-2 text-white"
        onPress={onPress}
        value=""
        onChangeText={() => {}}
      />
    </View>
  )
}

export default SearchBar