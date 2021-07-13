import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../Background';

export type ListProps = {
  task: string;
}

export function ListItems({ task }: ListProps) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Background>
      <View style={styles.container} >
        <View>
          <CheckBox
            style={{ width: 20, height: 20 }}
            value={isChecked}
            onValueChange={setIsChecked}
          />
        </View>
        <View
          style={styles.content}
        >
          <Text
            style={
              isChecked ? styles.checkedTask :
              styles.task
            }
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {task}
          </Text>
        </View>
      </View>
    </Background>
  );
}