import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
}

export function Header({title }: Props) {
  const { backgroundUp, backgroundDown } = theme.colors;

  return (
    <LinearGradient
      colors={[backgroundUp, backgroundDown]}
      style={styles.container}
    >
      <Text style={styles.title} >
        { title }
      </Text>
    </LinearGradient>
  )
}