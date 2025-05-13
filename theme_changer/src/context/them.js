import { createContext } from "react";
import { useContext } from "react";

export const ThemContext = createContext({
    themMode: "light",
    lightThem() { },
    darkThem() { },
});

export const ThemProvider = ThemContext.Provider;

// custome hook 
export default function useTheme() {
    return useContext(ThemContext);

}