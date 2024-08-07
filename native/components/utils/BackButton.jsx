import React, {useEffect} from 'react'
import { Pressable, Image,BackHandler } from 'react-native'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'



const BackButton = () => {
    const navigation = useNavigation()

    useEffect( () => {
      const back = () => {
        navigation.goBack()
        return true
      }
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        back
      )
      return () => backHandler.remove()

    }, [navigation])
    
       
    
  return (
    <Pressable 
        style={tailwind`absolute z-10`}
        onPress={() => navigation.goBack()}
    >
        <Image source={require('../../assets/chevron-back.png')} />
    </Pressable> 
           
  )
}

export default BackButton