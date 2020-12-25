import React from 'react';
import { Text, View } from 'react-native';
const NewtApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Newtown Radio </Text>
           <Image
        
        source={require('@newt1.jpg')}
      />
      
  
   var track = {
    id: 'Newtown Radio', // Must be a string, required
    
    url: 'https://streaming.radio.co/s0d090ee43/listen', // Load media from the network
  
    title: 'Newtown Radio Livestream',
    
    
    
    artwork: 'newt1.JPG' // Load artwork from the file system
};
   
   
    </View>
  );
}

// Adding to the queue
// You can provide multiple items in one single call
TrackPlayer.add([track, track2]).then(function() {
    // The tracks were added
});

export default NewtApp;
