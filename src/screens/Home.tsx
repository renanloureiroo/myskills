import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  FlatList,
} from "react-native"
import { Button } from "../components/Button"
import { CardSkill } from "../components/CardSkill"

export type Skill = {
  id: string
  skill: string
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState<string>("")
  const [mySkills, setMySkills] = useState<Skill[]>([])
  const [greeting, setGreeting] = useState<string>("")

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour <= 12) {
      setGreeting("Good morning")
    } else if (currentHour > 12 && currentHour <= 18) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good night")
    }
  }, [])

  const handleNewSkill = (): void => {
    if (newSkill) {
      const data: Skill = {
        id: String(new Date().getTime()),
        skill: newSkill,
      }
      setMySkills((oldSkills) => [...oldSkills, data])

      setNewSkill("")
    }
  }

  const handleDeleteSkill = (skill: Skill): void => {
    const updateSkills = [...mySkills]

    const skillExists = updateSkills.indexOf(skill)

    if (skillExists >= 0) {
      updateSkills.splice(skillExists, 1)
      setMySkills([...updateSkills])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Renan!</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button handlePress={handleNewSkill} />

      <Text style={[styles.text, { marginVertical: 30 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardSkill skill={item} deleteSkill={handleDeleteSkill} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: Platform.OS == "ios" ? 15 : 10,
    fontSize: 18,
    borderRadius: 7,
    marginTop: 30,
  },
  greeting: {
    color: "#fff",
    marginTop: 10,
  },
})
