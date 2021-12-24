import React from "react"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Skill } from "../screens/Home"

type CardSkillProps = {
  skill: {
    id: string
    skill: string
  }
  deleteSkill: (id: string) => void
}

export const CardSkill = ({ skill, deleteSkill }: CardSkillProps) => {
  return (
    <TouchableOpacity style={styles.skillContainer} activeOpacity={0.7}>
      <Text style={styles.skillText}>{skill.skill}</Text>
      <Icon
        onPress={() => deleteSkill(skill.id)}
        style={styles.delete}
        name="delete-outline"
        color="#ff3b1f"
        size={30}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  skillContainer: {
    flexDirection: "row",
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    position: "relative",
  },
  skillText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  delete: {
    position: "absolute",
    right: 0,
    marginHorizontal: 20,
  },
})
