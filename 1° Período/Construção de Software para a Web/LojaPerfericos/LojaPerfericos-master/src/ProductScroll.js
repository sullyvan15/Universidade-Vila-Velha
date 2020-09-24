import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text
} from "react-native";
import Svg, { Path } from "react-native-svg";

function ProductScroll(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group4StackStackRow}>
        <View style={styles.group4StackStack}>
          <View style={styles.group4Stack}>
            <View style={styles.group4}>
              <TouchableOpacity
                onPress={() => console.log("Navigate to ProductDetail")}
                style={styles.button3}
              >
                <View style={styles.image}>
                  <Svg
                    viewBox="-0 -0 47.21804511278192 47.14285714285711"
                    style={styles.path}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                    ></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.product1}>
              <ImageBackground
                style={styles.rectangle12}
                imageStyle={styles.rectangle12_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection}></Text>
            </View>
            <View style={styles.product2}>
              <ImageBackground
                style={styles.rectangle122}
                imageStyle={styles.rectangle122_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X2}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection2}></Text>
            </View>
            <View style={styles.product5}>
              <ImageBackground
                style={styles.rectangle1224}
                imageStyle={styles.rectangle1224_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X24}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection24}></Text>
            </View>
          </View>
          <View style={styles.group42}>
            <TouchableOpacity
              onPress={() => console.log("Navigate to ProductDetail")}
              style={styles.button4}
            >
              <View style={styles.image2}>
                <Svg
                  viewBox="-0 -0 47.21804511278192 47.14285714285711"
                  style={styles.path2}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                  ></Path>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.group44}>
            <TouchableOpacity
              onPress={() => console.log("Navigate to ProductDetail")}
              style={styles.button52}
            >
              <View style={styles.image4}>
                <Svg
                  viewBox="-0 -0 47.21804511278192 47.14285714285711"
                  style={styles.path4}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                  ></Path>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.group41StackStack}>
          <View style={styles.group41Stack}>
            <View style={styles.group41}>
              <TouchableOpacity
                onPress={() => console.log("Navigate to ProductDetail")}
                style={styles.button2}
              >
                <View style={styles.image1}>
                  <Svg
                    viewBox="-0 -0 47.21804511278192 47.14285714285711"
                    style={styles.path1}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                    ></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.product3}>
              <ImageBackground
                style={styles.rectangle1222}
                imageStyle={styles.rectangle1222_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X22}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection22}></Text>
            </View>
            <View style={styles.product4}>
              <ImageBackground
                style={styles.rectangle1223}
                imageStyle={styles.rectangle1223_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X23}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection23}></Text>
            </View>
            <View style={styles.product6}>
              <ImageBackground
                style={styles.rectangle12242}
                imageStyle={styles.rectangle12242_imageStyle}
                source={require("../assets/images/Gradient_O0XFZCR.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X242}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection242}></Text>
            </View>
          </View>
          <View style={styles.group43}>
            <View style={styles.image3Stack}>
              <View style={styles.image3}>
                <Svg
                  viewBox="-0 -0 47.21804511278192 47.14285714285711"
                  style={styles.path3}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                  ></Path>
                </Svg>
              </View>
              <TouchableOpacity
                onPress={() => console.log("Navigate to ProductDetail")}
                style={styles.button5}
              ></TouchableOpacity>
            </View>
          </View>
          <View style={styles.group45}>
            <TouchableOpacity
              onPress={() => console.log("Navigate to ProductDetail")}
              style={styles.button6}
            >
              <View style={styles.image5}>
                <Svg
                  viewBox="-0 -0 47.21804511278192 47.14285714285711"
                  style={styles.path5}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M41.97 47.14 L5.25 47.14 L0.00 41.90 L0.00 5.24 L5.25 0.00 L41.97 0.00 L47.22 5.24 L47.22 41.90 L41.97 47.14 Z M5.25 39.29 L41.97 39.29 L30.17 23.57 L20.99 35.36 L14.43 27.50 L5.25 39.29 Z"
                  ></Path>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  group4: {
    top: 0,
    left: 3,
    width: 157,
    height: 165,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0
  },
  button3: {
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image: {
    width: 47,
    height: 47,
    opacity: 0.8,
    marginTop: 59,
    marginLeft: 59
  },
  path: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  product1: {
    top: 0,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12_imageStyle: {},
  lakersPurpleV2PngLarge2X: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  product2: {
    top: 185,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle122: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle122_imageStyle: {},
  lakersPurpleV2PngLarge2X2: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection2: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  product5: {
    top: 370,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle1224: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle1224_imageStyle: {},
  lakersPurpleV2PngLarge2X24: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection24: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  group4Stack: {
    top: 0,
    left: 0,
    width: 160,
    height: 618,
    position: "absolute"
  },
  group42: {
    top: 185,
    left: 3,
    width: 157,
    height: 165,
    position: "absolute"
  },
  button4: {
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image2: {
    width: 47,
    height: 47,
    opacity: 0.8,
    marginTop: 59,
    marginLeft: 59
  },
  path2: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group44: {
    top: 370,
    left: 3,
    width: 157,
    height: 165,
    position: "absolute"
  },
  button52: {
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image4: {
    width: 47,
    height: 47,
    opacity: 0.8,
    marginTop: 59,
    marginLeft: 59
  },
  path4: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group4StackStack: {
    width: 160,
    height: 618
  },
  group41: {
    top: 0,
    left: 7,
    width: 157,
    height: 165,
    position: "absolute"
  },
  button2: {
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image1: {
    width: 47,
    height: 47,
    opacity: 0.8,
    marginTop: 59,
    marginLeft: 59
  },
  path1: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  product3: {
    top: 0,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle1222: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle1222_imageStyle: {},
  lakersPurpleV2PngLarge2X22: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection22: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  product4: {
    top: 185,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle1223: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle1223_imageStyle: {},
  lakersPurpleV2PngLarge2X23: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection23: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  product6: {
    top: 370,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12242: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12242_imageStyle: {},
  lakersPurpleV2PngLarge2X242: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection242: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  group41Stack: {
    top: 0,
    left: 0,
    width: 164,
    height: 618,
    position: "absolute"
  },
  group43: {
    top: 185,
    left: 7,
    width: 157,
    height: 165,
    position: "absolute"
  },
  image3: {
    top: 59,
    left: 59,
    width: 47,
    height: 47,
    position: "absolute",
    opacity: 0.8
  },
  path3: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  button5: {
    top: 0,
    left: 0,
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    position: "absolute",
    borderRadius: 20
  },
  image3Stack: {
    width: 157,
    height: 165
  },
  group45: {
    top: 370,
    left: 7,
    width: 157,
    height: 165,
    position: "absolute"
  },
  button6: {
    width: 157,
    height: 165,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image5: {
    width: 47,
    height: 47,
    opacity: 0.8,
    marginTop: 59,
    marginLeft: 59
  },
  path5: {
    width: 47,
    height: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group41StackStack: {
    width: 164,
    height: 618,
    marginLeft: 15
  },
  group4StackStackRow: {
    height: 618,
    flexDirection: "row",
    flex: 1
  }
});

export default ProductScroll;
