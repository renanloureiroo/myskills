import React from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native"

export const Button = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
})
