import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, TouchableOpacity, FlatList } from 'react-native'
import { Button } from '../components/Button'
import { CardSkill } from '../components/CardSkill'


export const Home = () => {

  const [newSkill, setNewSkill] = useState('')

  const [mySkills, setMySkills] = useState([])

  useEffect(() => {
    console.log(mySkills)
  }, [mySkills])

  const handleNewSkill = () => {
    if (newSkill) {
      setMySkills(oldSkills => [...oldSkills, newSkill])

      setNewSkill('')

    }
  }

  const handleDeleteSkill = (skill) => {
    const updateSkills = [...mySkills]

    const skillExists = updateSkills.indexOf(skill)

    if (skillExists >= 0) {
      updateSkills.splice(skillExists, 1)
      setMySkills([...updateSkills])

    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome, Renan!
      </Text>

      <TextInput style={styles.input} placeholder='New Skill' placeholderTextColor='#555' onChangeText={setNewSkill} value={newSkill} />

      <Button handlePress={handleNewSkill} />

      <Text style={[styles.text, { marginVertical: 30 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <CardSkill skill={item} deleteSkill={handleDeleteSkill} />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 30,
      paddingVertical: 70

    },
    text: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#1f1e25',
      color: '#fff',
      padding: Platform.OS == 'ios' ? 15 : 10,
      fontSize: 18,
      borderRadius: 7,
      marginTop: 30,
    },
  }
)