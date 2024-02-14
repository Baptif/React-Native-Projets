import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import CurrentMeteo from './components/CurrentMeteo';
import { GluestackUIProvider, Box } from "@gluestack-ui/themed"
import FiveDaysMeteo from './components/FiveDaysMeteo';
import { config } from "@gluestack-ui/config"

export default function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [weatherData5Days, setWeatherData5Days] = useState(null);
  
  useEffect(() => {
    const fetchData = async (latitude, longitude) => { 
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lang=fr&units=metric&lat=${latitude}&lon=${longitude}&appid=0482b92e01c78f8a6262ce979b4f34a2`;
        console.log(url);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lang=fr&units=metric&lat=${latitude}&lon=${longitude}&appid=0482b92e01c78f8a6262ce979b4f34a2`
        );
        const data = await response.json();
        setCurrentWeatherData(data);

        let previousDate = new Date();
        let datatowatch = data.list.filter(entry => {
          const enrtyHours = entry.dt_txt.split(' ')[1];
          let dateWithoutHours = "0";

          if(enrtyHours == '12:00:00')
          {
            dateWithoutHours = entry.dt_txt.split(' ')[0];
          }
          const entryDate = new Date(dateWithoutHours);
          const bln_return = entryDate > previousDate;
          previousDate = entryDate;

          return bln_return;
        }).slice(0, 5);

        setWeatherData5Days(datatowatch);
      } catch (error) {
        alert('Error fetching weather data:', error);
      }
    };

    const fetchMeteo = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let locationFullData = await Location.getCurrentPositionAsync({});
      let location = {
        lat: locationFullData.coords.latitude,
        lon: locationFullData.coords.longitude,
      };
      await fetchData(location.lat, location.lon);
    };      

    fetchMeteo();
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} justifyContent="center" padding={20} bgColor='#4AA9FF'>
        <CurrentMeteo weatherData={currentWeatherData}/>
        <FiveDaysMeteo weatherData={weatherData5Days}/>
      </Box>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
