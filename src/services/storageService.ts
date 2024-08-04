import { storageKeys } from "../configs/appConfiguration";

export const storageService = {
  getItem: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        console.log("Success @ storageService > getItem ");
        return JSON.parse(item);
      }
      console.log("Error @ storageService > getItem ", "No item found");
      return item;
    } catch (error) {
      console.log("Error @ storageService > getItem ", error);
    }
  },
  setItem: (key: string, value: JSON) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      console.log("Success @ storageService > setItem ");
    } catch (error) {
      console.log("Error @ storageService > setItem ", error);
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
      console.log("Success @ storageService > removeItem ");
    } catch (error) {
      console.log("Error @ storageService > removeItem ", error);
    }
  },
  clearStorage: () => {
    try {
      const allStorageKeys = Object.values(storageKeys);
      allStorageKeys.forEach((key) => {
        localStorage.removeItem(key);
      });
      console.log("Success @ storageService > clearStorage ");
    } catch (error) {
      console.log("Error @ storageService > clearStorage ", error);
    }
  },
};
