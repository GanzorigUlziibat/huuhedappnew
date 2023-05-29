import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const FirstRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Амьтан</Text>
    </View>
    <ScrollView>
      <Pressable>
        <View style={styles.subview}>
          <Image style={styles.postericon} source={require('../images/poster1.png')}></Image>
          <Text style={styles.postertext}>Амьтад</Text>
        </View>
      </Pressable>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Хүнс</Text>
    </View>
    <ScrollView>
      <View>
        <Pressable>
          <View></View>
        </Pressable>
      </View>
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Миний</Text>
    </View>
    <ScrollView>
      <View>
        <Pressable>
          <View></View>
        </Pressable>
      </View>
    </ScrollView>
  </View>
);

const FourthRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Гэр</Text>
    </View>
    <View></View>
  </View>
);
const FifthRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Тээврийн хэрэгсэл</Text>
    </View>
    <View></View>
  </View>
);

const SixthRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Өнгө, дүрс, үсэг, тоо</Text>
    </View>
    <View></View>
  </View>
);
const SeventhRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Цаг агаар, цаг</Text>
    </View>
    <View></View>
  </View>
);
const EightthRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Далбаа</Text>
    </View>
    <View></View>
  </View>
);
const NinethRoute = () => (
  <View style={styles.tabcontainer}>
    <View style={styles.thtab}>
      <Text style={styles.thtext}>Бидний тухай</Text>
    </View>
    <View></View>
  </View>
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: ThirdRoute,
  4: FourthRoute,
  5: FifthRoute,
  6: SixthRoute,
  7: SeventhRoute,
  8: EightthRoute,
  9: NinethRoute,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", icon: "dog" },
    { key: "2", icon: "hamburger" },
    { key: "3", icon: "baby" },
    { key: "4", icon: "home" },
    { key: "5", icon: "car" },
    { key: "6", icon: "sort-numeric-up" },
    { key: "7", icon: "cloud-sun" },
    { key: "8", icon: "flag" },
    { key: "9", icon: "info" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderIcon={({ route, color }) => (
        <FontAwesome5
          name={route.icon}
          style={{ marginTop: 10 }}
          size={40}
          color={color}
        ></FontAwesome5>
      )}
      style={styles.tab}
      tabStyle={{ width: 80 }}
      indicatorStyle={{ backgroundColor: "white" }}
      scrollEnabled={true}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tab: {
    height: 100,
    backgroundColor: "#5D3FD3",
  },
  thtab: {
    backgroundColor: "#5D3FD3",
    height: 55,
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabcontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  thtext: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  subview: {
    margin: 15,
    height: 70,
    borderRadius: 20,
    flexDirection: "row",
    elevation: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  postericon: {
    margin: 20,
    width: 55,
    height: 55,
  },
  postertext: {
    fontSize: 20,
  }
});