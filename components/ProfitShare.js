import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfitShare() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profitContainer}>
          <View>
            <Text style={styles.headerText}>Artists Profit Share %</Text>
          </View>

          <View style={styles.profitItem}>
            <Text style={styles.nameText}>Kent Towne</Text>
            <Text style={styles.percentageText}>10%</Text>
          </View>

          <View style={styles.profitItem}>
            <Text style={styles.nameText}>Jared Gottlieb</Text>
            <Text style={styles.percentageText}>15%</Text>
          </View>

          <View style={styles.profitItem}>
            <Text style={styles.nameText}>Tammy O'Reilly</Text>
            <Text style={styles.percentageText}>12.5%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
    width: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 2,
    alignSelf: "stretch",
  },
  profitContainer: {
    flex: 1,
    gap: 16,
  },

  headerText: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    color: "#757575",
    letterSpacing: -0.37,
  },
  profitItem: {
    flexDirection: "column",
    // justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  nameText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    color: "#414141",
    paddingBottom: 10,
  },
  percentageText: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "400",
    color: "#414141",
  },
});
