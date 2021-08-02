import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { HorizontalFoodCard } from "../../components";

import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);

  const [selectedMenuType, setSelectedMenuType] = React.useState(1);

  const [menuList, setMenuList] = React.useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
    return () => {};
  }, []);

  function handleChangeCategory(categoryId, menuTypeId) {
    //find the menu based on the menuTypeId

    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    //set the menu based on the categoryID
    console.log(selectedMenu);

    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={icons.search}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="search food"
        />

        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {renderSearch()}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{renderMenuTypes()}</View>}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
