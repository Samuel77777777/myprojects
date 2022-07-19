import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "power",
    description: "Hey! Is this item still available?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 2,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 3,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 4,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 5,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 6,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
  {
    id: 7,
    title: "Samuel",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/sp.jpg"),
  },
];

function NotificationScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/sp.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default NotificationScreen;
