import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
  {
    dt: 1661871600,
    main: {
      temp: 296.76,
      feels_like: 296.98,
      temp_min: 296.76,
      temp_max: 297.87,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 69,
      temp_kf: -1.11,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18,
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '3h': 0.26,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-08-30 15:00:00',
  },
  {
    dt: 1661882400,
    main: {
      temp: 295.45,
      feels_like: 295.59,
      temp_min: 292.84,
      temp_max: 295.45,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 931,
      humidity: 71,
      temp_kf: 2.61,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 96,
    },
    wind: {
      speed: 1.97,
      deg: 157,
      gust: 3.39,
    },
    visibility: 10000,
    pop: 0.33,
    rain: {
      '3h': 0.57,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-08-30 18:00:00',
  },
  {
    dt: 1661893200,
    main: {
      temp: 292.46,
      feels_like: 292.54,
      temp_min: 290.31,
      temp_max: 292.46,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 931,
      humidity: 80,
      temp_kf: 2.15,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 68,
    },
    wind: {
      speed: 2.66,
      deg: 210,
      gust: 3.58,
    },
    visibility: 10000,
    pop: 0.7,
    rain: {
      '3h': 0.49,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-08-30 21:00:00',
  },
  {
    dt: 1662292800,
    main: {
      temp: 294.93,
      feels_like: 294.83,
      temp_min: 294.93,
      temp_max: 294.93,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 935,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 88,
    },
    wind: {
      speed: 1.14,
      deg: 17,
      gust: 1.57,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-09-04 12:00:00',
  },
];

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
