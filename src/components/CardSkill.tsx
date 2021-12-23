import React from "react"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import { StyleSheet, Text, TouchableOpacity } from "react-native"

type CardSkillProps = {
  skill: string
  deleteSkill: (skill: string) => void
}

export const CardSkill = ({ skill, deleteSkill }: CardSkillProps) => {
  return (
    <TouchableOpacity
      style={styles.skillContainer}
      key={skill}
      activeOpacity={0.7}
    >
      <Text style={styles.skillText}>{skill}</Text>
      <Icon
        onPress={() => deleteSkill(skill)}
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
