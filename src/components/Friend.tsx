import React, { memo } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface Props {
  data: {
    id: string
    name: string
    likes: number
  }
  follow: () => void
}

const FriendComponent = ({ data, follow }: Props) => {
  return (
    <View>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>
      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})
