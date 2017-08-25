import axios from 'axios';

const axiosConfig = {
    "baseURL": "https://api.apixu.com/v1",
    "responseType": "json",
    "headers": {"Accept": "application/json"},
    "timeout": 15000,
    "validateStatus": (status) => status >= 200 && status < 300
};

const weatherApiConfig = {
    apiKey: "7f7cd7a429e94108901102904171608"
};

const extractResponseData = (response) => {
    console.log(response)
    return response.data;
};

const WebService = (axiosConfig) => {

    const axiosInstance = axios.create(axiosConfig)

    return {
        getWeather(city){
            console.log(`City: ${city}`);
            return axiosInstance.get('current.json', {
                "params": {
                    "key": weatherApiConfig.apiKey,
                    "q": city
                }
            }).then(extractResponseData)
        }
    }
};

export default WebService(axiosConfig);
