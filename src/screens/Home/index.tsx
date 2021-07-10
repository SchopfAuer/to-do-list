import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import {
  View,
  TextInput,
} from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListItems } from '../../components/ListItems';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Home() {
  const { backgroundUp, backgroundDown } = theme.colors

  return (
    <>
      <Background>
        <Header
          title={'To-do List'}
        />

        <View
          style={styles.inputWrapper}
        >
          <TextInput
            numberOfLines={1}
            style={styles.input}
          />
        </View>
        <View>
          <View style={{paddingBottom: 15}} >
            <ListHeader 
              title={'Tarefas'}
              subtitle={'Total: 1'}
              />
          </View>
          <ListItems
            task={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
            />
        </View>
      </Background>
    </>
  );
}