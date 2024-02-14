import { Image } from 'react-native';
import { Box, Heading, Spinner, Text } from '@gluestack-ui/themed';

const CurrentMeteo = ({weatherData}) => {

    return (
        <Box flex={1} mb="-$20">
            {weatherData ? (
                <Box>
                    <Image  source={{ uri: `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png` }} 
                            style={{ width: 180, height: 180 }} 
                    />
                    <Box justifyContent="center">
                        <Heading color='white'>{weatherData.city.name}</Heading>
                        <Heading color='white' size='xl'>{weatherData.list[0].main.temp}°C</Heading>
                        <Text color='white'>Le temps est {weatherData.list[0].weather[0].description}</Text>
                        <Text color='white'>{weatherData.list[0].dt_txt.slice(0, -3)}</Text>
                    </Box>
                </Box>
            ) : ( 
                <Spinner size="large" color="white"/>
            )}
        </Box>
    );
};

export default CurrentMeteo;
