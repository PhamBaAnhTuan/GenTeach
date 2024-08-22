import React, { useContext } from "react";
import { createContext } from "react";
import { useColorScheme } from "react-native";
import { useRouter, useNavigation } from "expo-router";

export const ThemeContext = createContext<any>(null);
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   // Router
   const router = useRouter();
   // Theme
   const scheme = useColorScheme();
   const theme = {
      statusbarTheme : scheme === 'dark' ? 'black' : 'white',
      bgc: scheme === 'dark' ? '#111518' : '#fef0ff',
      text: scheme === 'dark' ? 'black' : 'black',
      white: scheme === 'dark' ? 'white' : 'white',
      gray: scheme === 'dark' ? 'gray' : 'lightgray',
      green: scheme === 'dark' ? 'green' : 'green',
      bgcCard: scheme === 'dark' ? '#0a3030' : '#0a3030',
   }

   return (
      <ThemeContext.Provider value={{ theme, router }}>
         {children}
      </ThemeContext.Provider>
   )
};

export const useTheme = () => {
   const value = useContext(ThemeContext);
   if (!value) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return value;
}