import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { data } from "./Products";

const ListView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.headingContent, { flex: 1.5 }]}>
          <Text style={styles.headings}>Products</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Price</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Kgs</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Pieces</Text>
        </View>
      </View>
      {data.map((item) => {
        return (
          <View
            style={[
              styles.rows,
              { backgroundColor: item.id % 2 == 0 ? "#f3deea" : "white" },
            ]}
            key={item.id}
          >
            <View style={[styles.columns, { flex: 1.5 }]}>
              <Text style={styles.text} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
            <View style={styles.columns}>
              <Text
                style={[
                  styles.text,
                  { color: "green", fontSize: perfectSize(12) },
                ]}
              >
                Starts From
              </Text>
              <Text style={styles.text}>{item.price}</Text>
            </View>
            <View style={styles.columns}>
              <TextInput
                placeholder="Kgs"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.columns}>
              <TextInput
                placeholder="Pieces"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ListView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: perfectSize(20),
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    paddingVertical: perfectSize(15),
  },
  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    color: "white",
  },
  headingContent: {
    flex: 1,
    alignItems: "center",
  },
  rows: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "#eff8fb",
    paddingVertical: perfectSize(10),
  },
  columns: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(12),
    width: 70,
    flex: 1,
    textAlign: "center",
    borderWidth: 0.7,
  },
});
