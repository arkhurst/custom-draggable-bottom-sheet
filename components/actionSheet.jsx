import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";
import CardComponent from "./card";

const { height, width } = Dimensions.get("screen");

const ActionSheet = (props) => {
  const [alignment] = useState(new Animated.Value(0));

  const onActionSheetDragged = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const onActionSheetHide = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 50, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) onActionSheetDragged();
    else if (e.nativeEvent.contentOffset.y < 0) onActionSheetHide();
  };
  return (
    <Fragment>
      <Animated.View style={[styles.container, actionSheetStyle]}>
        <View>
          <ScrollView
            onScroll={(e) => gestureHandler(e)}
            style={styles.grabber}
          ></ScrollView>
        </View>

        <View>
          {props?.actionSheetButtons ? (
            props?.actionSheetButtons?.map((button, i) => (
              <Fragment key={i}>
                <CardComponent
                  title={button.title}
                  description={button.description}
                  onPress={button.onPress}
                  icon={button.icon}
                />
              </Fragment>
            ))
          ) : (
            <Fragment />
          )}
        </View>
      </Animated.View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    height: height / 2.4,
    borderTopRightRadius: 40,
    marginHorizontal: 10,
  },
  grabber: {
    width: 60,
    borderTopWidth: 5,
    borderTopColor: "#aaa",
    marginHorizontal: width / 2.5,
    marginTop: 11,
  },
});

export default ActionSheet;
