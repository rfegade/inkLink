
/* import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function ArtistInvite() {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      > 
      
        <View
          style={{
            width: 430,
            height: 932,
            backgroundColor: '#f9f9f9',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: 430,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 16,
              paddingLeft: 0,
              gap: 16,
              alignItems: 'center',
              flexWrap: 'nowrap',
              backgroundColor: '#ffffff',
              position: 'relative',
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
           { <View
              style={{
                display: 'flex',
                width: 430,
                paddingTop: 16,
                paddingRight: 24,
                paddingBottom: 16,
                paddingLeft: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 38,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'SF Pro Text',
                  fontSize: 16.559999465942383,
                  fontWeight: '600',
                  lineHeight: 19.762,
                  color: '#000000',
                  letterSpacing: -0.37,
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 2,
                }}
                numberOfLines={1}
              >
                
              </Text>
              <View
                style={{
                  width: 75.072,
                  height: 17.664,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <View
                  style={{
                    width: '30.88%',
                    height: '93.75%',
                    position: 'absolute',
                    top: '6.25%',
                    left: '29.41%',
                    zIndex: 5,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 16.928,
                      height: 12.144,
                      position: 'relative',
                      zIndex: 6,
                      marginTop: 1.472,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 2.944,
                    }}
                    //source={require('./assets/images/19accc63-2823-4ef4-99a0-e898c7836bca.png')}
                    resizeMode='cover'
                  />
                </View>
                <ImageBackground
                  style={{
                    width: 27.6,
                    height: 13.248,
                    position: 'absolute',
                    top: 2.208,
                    right: 0,
                    zIndex: 4,
                  }}
                  //source={require('./assets/images/44ae0cfc-00f9-458f-80c9-36c8cc0b46e5.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 19.872,
                    height: 13.248,
                    position: 'absolute',
                    top: 2.208,
                    right: 55.2,
                    zIndex: 7,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 18.768,
                      height: 11.776,
                      position: 'relative',
                      zIndex: 8,
                      marginTop: 0.74,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.74,
                    }}
                    //source={require('./assets/images/93474194-2ab0-4749-88c2-3862d0829ca2.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
            </View> }
            <View
              style={{
                display: 'flex',
                width: 398,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 9,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  width: 24,
                  flexDirection: 'row',
                  gap: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                { <View
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 11,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 16,
                      height: 10,
                      position: 'relative',
                      zIndex: 12,
                      marginTop: 7,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 4,
                    }}
                    //source={require('./assets/images/7fb93adb-67d5-4161-9c20-2ab2c1a149ec.png')}
                  />
                </View> }
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 109,
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 13,
                }}
              >
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: '500',
                    lineHeight: 30,
                    color: '#414141',
                    letterSpacing: -0.37,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 14,
                  }}
                  numberOfLines={1}
                >
                  Invite Artist
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderWidth: 2,
                  borderColor: '#e5601e',
                  borderStyle: 'solid',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 15,
                }}
              >
                <ImageBackground
                  style={{
                    display: 'flex',
                    width: 32,
                    height: 32,
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    gap: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 16,
                    marginTop: 4,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 4,
                  }}
                  //source={require('./assets/images/75342c664c60de7b7315d62e94cb9285d82440ec.png')}
                  resizeMode='cover'
                />
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              width: 398,
              paddingTop: 16,
              paddingRight: 16,
              paddingBottom: 16,
              paddingLeft: 16,
              gap: 16,
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 2,
              position: 'relative',
              zIndex: 17,
              marginTop: 16,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 16,
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 18,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  paddingTop: 0,
                  paddingRight: 8,
                  paddingBottom: 0,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 19,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 342,
                    height: 24,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '600',
                    lineHeight: 24,
                    color: '#757575',
                    letterSpacing: -0.37,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 20,
                  }}
                  numberOfLines={1}
                >
                  Profit Sharing %
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 8,
                  paddingRight: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 16,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  borderTopWidth: 1,
                  borderTopStyle: 'solid',
                  borderTopColor: '#e0e0e0',
                  position: 'relative',
                  zIndex: 21,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 334,
                    height: 27,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    fontWeight: '400',
                    lineHeight: 27,
                    color: '#bdbdbd',
                    letterSpacing: -0.37,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 22,
                  }}
                  numberOfLines={1}
                >
                  enter percentage value
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 23,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  paddingTop: 0,
                  paddingRight: 8,
                  paddingBottom: 0,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 24,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 342,
                    height: 24,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '600',
                    lineHeight: 24,
                    color: '#757575',
                    letterSpacing: -0.37,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 25,
                  }}
                  numberOfLines={1}
                >
                  Email of the Artist
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 8,
                  paddingRight: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 16,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  borderTopWidth: 1,
                  borderTopStyle: 'solid',
                  borderTopColor: '#e0e0e0',
                  position: 'relative',
                  zIndex: 26,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 334,
                    height: 27,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    fontWeight: '400',
                    lineHeight: 27,
                    color: '#bdbdbd',
                    letterSpacing: -0.37,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 27,
                  }}
                  numberOfLines={1}
                >
                  enter email id
                </Text>
              </View>
            </View>
            {<View
              style={{
                width: 24,
                height: 24,
                flexShrink: 0,
                position: 'absolute',
                top: 133,
                left: 350,
                overflow: 'hidden',
                zIndex: 28,
              }}
            >
              <ImageBackground
                style={{
                  width: 19,
                  height: 19,
                  position: 'relative',
                  zIndex: 29,
                  marginTop: 2.5,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.5,
                }}
                //source={require('./assets/images/35ed9442-ece1-44bc-a890-d17788863c23.png')}
              />
            </View> }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} */

  import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
TextInput
} from 'react-native';

const { width } = Dimensions.get('window'); // Get the device width

export default function ArtistInvite() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.headerContainer}>
          
            <View style={styles.titleContainer}>
              <View style={styles.backIconContainer}></View>
              <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>Invite Artist</Text>
              </View>
              <View style={styles.profileImageContainer}>
                <ImageBackground source={require("../assets/studioprofile.png")}  style={styles.profileImage} />
              </View>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Profit Sharing %</Text>
              <View style={styles.inputField}>
                <Text style={styles.placeholderText}>enter percentage value</Text>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email of the Artist</Text>
              <View style={styles.inputField}>
                <Text style={styles.placeholderText}>enter email id</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    width: '100%',
    height: 932,
    backgroundColor: '#f9f9f9',
    position: 'relative',
    overflow: 'hidden',
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
/*   header: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  }, */
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20, // Example for icon, you can replace with ImageBackground or Image
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginLeft: 5,
  },
  titleContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIconContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },
  titleTextContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    color: '#414141',
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    padding: 16,
    marginTop: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#757575',
  },
  inputField: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    marginTop: 8,
  },
  placeholderText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '400',
    color: '#bdbdbd',
  },
  profileImage: {
    width:40,height:40},
  addIconContainer: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 133,
    right: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },
});
