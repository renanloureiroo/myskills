import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, TouchableOpacity, ScrollView } from 'react-native'


export const Home = () => {

  const [newSkill, setNewSkill] = useState('')

  const [mySkills, setMySkills] = useState([])

  const handleNewSkill = () => {
    if (newSkill) {
      setMySkills(oldSkills => [...oldSkills, newSkill])

      setNewSkill('')

    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome, Renan!
      </Text>

      <TextInput style={styles.input} placeholder='New Skill' placeholderTextColor='#555' onChangeText={setNewSkill} value={newSkill} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleNewSkill}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginVertical: 30 }]}>
        My Skills
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          mySkills.map(skill => (
            <TouchableOpacity style={styles.skillContainer} key={skill} activeOpacity={0.7}>
              <Text style={styles.skillText}>
                {skill}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
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
    button: {
      backgroundColor: '#a370f7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold'
    },
    skillContainer: {
      backgroundColor: '#1f1e25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 20

    },
    skillText: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    }
  }
)