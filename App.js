import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        {/* {
          - create react-native.config.js root project
          - run npx react-native link
          - check asset/font in androi vs info.plist in ios
        } */}
        <Text style={style.text1}>Hello world</Text>
        <Text style={style.text2}>Successfull!</Text>
        <Text style={style.text3}>Successfull!</Text>
        <Text style={style.text4}>Successfull!</Text>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  text1: {
    fontSize: 30,
    fontFamily: 'Langar-Regular',
    backgroundColor: '#f00'
  },
  text2: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
    backgroundColor: '#0f0',
  },
  text3: {
    fontSize: 40,
    fontFamily: 'DancingScript-Medium',
    backgroundColor: '#00f'
  },
  text4: {
    fontSize: 40,
    fontFamily: 'DancingScript-Regular',
    backgroundColor: '#0ff'
  },
})

export default App;
