import * as React from 'react';
import {View, ViewStyle, StyleSheet, Image, Text} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import A from 'react-native-reanimated';

export function Tap({handleTap, index, transition, image, text}: any) {
  const inputRange = [0, 1];
  const outputRange = [0.001, 1];

  const iconStyle: ViewStyle = {
    transform: [
      {
        scale: A.interpolate(transition, {
          inputRange,
          outputRange,
          extrapolate: A.Extrapolate.CLAMP,
        }) as any,
      },
    ],
  };

  return (
    <TapGestureHandler onHandlerStateChange={handleTap(index)}>
      <View style={styles.tabItem}>
        <A.View style={[StyleSheet.absoluteFillObject, styles.boxCenter]}>
          <Text style={{color: 'white'}}>{text}</Text>
        </A.View>

        <A.View
          style={[StyleSheet.absoluteFillObject, styles.boxCenter, iconStyle]}>
          <Image source={image} />
        </A.View>
      </View>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    marginHorizontal: 15,
  },
  boxCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
