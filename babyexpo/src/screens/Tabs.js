import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import { Audio } from 'expo-av';
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as SQLite from 'expo-sqlite';
import needful from '../components/needful'

export default function Tabs({ props }) {
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [catListAmitan, setCatListAmitan] = useState([]);
  const [subListAmitan, setSubListAmitan] = useState([]);
  const db = SQLite.openDatabase('babyDatabase.db');
  useEffect(() => {
    // Cat query
    db.transaction((tx) => {
      try {
        tx.executeSql('SELECT * from baby_cat where baby_cat.active=1 order by cat_id', [], (_, { rows }) => {
          const result = rows._array;
          setCatListAmitan(result);
        });
      } catch (error) {
        console.log('Error executing select query:', error);
      }

    });

    //Sub query
    db.transaction((tx) => {

      //Amitan
      try {
        tx.executeSql('SELECT * FROM baby_sub WHERE active = 1 ORDER BY cid, sub_id', [], (_, { rows }) => {
          const result = rows._array;
          setSubListAmitan(result);
        });
      } catch (error) {
        console.log('Error executing select query:', error);
      }

    });
  }, []);
  const playCatSound = async (ind) => {
 
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(needful.cat['cat' + catListAmitan[ind].cid].sound);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Failed to play the sound', error);
    }
  };

  //show cats
  const showAmitanTabs = (ind) => {
    let tabsCat = [];
    // console.log(catListAmitan);
    for (let i = 0; i < catListAmitan.length; i++) {
      if (catListAmitan[i].cid == ind) {
        tabsCat.push(
          <View style={styles.thtab} key={'cat' + catListAmitan[i].cid}>
            <Text style={styles.thtext}>{catListAmitan[i].cat_name}</Text>
            {/* <Text style={styles.thtext}>Амьтан</Text> */}
          </View>
        )
        break
      }

    }
    return tabsCat;
  }

  const amitantablist = (ind) => {
    const tabbody = [];
    for (let i = 0; i < subListAmitan.length; i++) {
      if (subListAmitan[i]?.cid === ind) {
        const sub = subListAmitan[i];
        tabbody.push(
          <Pressable key={'press' + subListAmitan[i].sid} onPress={() => navigation.navigate("Delgerengui", { sid: subListAmitan[i].sid })}>
            <View style={styles.subview}>
              <Image key={'image' + subListAmitan[i].sid} style={styles.postericon} source={needful.sub['sub' + sub?.sid]?.image}></Image>
              <Text key={'txt' + subListAmitan[i].sid} style={styles.postertext}>{sub?.sub_name}</Text>
            </View>
          </Pressable>
        );
      }
    }
    return <View style={styles.iv}>{tabbody}</View>;
  };

  const FirstRoute = (ind) => (
    <View style={styles.tabcontainer}>
      {showAmitanTabs(ind)}
      <ScrollView showsVerticalScrollIndicator={false}>
        {amitantablist(ind)}
      </ScrollView>
    </View>
  );

  const NinethRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Бидний тухай</Text>
      </View>
      <ScrollView>
        <View style={styles.abimg}>
          <Image source={require("../images/logoMandakh1.png")}></Image>
          <Text style={styles.mname}>мандах их сургууль</Text>
          <Text style={styles.itsname}>Мэдээлэл, Технологийн Сургууль</Text>
          <Text style={styles.middleText}>БИД МЭДЛЭГЭЭР БАЯЛГИЙГ БҮТЭЭНЭ</Text>
          <Text style={styles.middleText}>
            Мандах их сургуулийн Мэдээлэл, технологийн сургуулийн багш, оюутнуудын
            хамтын бүтээл юм. Дараа дараагийн нэмэлт сайжруулалтыг элсэгч, дүү нар
            нь сайжруулан, хөгжүүлж байна. Тус аппыг бид үнэ төлбөргүйгээр танд
            болон таны бяцхан үрс, дүү нарт хүргэж байна.
          </Text>
          <Text style={styles.middleText}>
            Зургуудыг https://all-free-download.com/ сайтаас ашигласан болно.
          </Text>
          <Text style={styles.middleText}>
            Та санал хүсэлтээ Мандах их сургуулийн Мэдээлэл, Технологийн Сургууль
            (https://www.facebook.com/MandakhIT) фейсбүүк хуудсанд хандана уу.
          </Text>
          <Text style={styles.middleText}>
            Улс орон, бүс нутгийн далбаа нь тухайн орон нутгийн өмч юм.
          </Text>
          <Text style={styles.middleText}>
            Машин үйлдвэрлэгчдийн лого нь тухайн компанийн эздийн өмч юм.
          </Text>
          <Text style={styles.middleText}>
            Хэрэв та өөрийн зохиогчийн эрхэд хамаарах ямар нэгэн зургийг олсон бол
            бидэнтэй холбоо бариарай. Хүсвэл бид устгаж болно.
          </Text>
          <Text style={styles.littleText}>
            Бүх эрх хуулиар хамгаалагдсан © 2021.
          </Text>
          <Text style={styles.middleText}>
            All images are the property of their respective owners. If you found
            any image copyrighted to yours, Please contact us, so we can remove
            it.
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    "1": () => FirstRoute(1),
    "2": () => FirstRoute(2),
    "3": () => FirstRoute(3),
    "4": () => FirstRoute(9),
    "5": () => FirstRoute(4),
    "6": () => FirstRoute(6),
    "7": () => FirstRoute(8),
    "8": () => FirstRoute(7),
    "9": () => NinethRoute(),
  });

  const [index, setIndex] = React.useState(0);
  const indexchange = () => {
    setIndex()
  }
  useEffect(() => {
    if (catListAmitan.length > 0 && index >= 0 && index < catListAmitan.length) {
      // console.log(catListAmitan[index].cat_id);
      playCatSound(catListAmitan[index].cat_id);
      console.log(index);
    }
  }, [catListAmitan, index]);

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
    marginTop: 0.8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    marginTop: 2,
    height: 70,
    borderRadius: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    backgroundColor: "white",
    alignItems: "center",
  },
  postericon: {
    margin: 15,
    width: 55,
    height: 55,
  },
  postertext: {
    fontSize: 20,
  },
  iv: {
    height: 600,
  },
  abimg: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  mname: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    marginTop: 15,
    color: '#1d5ede',
  },
  itsname: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 15,
    color: '#1d5ede',
  },
  middleText: {
    margin: 3,
    color: '#1d5ede',
    textAlign: 'center',
  },
  littleText: {
    margin: 5,
    fontSize: 12,
    color: '#1d5ede',
    textAlign: 'center',
  },
});
