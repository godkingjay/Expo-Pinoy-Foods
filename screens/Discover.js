import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import discoverCategories from "../assets/FoodsDB/discoverCategoriesDB";
import globalStyles from "../assets/styles/globalStyles";

export default function Discover({ navigation, route }) {
  return(
    <View style={ globalStyles.screen }>
      <View style = { styles.horizontalCardsContainer }>
        <FlatList
          data = { discoverCategories }
          renderItem = {({ item }) => (
            <HorizontalCardsContainer navigation={ navigation } route={ route } foodCategory={ item }/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCardsContainer: {
    paddingVertical: 8
  },
});