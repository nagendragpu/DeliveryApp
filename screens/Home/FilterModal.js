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
  const [showFilterMode, setShowFilterMode] = React.useState(isVisible);

  React.useEffect(() => {
    if (!showFilterMode) {
      onClose();
    }
  }, [showFilterMode]);

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
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({});
