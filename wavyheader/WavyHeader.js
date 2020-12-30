
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import CurvedNavBar from 'rn-curved-navigation-bar'
export default function WavyHeader({ customStyles }) {
   const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzTIIBqQ4kdk1ueV2MKAJgVOcW8E4ug__sdA&usqp=CAU" }; 

  return (
    
      <View style={{ backgroundColor: '#0693e3', height: 160 ,flexDirection:'row',alignItems:'top'}}>
        
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
          <Path
            fill="#0693e3"
            d="M0,256L48,256C96,256,192,256,288,266.7C384,277,480,299,576,304C672,309,768,299,864,288C960,277,1056,267,1152,261.3C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
        <Text style={{marginTop:100,color:'red'}}>Wavy Header </Text>
        <Text style={{marginTop:100,color:'white'}}>Wavy Header2222 </Text>
      </View>
      
    
  );
}