import { createIntl, createIntlCache } from "react-intl";

import ar from './i18n/ar';
import en from './i18n/en';

export const flattenMessages = (nestedMessages: any, prefix = '') => {
    return Object.keys(nestedMessages).reduce((msg: any, key) => {
        let value = nestedMessages[key]
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            msg[prefixedKey] = value
        } else {
            Object.assign(msg, flattenMessages(value, prefixedKey))
        }

        return msg
    }, {})
}

export const msgs = { ar, en };

const cache = createIntlCache();
let lang: string | null = localStorage.getItem("lang");

if (!lang) {
    lang = "";
    localStorage.setItem("lang", "en");
}

let int = createIntl(
    {
        locale: lang,
        messages: flattenMessages(msgs.en)
    },
    cache
);

const translate = (id: string, values?: {}) => {
    return int.formatMessage({ id }, values);
};

export default translate;
