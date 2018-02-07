import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// A component is just a peice of code that has a rendedr function
// and returns some JSX (mixture of XML & JS)
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Helo werld!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
