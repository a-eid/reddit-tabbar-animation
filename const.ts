import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const DIAMETER = 40;
export const TABBAR_HEIGHT = 60;
export const TABBAR_CONTAINER_WIDTH = width - 20 * 2 - 20 * 3 - DIAMETER;
