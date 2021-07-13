import React, { useState, useEffect } from 'react';
import uuid from 'react-native-uuid'
import { Entypo } from '@expo/vector-icons';
import { FlatList, RectButton } from 'react-native-gesture-handler';

import {
  View,
  TextInput,
  Alert,
  Text
} from 'react-native';

import { ListItems, ListProps } from '../../components/ListItems';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { COLLECTION_TASKS } from '../../configs/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {
  const [task, setTask] = useState('')
  const [currentTasks, setCurrentTasks] = useState<ListProps[]>([])
  const [loading, setLoading] = useState(true)

  async function loadTasks() {
    const response = await AsyncStorage.getItem(COLLECTION_TASKS)
    const storage: ListProps[] = response ? JSON.parse(response) : [];
    setCurrentTasks(storage)
    setLoading(false)
  }

  async function handleSave(task: string) {
    if (task === '') {
      Alert.alert(
        "Gentileza informar uma tarefa"
      )
    } else {

      const newTask = {
        id: uuid.v4(),
        task: task,
      };

      const storage = await AsyncStorage.getItem(COLLECTION_TASKS)
      const tasks = storage ? JSON.parse(storage) : []

      await AsyncStorage.setItem(
        COLLECTION_TASKS,
        JSON.stringify([...tasks, newTask])
      );
      setTask('')
    }
    setLoading(true)
    loadTasks()
  }

  async function handleClearTasks() {
    AsyncStorage.removeItem(COLLECTION_TASKS)
    loadTasks()
  }

  function clearTasks() {
    Alert.alert(
      "Exclusão de tarefas",
      "Tem certeza que deseja excluir as tarefas atuais?",
      [
        {
          text: "Cancelar",
          onPress: () => Alert.alert("Exclusão cancelada")
        },
        {
          text: "Confirmar",
          onPress: () => {
            handleClearTasks(),
            setLoading(true)
          }
        }
      ]
    )
  }

  useEffect(() => {
    loadTasks();
  }, [])

  return (
    <>
      <Background>
        <Header
          title={'To-do List'}
        />
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title} >
              Insira aqui sua tarefa (max. 40)
            </Text>
          </View>

          <View
            style={styles.inputWrapper}
          >
            <TextInput
              numberOfLines={1}
              style={styles.input}
              value={task}
              onChangeText={setTask}
              maxLength={40}
            />
            <RectButton
              onPress={() => handleSave(task)}
              style={styles.saveButton}
            >
              <Entypo
                name={'plus'}
                size={24}
                color={theme.colors.text}
              />
            </RectButton>

            <RectButton
              onPress={() => clearTasks()}
              style={styles.clearButton}
            >
              <Entypo
                name={'cross'}
                size={24}
                color={theme.colors.heading}
              />
            </RectButton>
          </View>
        </View>
        {
          loading ?
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
              <Loading />
            </View>
            :
            <View>
              <ListHeader
                title={'Tarefas'}
                subtitle={`Total: ${currentTasks.length}`}
              />

              <FlatList
                data={currentTasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <ListItems
                    task={item.task}
                  />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 12, paddingBottom: 30 }}
              />
            </View>
        }
      </Background>
    </>
  );
}