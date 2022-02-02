import React, { useEffect, useState } from "react"
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { FriendList } from "../components/FriendList"

import api from "../api/api"

interface Friends {
  id: string
  name: string
  likes: number
}

export const Home = () => {
  const [name, setName] = useState("")
  const [data, setData] = useState<Friends[]>([])

  async function handleSearch() {
    const { data } = await api.get(`/friends?q=${name}`)
    setData(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do cliente"
        onChangeText={setName}
      />

      <Button title="Buscar" onPress={handleSearch} />
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <FriendList data={data} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
})
