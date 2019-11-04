import {Dimensions, PixelRatio} from 'react-native';

const { width, height } = Dimensions.get('window');

const pixel = 1 / PixelRatio.get();

export const dimensions = { width, height, pixel};
