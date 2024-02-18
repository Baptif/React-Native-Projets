import { Image } from 'react-native';
import { Box, Spinner, Text } from '@gluestack-ui/themed';
import { Card, FlatList, Badge, BadgeText } from '@gluestack-ui/themed';

const FiveDaysMeteo = ({weatherData}) => {

   return (
      <Box flex={1} mt="$2">
         <Text alignSelf='center' pb="$2" color='white'>🌤️ Météo des 5 prochains jours 🌤️</Text>
         {weatherData ? (
            <FlatList
               data={weatherData}
               keyExtractor={(item, index) => index}
               showsVerticalScrollIndicator={false}
               renderItem={({ item, index }) => (
                  <Card size="md" variant="elevated" m="$4" key={index}>
                     <Image  source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} 
                              style={{ width: 80, height: 80 }} 
                     />
                     <Box justifyContent="center">
                        <Text>Temperature: {item.main.temp}°C</Text>
                        <Text mb="$1">Temps: {item.weather[0].description}</Text>
                        <Badge size="lg" variant="solid" borderRadius="$md" action="info" width={100}>
                           <BadgeText fontWeight='$bold'>{item.dt_txt.split(' ')[0]}</BadgeText>
                        </Badge>
                     </Box>
                  </Card>
               )}
            />
         ) : (
            <Spinner mt="$2" size="large" color="white"/>
         )}
      </Box>
   );
}

export default FiveDaysMeteo;