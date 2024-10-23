import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function AvailabilityDays() {
  return (
    <View style={styles.calendarContainer}>
      {["M", "T", "W", "T", "F", "S"].map((day, index) => (
        <View
          key={index}
          style={{
            display: "flex",
            width: 32,
            height: 32,
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            flexWrap: "nowrap",
            backgroundColor: index % 2 === 0 ? "#e5601e" : "#9e9e9e",
            borderRadius: 16,
            position: "relative",
            zIndex: 26 + index,
          }}
        >
          <Text style={styles.days} numberOfLines={1}>
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 25,
    width: "100%", // Full width
  },
  days: {
    height: 24,
    alignSelf: "stretch",
    flexShrink: 0,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: "#f9f9f9",
    textAlign: "center",
  },
});
