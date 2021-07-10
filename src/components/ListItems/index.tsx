import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../Background';

type listProps = {
  task: string;
}

export function ListItems({ task }: listProps) {
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
            style={styles.task}
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