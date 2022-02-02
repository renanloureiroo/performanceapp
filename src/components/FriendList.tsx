import React from "react"
import { View } from "react-native"
import { Friend } from "./Friend"

interface Props {
  data: {
    id: string
    name: string
    likes: number
  }[]
}

export const FriendList = ({ data }: Props) => {
  return (
    <View>
      {data.map((item) => (
        <Friend key={item.id} data={item} />
      ))}
    </View>
  )
}
