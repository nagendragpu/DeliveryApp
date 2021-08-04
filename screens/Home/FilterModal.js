import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showFilterMode, setShowFilterMode] = React.useState(isVisible);

  React.useEffect(() => {
    if (showFilterMode) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterMode]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 550],
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        {/* transparent Background */}

        <TouchableWithoutFeedback onPress={() => setShowFilterMode(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        ></Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({});
