import React, { useState } from 'react';
import CheckBox, { CheckBoxComponent, CheckBoxProps } from '@react-native-community/checkbox';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../Background';

export type ListProps = {
  id: string
  task: string;
  isChecked: boolean;
  checkSorter: number;
}

type Props = CheckBoxProps & {
  data: ListProps
}

export function ListItems({ data, ...rest }: Props) {

  return (
    <Background>
      <View style={styles.container} >
        <View>
          <CheckBox
            style={styles.checkbox}
            value={data.isChecked}
            {...rest}
          />
        </View>
        <View
          style={styles.content}
        >
          <Text
            style={
              data.isChecked ? styles.checkedTask :
              styles.task
            }
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {data.task}
          </Text>
        </View>
      </View>
    </Background>
  );
}