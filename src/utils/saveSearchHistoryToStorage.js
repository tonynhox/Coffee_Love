import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveValueToStorage = async (key, value) => {
  try {
    // Check if the key exists in AsyncStorage
    const existingData = await AsyncStorage.getItem(key);

    // Initialize an array to hold the data
    let dataArray = [];

    if (existingData) {
      // If data exists, parse it as an array
      dataArray = JSON.parse(existingData);

      // Add the new value to the array
      dataArray.push(value);
    } else {
      // If no data exists, create an array with the new value
      dataArray = [value];
    }
    console.log("SAVE THANH CONG: ", dataArray)
    // Save the updated array back to AsyncStorage
    await AsyncStorage.setItem(key, JSON.stringify(dataArray));
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error);
  }
};