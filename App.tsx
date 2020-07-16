import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import A from 'react-native-reanimated';
import {Tabbar} from './Tabbar';
import {withTransition} from 'react-native-redash';

export class App extends React.Component {
  value = new A.Value<0 | 1>(0);

  values = [
    new A.Value<0 | 1>(0),
    new A.Value<0 | 1>(1),
    new A.Value<0 | 1>(1),
  ];

  transition = withTransition(this.value);

  transitions = [
    withTransition(this.values[0]),
    withTransition(this.values[1]),
    withTransition(this.values[2]),
  ];

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}} />
        <Tabbar
          value={this.value}
          transition={this.transition}
          transitions={this.transitions}
          values={this.values}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
