import * as React from 'react';
import { Image, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar  } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
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

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'First' },
    { key: 'fourth', title: 'Second' },
    { key: 'fifth', title: 'First' },
    { key: 'sixth', title: 'Second' },
  ]);
<TabBar
  renderLabel={({route, color}) => (
    <Text style={{ color: 'black', margin: 8 }}>
      {route.title}
    </Text>
  )}
  indicatorStyle={{ color: 'white' }}
  style={{backgroundColor: 'white'}}
/>
const renderTabBar = props => (
    <TabBar 
    {...props} 
    style={{backgroundColor: '#0804f9'}}
    renderIcon={({ route, focused, color }) => (
    <Image />)}
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