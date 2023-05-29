import { useNavigation } from "@react-navigation/native";
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
export default function Tabs() {
  const layout = useWindowDimensions();
  const navigation = useNavigation();


  const FirstRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Амьтан</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster1.png')}></Image>
              <Text style={styles.postertext}>Амьтад</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster2.png')}></Image>
              <Text style={styles.postertext}>Амьтны үр төл</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster3.png')}></Image>
              <Text style={styles.postertext}>Шувуу</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster4.png')}></Image>
              <Text style={styles.postertext}>Далайн амьтад</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster5.png')}></Image>
              <Text style={styles.postertext}>Шавж</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster6.png')}></Image>
              <Text style={styles.postertext}>Үлэг гүрвэл</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Хүнс</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster7.png')}></Image>
              <Text style={styles.postertext}>Ногоо</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster8.png')}></Image>
              <Text style={styles.postertext}>Жимс</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster9.png')}></Image>
              <Text style={styles.postertext}>Хоол</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster10.png')}></Image>
              <Text style={styles.postertext}>Уух зүйлс</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster11.png')}></Image>
              <Text style={styles.postertext}>Амттан</Text>
            </View>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster12.png')}></Image>
              <Text style={styles.postertext}>Гэр бүл</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster13.png')}></Image>
              <Text style={styles.postertext}>Тоглоом</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster14.png')}></Image>
              <Text style={styles.postertext}>Хувцас</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster15.png')}></Image>
              <Text style={styles.postertext}>Хүний бие</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster16.png')}></Image>
              <Text style={styles.postertext}>Хөгжмийн зэмсэг</Text>
            </View>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster17.png')}></Image>
              <Text style={styles.postertext}>Миний өрөө</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster18.png')}></Image>
              <Text style={styles.postertext}>Гал тогоо</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster19.png')}></Image>
              <Text style={styles.postertext}>Угаалгын өрөө</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster20.png')}></Image>
              <Text style={styles.postertext}>Манай гэр</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
  const FifthRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Тээврийн хэрэгсэл</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster21.png')}></Image>
              <Text style={styles.postertext}>Жижиг, дунд оврын</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster22.png')}></Image>
              <Text style={styles.postertext}>Олон нийтийн</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster23.png')}></Image>
              <Text style={styles.postertext}>Том оврын</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster24.png')}></Image>
              <Text style={styles.postertext}>Машины брэнд, лого</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );

  const SixthRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Өнгө, дүрс, үсэг, тоо</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster25.png')}></Image>
              <Text style={styles.postertext}>Өнгө</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster26.png')}></Image>
              <Text style={styles.postertext}>Дүрс</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster27.png')}></Image>
              <Text style={styles.postertext}>Тоо</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster28.png')}></Image>
              <Text style={styles.postertext}>Улаан цэг</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster29.png')}></Image>
              <Text style={styles.postertext}>Үсэг</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster30.png')}></Image>
              <Text style={styles.postertext}>Англи үсэг</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
  const SeventhRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Цаг агаар, цаг</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster31.png')}></Image>
              <Text style={styles.postertext}>Цаг агаар</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster32.png')}></Image>
              <Text style={styles.postertext}>Улирал</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster33.png')}></Image>
              <Text style={styles.postertext}>Цаг сурцгаая</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
  const EightthRoute = () => (
    <View style={styles.tabcontainer}>
      <View style={styles.thtab}>
        <Text style={styles.thtext}>Далбаа</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iv}>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview1}>
              <Image style={styles.postericon} source={require('../images/posters/poster34.png')}></Image>
              <Text style={styles.postertext}>Ази</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster35.png')}></Image>
              <Text style={styles.postertext}>Африк</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster36.png')}></Image>
              <Text style={styles.postertext}>Европ</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster37.png')}></Image>
              <Text style={styles.postertext}>Далайн</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster38.png')}></Image>
              <Text style={styles.postertext}>Өмнөд америк</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Delgerengui")}>
            <View style={styles.subview}>
              <Image style={styles.postericon} source={require('../images/posters/poster39.png')}></Image>
              <Text style={styles.postertext}>Хойд америк</Text>
            </View>
          </Pressable>
        </View>
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
    marginTop: 0.8,
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
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  subview1: {
    margin: 15,
    marginTop: 25,
    height: 70,
    borderRadius: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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
