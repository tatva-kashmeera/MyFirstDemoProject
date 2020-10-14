/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, Button} from 'react-native';

//Utility
import styles from './styles';

const Detail = (props) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default Detail;
