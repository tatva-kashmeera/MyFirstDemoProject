/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, Button} from 'react-native';

//Custom components

//Utility
import styles from './styles';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detail"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
