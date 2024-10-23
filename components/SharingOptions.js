import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import StudioLayout from "../layouts/StudioLayout";

export default function SharingOptions() {
  return (
    <StudioLayout>
      <View
        style={styles.container}
        // style={{
        //   flex: 1,
        //   gap: 16,
        //   alignItems: "flex-start",
        //   flexWrap: "nowrap",
        //   position: "relative",
        //   zIndex: 15,
        //   marginTop: 16,
        //   marginHorizontal: 16,
        //   backgroundColor: "#FFFFFF",
        //   width: "90%",
        //   padding: 15,
        // }}
      >
        <View
          style={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
          }}
        >
          <Text
            style={{
              height: 24,
              alignSelf: "stretch",
              flexShrink: 0,
              flexBasis: "auto",
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 24,
              color: "#414141",
              position: "relative",
              textAlign: "left",
              zIndex: 1,
            }}
            numberOfLines={1}
          >
            Sharing Options
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Text
              style={{
                height: 21,
                flexShrink: 0,
                flexBasis: "auto",
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                color: "#9e9e9e",
                position: "relative",
                textAlign: "left",
                zIndex: 3,
              }}
              numberOfLines={1}
            >
              Let this link expire after first booking
            </Text>
            <View
              style={{
                display: "flex",
                width: 24,
                height: 24,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                backgroundColor: "#0078fb",
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 2,
                position: "relative",
                zIndex: 4,
              }}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 5,
                }}
              >
                <ImageBackground
                  style={{
                    width: 11.667,
                    height: 8.94,
                    position: "relative",
                    zIndex: 6,
                    marginTop: 3.727,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 2.333,
                  }}
                  // source={require("./assets/images/a18404e1-93de-484d-986e-4e2fd66cce9c.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            zIndex: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              paddingTop: 8,
              paddingRight: 0,
              paddingBottom: 8,
              paddingLeft: 0,
              flexDirection: "row",
              gap: 24,
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 8,
            }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                zIndex: 9,
              }}
            >
              <ImageBackground
                style={{
                  width: 13.333,
                  height: 13.333,
                  position: "relative",
                  zIndex: 10,
                  marginTop: 1.333,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 1.333,
                }}
                //   source={require("./assets/images/b4a2f2d7-7dc5-4491-b54f-c8e44be427c8.png")}
              />
            </View>
            <Text
              style={{
                height: 24,
                flexShrink: 0,
                flexBasis: "auto",
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 24,
                color: "#414141",
                position: "relative",
                textAlign: "left",
                zIndex: 11,
              }}
              numberOfLines={1}
            >
              Copy Link
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              paddingTop: 8,
              paddingRight: 0,
              paddingBottom: 8,
              paddingLeft: 0,
              flexDirection: "row",
              gap: 24,
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 12,
            }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                zIndex: 13,
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  position: "relative",
                  zIndex: 14,
                  marginTop: 2,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2,
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 4,
                    position: "relative",
                    zIndex: 19,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: "41.67%",
                      height: "125%",
                      position: "absolute",
                      top: "-12.5%",
                      left: "-4.17%",
                      zIndex: 15,
                    }}
                    //   source={require("./assets/images/746ba411-c8e4-4610-a9b1-1ad901cda217.png")}
                  />
                  <ImageBackground
                    style={{
                      width: "8.33%",
                      height: "108.33%",
                      position: "absolute",
                      top: "-12.5%",
                      left: "45.83%",
                      zIndex: 18,
                    }}
                    //   source={require("./assets/images/7f831881-2bdb-4201-b349-2363802b1d98.png")}
                  />
                  <ImageBackground
                    style={{
                      width: "41.67%",
                      height: "125%",
                      position: "absolute",
                      top: "-12.5%",
                      left: "62.5%",
                      zIndex: 19,
                    }}
                    //   source={require("./assets/images/eaf0fcab-2595-4ff1-a7dc-01283d7728e7.png")}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: "41.67%",
                    height: "8.33%",
                    position: "absolute",
                    top: "45.83%",
                    left: "-4.17%",
                    zIndex: 17,
                  }}
                  // source={require("./assets/images/51968294-7a1c-45c5-9afb-4ceed044e468.png")}
                />
                <View
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "50%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    zIndex: 20,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 5,
                      height: 5,
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 16,
                    }}
                    //   source={require("./assets/images/4137626d-6ffe-4212-aabd-d7bae3c5ea55.png")}
                  />
                  <ImageBackground
                    style={{
                      width: 7,
                      height: 7,
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 20,
                    }}
                    //   source={require("./assets/images/854cf473-c1cc-4604-886e-b4d2d36fe49b.png")}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                height: 24,
                flexShrink: 0,
                flexBasis: "auto",
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 24,
                color: "#414141",
                position: "relative",
                textAlign: "left",
                zIndex: 21,
              }}
              numberOfLines={1}
            >
              QR Code
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              paddingTop: 8,
              paddingRight: 0,
              paddingBottom: 8,
              paddingLeft: 0,
              flexDirection: "row",
              gap: 24,
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 22,
            }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                zIndex: 23,
              }}
            >
              <View
                style={{
                  width: 8.006,
                  height: 0.67,
                  position: "relative",
                  zIndex: 24,
                  marginTop: 8,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: "25.06%",
                    height: "300%",
                    position: "absolute",
                    top: "-150%",
                    left: "37.44%",
                    zIndex: 25,
                  }}
                  // source={require("./assets/images/17e3e937-8bd6-4bb4-9b0f-b25dedcce68a.png")}
                />
                <ImageBackground
                  style={{
                    width: "25.06%",
                    height: "300%",
                    position: "absolute",
                    top: "-150%",
                    left: "87.43%",
                    zIndex: 26,
                  }}
                  // source={require("./assets/images/4a561cfe-1228-41af-ac5c-59a445e9664f.png")}
                />
                <ImageBackground
                  style={{
                    width: "25.06%",
                    height: "300%",
                    position: "absolute",
                    top: "-150%",
                    left: "-12.49%",
                    zIndex: 27,
                  }}
                  // source={require("./assets/images/2130d099-a281-407a-8750-430cbcd39aac.png")}
                />
              </View>
            </View>
            <Text
              style={{
                height: 24,
                flexShrink: 0,
                flexBasis: "auto",
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 24,
                color: "#414141",
                position: "relative",
                textAlign: "left",
                zIndex: 28,
              }}
              numberOfLines={1}
            >
              Share Via
            </Text>
          </View>
        </View>
      </View>
    </StudioLayout>
  );
}

// SharingOptions.js
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// export default function SharingOptions() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sharing Options</Text>
//       <TouchableOpacity style={styles.optionButton}>
//         <Text style={styles.optionText}>Share via Email</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.optionButton}>
//         <Text style={styles.optionText}>Share via SMS</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%", // Ensure it takes full width in the modal
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  optionButton: {
    backgroundColor: "#0078fb",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});
