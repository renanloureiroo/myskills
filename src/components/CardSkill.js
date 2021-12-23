import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const CardSkill = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.skillContainer} key={skill} activeOpacity={0.7}>
      <Text style={styles.skillText}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
})