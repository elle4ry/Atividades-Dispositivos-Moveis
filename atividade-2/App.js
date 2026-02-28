import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, PixelRatio } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const img1 = require('./assets/dandadan-characters-5120x2880-24680.jpg');
  const img2 = require('./assets/dark-moon-the-blood-3840x2160-25368.jpg');
  const img3 = require('./assets/frieren-beyond-3840x2160-24988.jpg');
  const img4 = require('./assets/jujutsu-kaisen-3840x2160-25471.jpg');
  const img5 = require('./assets/shinra-kusakabe-3840x2160-25203.jpg');
  const img6 = require('./assets/taro-sakamoto-5120x2880-25149.jpg');
  const img7 = require('./assets/the-shorekeeper-5120x3662-25523.jpg');
  const img8 = require('./assets/yoroi-shinden-3840x2160-25276.jpg');
  const img9 = require('./assets/goku-perfected-5120x2880-25454.jpg');

  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
       <View style={styles.conteiner}>
         <Image 
          source={img1}
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img2} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img3} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img4} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img5} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img6} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img7} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img8} 
          style={styles.imgEstilo}
          />
        </View>
       <View style={styles.conteiner}>
         <Image 
          source={img9} 
          style={styles.imgEstilo}
          />
        </View>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    padding: 5,
    margin: 10,
    alignItems: 'center',
    flex: 1
  },
  imgEstilo:{
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: 'black',
    height: 200,
    width: 300,
  }
});
