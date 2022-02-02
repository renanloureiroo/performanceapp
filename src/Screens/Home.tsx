import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { FriendList } from "../components/FriendList"

export const Home = () => {
  const [name, setName] = useState("")

  function handleSearch() {}

  return (
    <View style={styles.container}>
      <Text>Amigos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do cliente"
        onChangeText={setName}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendList data={[]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },

  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  },
})
