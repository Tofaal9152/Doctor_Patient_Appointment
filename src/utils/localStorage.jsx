// Function to load a value from localStorage
export const loadFromLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return undefined;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error(`Error loading from localStorage for key '${key}':`, error);
    return undefined;
  }
};

// Function to check if a value exists in localStorage
export const existsInLocalStorage = (key) => {
  return localStorage.getItem(key) !== null;
};

// Function to store a value in localStorage
export const storeInLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error storing in localStorage for key '${key}':`, error);
  }
};

// Function to remove a value from localStorage
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage for key '${key}':`, error);
  }
};

// patient-token