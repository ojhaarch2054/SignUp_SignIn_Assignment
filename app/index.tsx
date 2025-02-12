import { View, StyleSheet, ImageBackground } from 'react-native'
import SignupView from '@/components/SignupView'
import React from 'react'
import LoginView from '@/components/LoginView'
import backgroundPicture from './../assets/images/img.avif'

const App = () => {
  return (
    <ImageBackground source={backgroundPicture} style={styles.background}>
      <View style={styles.container}>
        <SignupView />
        <LoginView />
      </View>
    </ImageBackground>
  )
}

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})