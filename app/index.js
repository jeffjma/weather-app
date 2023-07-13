import { SafeAreaView, View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react' 
import axios from 'axios'

import styles from '../styles/globalStyles'
import searchIcon from "../assets/search.png"

const Home = () => {
    const [cityName, setCityName] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [fetchWeather, setFetchWeather] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: cityName, country: "Australia"},
        headers: {
          'X-RapidAPI-Key': 'b9876600c5msh60a830f48fc8fd0p19c510jsn603d0941b873',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)

            setWeatherData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error: ' + error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (cityName !== "") fetchData()
    }, [fetchWeather])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC"}}>
            <Stack.Screen 
                options={{
                    headerTitle: "Australian Weather App"
                }}
            />
            <View>
                <View>
                    <Text>Welcome to the Australian Weather App!</Text>
                    <Text>Please enter a city below</Text>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                        <TextInput 
                            style={styles.TextInput}
                            value={cityName}
                            onChangeText={(city) => setCityName(city)}
                        />
                    </View>

                    <TouchableOpacity style={styles.searchBtn} onPress={() => setFetchWeather(!fetchWeather)}>
                        <Image 
                            source={searchIcon}
                            resizeMode='contain'
                            style={styles.searchBtnImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {(weatherData) && 
                <View>
                    <Text>Current Temperature: {weatherData.temp}°C</Text>
                    <Text>Feels like: {weatherData.feels_like}°C</Text>
                    <Text>Min: {weatherData.min_temp}°C</Text>
                    <Text>Max: {weatherData.max_temp}°C</Text>
                </View>
            }
        </SafeAreaView>
    )
}

export default Home