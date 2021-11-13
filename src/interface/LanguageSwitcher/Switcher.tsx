import React, { FC } from 'react';
import { useLanguageState, useLanguageDispatch, setLanguage } from '../../config/context/langContext';
import useTranslations from '../../config/i18n/useTranslations';

type Props = {
    className?: string;
}

const Switcher: FC<Props> = (props: Props) => {
    const languageState = useLanguageState();
    const languageDispatch = useLanguageDispatch();
    const msgs = useTranslations();

    let lang: string | null = localStorage.getItem("lang");

    const switchLanguage = (lang: string): void => {

        languageDispatch(
            setLanguage({
                name: lang
            })
        );
    }

    if (!lang) {
        lang = "ar";
        localStorage.setItem("lang", "ar");
    }

    return (
        <a className={props.className!} id="changeLanguage" href="#" onClick={() => { switchLanguage(languageState.name == "ar" ? "en" : "ar") }}>
            {languageState.name == "ar" ? msgs.common.en : msgs.common.ar}
        </a>
    )
}

export default Switcher;