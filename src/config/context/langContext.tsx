import React, { useReducer, useContext } from "react";

export type Language = {
    name: string;
};

export enum LanguageActionTypes {
    LANGUAGE_CHANGED = "LANGUAGE_CHANGED"
};

export type LanguageAction = {
    type: LanguageActionTypes;
    payload: Language;
};

export const setLanguage = (language: Language) => {
    return {
        type: LanguageActionTypes.LANGUAGE_CHANGED,
        payload: language
    };
};

export const languageReducer = (state: Language, action: LanguageAction) => {
    switch (action['type']) {
        case LanguageActionTypes.LANGUAGE_CHANGED:
            document.querySelector("HTML")?.setAttribute("dir", action.payload.name === "ar" ? "rtl" : "ltr");
            localStorage.setItem("lang", action.payload.name);
            return action.payload;
        default:
            return state;
    }
};

export const LanguageState = React.createContext<Language | undefined>(undefined);

export const LanguageDispatch = React.createContext<React.Dispatch<LanguageAction> | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode; }) => {
    const [state, dispatch] = useReducer(languageReducer, { name: "en" });
    return (
        <LanguageState.Provider value={state}>
            <LanguageDispatch.Provider value={dispatch}>
                {children}
            </LanguageDispatch.Provider>
        </LanguageState.Provider>
    );
};

export const useLanguageState = (): Language => {
    const context = useContext(LanguageState);
    if (undefined === context) {
        throw new Error("Please use within LanguageStateProvider");
    }
    return context;
};

export const useLanguageDispatch = (): React.Dispatch<LanguageAction> => {
    const context = useContext(LanguageDispatch);
    if (undefined === context) {
        throw new Error("Please use within LanguageDispatchProvider");
    }
    return context;
};
