import * as React from 'react';
import { View, 
  useWindowDimensions,
  StyleSheet, 
  Text} from 'react-native';
import { TabView, SceneMap,TabBar  } from 'react-native-tab-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const FirstRoute = () => (
  <View style={styles.tabcontainer}>
  <View style={styles.thtab}><Text>Амьтан</Text></View>
  <View>
  </View>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SixthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const SeventhRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const EightthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const NinethRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  '1': FirstRoute,
  '2': SecondRoute,
  '3': ThirdRoute,
  '4': FourthRoute,
  '5': FifthRoute,
  '6': SixthRoute,
  '7': SeventhRoute,
  '8': EightthRoute,
  '9': NinethRoute,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1',icon: 'dog',},
    { key: '2',icon: 'hamburger' },
    { key: '3',icon:'baby'},
    { key: '4', icon: 'home'},
    { key: '5', icon: 'car'},
    { key: '6',icon:'sort-numeric-up' },
    { key: '7',icon:'cloud-sun' },
    { key: '8',icon:'flag' },
    { key: '9',icon:'info' },
  ]);
const renderTabBar = props => (
    <TabBar 
    {...props} 
    renderIcon={({ route,color }) => (
    <FontAwesome5 name={route.icon} size={50} color={color}></FontAwesome5>
    )}
    style={styles.tab}
    indicatorStyle={{ backgroundColor: 'white' }}
/>
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  tab: {
    height: 100,
    backgroundColor: 'violet',
  },
  thtab: {
    backgroundColor: "violet",
    height: 55,
    marginTop: 1,
  },
  tabcontainer: {
    flex: 1,
    backgroundColor: "white",
  }
});