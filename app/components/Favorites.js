import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/styles.js';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Favorites Page!
        </Text>
      </View>
    );
  }
}