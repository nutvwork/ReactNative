// Ref https://heartbeat.fritz.ai/creating-custom-wavy-headers-using-react-native-svg-639ce0861327
import React from 'react';
import { StyleSheet, View, Text, Dimensions,ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import WavyHeader from './WavyHeader';
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenOne() {
    const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzTIIBqQ4kdk1ueV2MKAJgVOcW8E4ug__sdA&usqp=CAU" };

  return (
     <View style={styles.container}>
  
      <WavyHeader customStyles={styles.svgCurve} />
       <View style={styles.headerContainer}>
         <Text style={styles.headerText}>Custom Header</Text>
       </View>
        <LinearGradient colors={['#00e4d0', '#5983e8']} style={{borderBottomLeftRadius: 50,borderBottomRightRadius: 100}}>
            <View style={styles.oval} />
        </LinearGradient>
  
    </View>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    marginTop: 0,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 55
  }
});
