
const FetchTime = async (timeApiUrl) => {
    const timeData = await fetch(timeApiUrl);
    console.log('timeData', timeData);
    return await timeData.json();
}

export default FetchTime;