import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  useSharedStyles,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";
import { Home, Search, CartTab, Favourite, Notification } from "../screens";
import {
  COLORS,
  SIZES,
  FONTS,
  constants,
  icons,
  dummyData,
} from "../constants";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}
    >
      {/* header */}
      {/* content */}
      <Text>MainLayoutSCree</Text>
      {/* footer */}
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
