export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    try {
      return JSON.parse(data);
    } catch (error: unknown) {
      console.error('Error parsing JSON from localStorage:', error);
      return null;
    }
  }

  return null;
};

export const setLocalStorage = (key: string, data): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error: unknown) {
    console.error('Error setting data to localStorage:', error);
  }
};
