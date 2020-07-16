import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import A from 'react-native-reanimated';

import {TABBAR_CONTAINER_WIDTH, TABBAR_HEIGHT} from './const';

export function Indicator({transition}: any) {
  const style = {
    transform: [
      {
        translateX: A.interpolate(transition, {
          inputRange: [0, 1, 2],
          outputRange: [
            0,
            TABBAR_CONTAINER_WIDTH / 3,
            (TABBAR_CONTAINER_WIDTH / 3) * 2,
          ],
          extrapolate: A.Extrapolate.CLAMP,
        }),
      },
    ],
  };

  return (
    <A.View style={[styles.container, style]}>
      <View style={styles.inner} />
    </A.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: TABBAR_HEIGHT,
    width: TABBAR_CONTAINER_WIDTH / 3,
    left: 0,
    top: 0,
    justifyContent: 'center',
  },
  inner: {
    height: TABBAR_HEIGHT / 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: TABBAR_HEIGHT,
  },
});
