import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';

import {
  View
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
  children: ReactNode
}

export function Background({children}:Props){
  const {backgroundDown, backgroundUp} = theme.colors
  return (
    <LinearGradient
      colors={[backgroundUp, backgroundDown]}
    >
      {children}
    </LinearGradient>
  );
}