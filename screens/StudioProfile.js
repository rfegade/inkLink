import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function StudioProfile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            // width: 430,
            // height: 932,
            // backgroundColor: "#f9f9f9",
            // position: "relative",
            // overflow: "hidden",
            // marginTop: 0,
            // marginRight: "auto",
            // marginBottom: 0,
            // marginLeft: "auto",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              width: 430,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 16,
              paddingLeft: 0,
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              backgroundColor: "#ffffff",
              position: "relative",
              zIndex: 18,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <View
              style={{
                display: "flex",
                width: 430,
                paddingTop: 16,
                paddingRight: 24,
                paddingBottom: 16,
                paddingLeft: 24,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 19,
              }}
            >
              <Text
                style={{
                  display: "flex",
                  width: 38,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  flexBasis: "auto",
                  fontFamily: "SF Pro Text",
                  fontSize: 16.559999465942383,
                  fontWeight: "600",
                  lineHeight: 19.762,
                  color: "#000000",
                  letterSpacing: -0.37,
                  position: "relative",
                  textAlign: "center",
                  zIndex: 20,
                }}
                numberOfLines={1}
              >
                9:00
              </Text>
              <View
                style={{
                  width: 75.072,
                  height: 17.664,
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 21,
                }}
              >
                <View
                  style={{
                    width: "30.88%",
                    height: "93.75%",
                    position: "absolute",
                    top: "6.25%",
                    left: "29.41%",
                    zIndex: 23,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 16.928,
                      height: 12.144,
                      position: "relative",
                      zIndex: 24,
                      marginTop: 1.472,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 2.944,
                    }}
                    // source={require("./assets/images/0b0c6e92-ae0a-4056-b57d-8309b1bc5e1b.png")}
                    resizeMode="cover"
                  />
                </View>
                <ImageBackground
                  style={{
                    width: 27.6,
                    height: 13.248,
                    position: "absolute",
                    top: 2.208,
                    right: 0,
                    zIndex: 22,
                  }}
                  // source={require("./assets/images/4bbb2fe9-69e3-485a-bcdb-5c04c8cf6e8f.png")}
                  resizeMode="cover"
                />
                <View
                  style={{
                    width: 19.872,
                    height: 13.248,
                    position: "absolute",
                    top: 2.208,
                    right: 55.2,
                    zIndex: 25,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 18.768,
                      height: 11.776,
                      position: "relative",
                      zIndex: 26,
                      marginTop: 0.74,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.74,
                    }}
                    // source={require("./assets/images/b6bd3015-8004-49cc-84e8-5e49df0d523d.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                width: 398,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 27,
              }}
            >
              <View
                style={{
                  display: "flex",
                  width: 24,
                  flexDirection: "row",
                  gap: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 28,
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 29,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 16,
                      height: 10,
                      position: "relative",
                      zIndex: 30,
                      marginTop: 7,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 4,
                    }}
                    // source={require("./assets/images/6e11ba95-d69f-497d-850f-6a7f15d77f85.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  width: 103,
                  height: 30,
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  zIndex: 33,
                  transform: [{ translateY: -15 }, { translateX: -51.5 }],
                }}
              >
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: "auto",
                    fontFamily: "Poppins",
                    fontSize: 20,
                    fontWeight: "500",
                    lineHeight: 30,
                    color: "#414141",
                    letterSpacing: -0.37,
                    position: "relative",
                    textAlign: "left",
                    zIndex: 34,
                  }}
                  numberOfLines={1}
                >
                  Edit Studio
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  width: 102,
                  height: 40,
                  paddingTop: 8,
                  paddingRight: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  flexDirection: "row",
                  gap: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  backgroundColor: "#e5601e",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  borderBottomLeftRadius: 4,
                  position: "relative",
                  zIndex: 31,
                }}
              >
                <Text
                  style={{
                    display: "flex",
                    width: 60,
                    height: 24,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexShrink: 0,
                    flexBasis: "auto",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    fontWeight: "500",
                    lineHeight: 24,
                    color: "#ffffff",
                    position: "relative",
                    textAlign: "center",
                    zIndex: 32,
                  }}
                  numberOfLines={1}
                >
                  Update
                </Text>
              </View>
            </View>
          </View>

          {/* Profile Info */}
          <View
            style={{
              display: "flex",
              width: 398,
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              position: "relative",
              marginTop: 16,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 16,
            }}
          >
            <View
              style={{
                display: "flex",
                paddingTop: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                gap: 16,
                alignItems: "center",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                backgroundColor: "#ffffff",
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 2,
                position: "relative",
                zIndex: 1,
              }}
            >
              <ImageBackground
                style={{
                  display: "flex",
                  width: 175,
                  height: 175,
                  paddingTop: 12,
                  paddingRight: 112,
                  paddingBottom: 12,
                  paddingLeft: 112,
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  borderTopLeftRadius: 92,
                  borderTopRightRadius: 92,
                  borderBottomRightRadius: 92,
                  borderBottomLeftRadius: 92,
                  position: "relative",
                  zIndex: 2,
                }}
                // source={require("./assets/images/75342c664c60de7b7315d62e94cb9285d82440ec.png")}
                resizeMode="cover"
              >
                <View
                  style={{
                    display: "flex",
                    width: 51,
                    gap: 2,
                    alignItems: "center",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 4,
                    }}
                  >
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 5,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 6,
                        }}
                        // source={require("./assets/images/0f7965e0-2f07-49ee-8646-ee1e5fc73ba2.png")}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      height: 21,
                      flexShrink: 0,
                      flexBasis: "auto",
                      fontFamily: "Poppins",
                      fontSize: 14,
                      fontWeight: "500",
                      lineHeight: 21,
                      color: "#e0e0e0",
                      position: "relative",
                      textAlign: "left",
                      zIndex: 7,
                    }}
                    numberOfLines={1}
                  >
                    Upload
                  </Text>
                </View>
              </ImageBackground>
              <View
                style={{
                  display: "flex",
                  width: 366,
                  gap: 8,
                  alignItems: "flex-start",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 8,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    width: 126,
                    paddingTop: 0,
                    paddingRight: 8,
                    paddingBottom: 0,
                    paddingLeft: 8,
                    flexDirection: "row",
                    gap: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 9,
                  }}
                >
                  <Text
                    style={{
                      width: 110,
                      flexShrink: 0,
                      fontFamily: "Poppins",
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 24,
                      letterSpacing: -0.37,
                      position: "relative",
                      textAlign: "left",
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "600",
                        lineHeight: 24,
                        color: "#757575",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                      }}
                    >
                      Studio Name
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "600",
                        lineHeight: 24,
                        color: "#e6737c",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                      }}
                    >
                      *
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    flexDirection: "row",
                    gap: 16,
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    borderBottomRightRadius: 2,
                    borderBottomLeftRadius: 2,
                    borderWidth: 1,
                    borderColor: "#e0e0e0",
                    borderStyle: "solid",
                    position: "relative",
                    zIndex: 11,
                  }}
                >
                  <Text
                    style={{
                      height: 27,
                      flexShrink: 0,
                      flexBasis: "auto",
                      fontFamily: "Poppins",
                      fontSize: 18,
                      fontWeight: "400",
                      lineHeight: 27,
                      color: "#bdbdbd",
                      letterSpacing: -0.37,
                      position: "relative",
                      textAlign: "left",
                      zIndex: 12,
                    }}
                    numberOfLines={1}
                  >
                    Alien Tattoo Studio
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  width: 366,
                  gap: 8,
                  alignItems: "flex-start",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 13,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    width: 68,
                    paddingTop: 0,
                    paddingRight: 8,
                    paddingBottom: 0,
                    paddingLeft: 8,
                    flexDirection: "row",
                    gap: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 14,
                  }}
                >
                  <Text
                    style={{
                      width: 52,
                      flexShrink: 0,
                      fontFamily: "Poppins",
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 24,
                      letterSpacing: -0.37,
                      position: "relative",
                      textAlign: "left",
                      zIndex: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "600",
                        lineHeight: 24,
                        color: "#757575",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                      }}
                    >
                      Email
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "600",
                        lineHeight: 24,
                        color: "#e6737c",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                      }}
                    >
                      *
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    flexDirection: "row",
                    gap: 16,
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    borderBottomRightRadius: 2,
                    borderBottomLeftRadius: 2,
                    borderWidth: 1,
                    borderColor: "#e0e0e0",
                    borderStyle: "solid",
                    position: "relative",
                    zIndex: 16,
                  }}
                >
                  <Text
                    style={{
                      height: 27,
                      flexShrink: 0,
                      flexBasis: "auto",
                      fontFamily: "Poppins",
                      fontSize: 18,
                      fontWeight: "400",
                      lineHeight: 27,
                      color: "#bdbdbd",
                      letterSpacing: -0.37,
                      position: "relative",
                      textAlign: "left",
                      zIndex: 17,
                    }}
                    numberOfLines={1}
                  >
                    alien@mymail.com
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* ARtists Profit Share */}
          {/* <View
            style={{
              display: "flex",
              width: 398,
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 35,
              marginTop: 16,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 16,
            }}
          >
            <View
              style={{
                display: "flex",
                paddingTop: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                gap: 16,
                alignItems: "center",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                backgroundColor: "#ffffff",
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 2,
                position: "relative",
                zIndex: 36,
              }}
            >
              <View
                style={{
                  display: "flex",
                  width: 367,
                  gap: 16,
                  alignItems: "flex-start",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 37,
                }}
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
                    zIndex: 38,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      width: 197,
                      paddingTop: 0,
                      paddingRight: 8,
                      paddingBottom: 0,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 8,
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: 39,
                    }}
                  >
                    <Text
                      style={{
                        height: 27,
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 18,
                        fontWeight: "600",
                        lineHeight: 27,
                        color: "#757575",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                        zIndex: 40,
                      }}
                      numberOfLines={1}
                    >
                      Artists Profit Share %
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    height: 67,
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 41,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 0,
                      paddingRight: 8,
                      paddingBottom: 0,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 8,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: 42,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 342,
                        height: 24,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "500",
                        lineHeight: 24,
                        color: "#414141",
                        position: "relative",
                        textAlign: "left",
                        zIndex: 43,
                      }}
                      numberOfLines={1}
                    >
                      Kent Towne
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      borderTopWidth: 1,
                      borderTopStyle: "solid",
                      borderTopColor: "#e0e0e0",
                      position: "relative",
                      zIndex: 44,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 334,
                        height: 27,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 18,
                        fontWeight: "400",
                        lineHeight: 27,
                        color: "#414141",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                        zIndex: 45,
                      }}
                      numberOfLines={1}
                    >
                      10%
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    height: 67,
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 46,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 0,
                      paddingRight: 8,
                      paddingBottom: 0,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 8,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: 47,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 342,
                        height: 24,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "500",
                        lineHeight: 24,
                        color: "#414141",
                        position: "relative",
                        textAlign: "left",
                        zIndex: 48,
                      }}
                      numberOfLines={1}
                    >
                      Jared Gottlieb
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      borderTopWidth: 1,
                      borderTopStyle: "solid",
                      borderTopColor: "#e0e0e0",
                      position: "relative",
                      zIndex: 49,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 334,
                        height: 27,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 18,
                        fontWeight: "400",
                        lineHeight: 27,
                        color: "#414141",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                        zIndex: 50,
                      }}
                      numberOfLines={1}
                    >
                      15%
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    height: 67,
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 51,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 0,
                      paddingRight: 8,
                      paddingBottom: 0,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 8,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: 52,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 342,
                        height: 24,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 16,
                        fontWeight: "500",
                        lineHeight: 24,
                        color: "#414141",
                        position: "relative",
                        textAlign: "left",
                        zIndex: 53,
                      }}
                      numberOfLines={1}
                    >
                      Tammy O'Reilly
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      flexWrap: "nowrap",
                      borderTopWidth: 1,
                      borderTopStyle: "solid",
                      borderTopColor: "#e0e0e0",
                      position: "relative",
                      zIndex: 54,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        width: 334,
                        height: 27,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexShrink: 0,
                        flexBasis: "auto",
                        fontFamily: "Poppins",
                        fontSize: 18,
                        fontWeight: "400",
                        lineHeight: 27,
                        color: "#414141",
                        letterSpacing: -0.37,
                        position: "relative",
                        textAlign: "left",
                        zIndex: 55,
                      }}
                      numberOfLines={1}
                    >
                      12.5%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
