import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Spotify1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.style7}>
        <Svg
          viewBox="-0 -0 19.98373831775701 19.98373831775701"
          style={styles.path2}
        >
          <Path
            strokeWidth={0}
            fill="rgba(0,217,95,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M19.98 9.99 C19.98 15.51 15.51 19.98 9.99 19.98 C4.47 19.98 0.00 15.51 0.00 9.99 C0.00 4.47 4.47 0.00 9.99 0.00 C15.51 0.00 19.98 4.47 19.98 9.99 Z M14.10 13.57 C13.17 13.02 12.11 12.64 10.95 12.42 C10.03 12.24 9.05 12.17 8.03 12.21 C6.30 12.26 5.06 12.60 5.00 12.62 C4.64 12.72 4.43 13.09 4.53 13.46 C4.63 13.82 5.00 14.03 5.37 13.93 C5.38 13.93 6.53 13.62 8.11 13.57 C9.54 13.53 11.61 13.70 13.41 14.75 C13.51 14.81 13.63 14.84 13.75 14.84 C13.98 14.84 14.21 14.72 14.34 14.50 C14.53 14.18 14.42 13.76 14.10 13.57 Z M15.32 10.76 C14.22 10.11 12.97 9.66 11.59 9.40 C10.51 9.19 9.35 9.11 8.14 9.15 C6.09 9.21 4.61 9.61 4.55 9.63 C4.12 9.75 3.87 10.19 3.99 10.62 C4.10 11.06 4.55 11.31 4.98 11.19 C4.99 11.19 6.36 10.82 8.23 10.76 C9.92 10.71 12.38 10.91 14.50 12.15 C14.63 12.23 14.77 12.26 14.91 12.26 C15.19 12.26 15.46 12.12 15.61 11.86 C15.84 11.48 15.71 10.98 15.32 10.76 Z M17.25 8.97 C17.53 8.50 17.37 7.89 16.89 7.61 C15.55 6.83 14.01 6.27 12.32 5.95 C10.99 5.69 9.57 5.59 8.08 5.64 C5.57 5.72 3.76 6.21 3.68 6.23 C3.15 6.38 2.84 6.93 2.99 7.45 C3.14 7.98 3.68 8.29 4.21 8.15 C4.28 8.13 10.84 6.37 15.89 9.33 C16.05 9.42 16.22 9.46 16.39 9.46 C16.73 9.46 17.07 9.29 17.25 8.97 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style7: {
    width: 20,
    height: 20,
    opacity: 1,
    marginTop: 2,
    marginLeft: 2
  },
  path2: {
    width: 20,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

export default Spotify1;
