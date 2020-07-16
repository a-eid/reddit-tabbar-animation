import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import A from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Tap} from './TabbarItem';
import {Indicator} from './Indicator';
import {TABBAR_CONTAINER_WIDTH, TABBAR_HEIGHT, DIAMETER} from './const';

import {TapGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {images} from './assets';

interface Props {
  value: A.Value<number>;
  transition: A.Node<number>;
  values: A.Value<number>[];
  transitions: A.Node<number>[];
}

export class Tabbar extends React.Component<Props> {
  last = 0;

  handleTap = (index: number) => (event: TapGestureHandlerGestureEvent) => {
    const {values, value} = this.props;
    values[this.last].setValue(1);
    values[index].setValue(0);
    this.last = index;
    value.setValue(index);
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.tabsContainer}>
            <Indicator transition={this.props.transition} />
            <Tap
              index={0}
              image={images.icon1}
              text="Home"
              handleTap={this.handleTap}
              transition={this.props.transitions[0]}
            />
            <Tap
              index={1}
              image={images.icon2}
              text="Chat"
              handleTap={this.handleTap}
              transition={this.props.transitions[1]}
            />
            <Tap
              index={2}
              image={images.icon3}
              text="About"
              handleTap={this.handleTap}
              transition={this.props.transitions[2]}
            />
          </View>
          <View style={styles.profile}></View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  boxCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    width: TABBAR_CONTAINER_WIDTH,
  },

  container: {
    paddingHorizontal: 20,
    marginHorizontal: 20,

    justifyContent: 'space-between',
    flexDirection: 'row',
    height: TABBAR_HEIGHT,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  profile: {
    width: DIAMETER,
    height: DIAMETER,
    backgroundColor: 'grey',
    borderRadius: DIAMETER / 2,
    alignSelf: 'center',
  },
});
