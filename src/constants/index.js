import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default {
    asyncStorageKey: "NewsApp001",
    BASE_URL: "https://news-app-api-nodejs.herokuapp.com/",
    THEME: {
        primary: "#062743",
        secondary: "#182952",

        // colors
        black: "#1E1F20",
        white: "#FFFFFF",

        lightGray: "#F5F5F6",
        lightGray2: "#F6F6F7",
        lightGray3: "#EFEFF1",
        lightGray4: "#F8F8F9",
        lightGray5: "#9ea9b3",
    },
    MyLightTheme: {
        ...DefaultTheme,
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            primary: "#062743",
            secondary: "#182952",

            // colors
            black: "#1E1F20",
            white: "#FFFFFF",

            lightGray: "#F5F5F6",
            lightGray2: "#F6F6F7",
            lightGray3: "#EFEFF1",
            lightGray4: "#F8F8F9",
            lightGray5: "#9ea9b3",
        }
    },
    MyDarkTheme: {
        ...DarkTheme,
        dark: true,
        colors: {
            ...DarkTheme.colors,
            primary: "#062743",
            secondary: "#182952",
            card: '#1f1f1f',
            black: "#1E1F20",
            white: "#FFFFFF",

            lightGray: "#F5F5F6",
            lightGray2: "#F6F6F7",
            lightGray3: "#EFEFF1",
            lightGray4: "#F8F8F9",
            lightGray5: "#9ea9b3",
        },
    }
}

