import weatherData from 'data/weatherData.json';

export function getWeatherDescription(wmoCode, isDay) {
    const timeOfDay = Number(isDay) === 1 ? 'day' : 'night';
    const weatherInfo = weatherData[wmoCode] ? weatherData[wmoCode][timeOfDay] : null;
    return weatherInfo ? weatherInfo.description : null;
}

export function getWeatherImage(wmoCode, isDay) {
    const timeOfDay = Number(isDay) === 1 ? 'day' : 'night';
    const weatherInfo = weatherData[wmoCode] ? weatherData[wmoCode][timeOfDay] : null;
    return weatherInfo ? weatherInfo.image : null;
}
