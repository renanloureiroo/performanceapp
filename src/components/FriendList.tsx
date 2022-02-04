import React, { useMemo } from "react"
import { FlatList, Text, View } from "react-native"
import { Friend } from "./Friend"

interface Props {
  data: {
    id: string
    name: string
    likes: number
  }[]
  follow: () => void
}

export const FriendList = ({ data, follow }: Props) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes
    }, 0)
  }, [data])

  return (
    <View>
      <Text>Total de likes {totalLikes}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  )
}
