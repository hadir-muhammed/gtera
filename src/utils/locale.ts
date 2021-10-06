interface Messages {
  [key: string]: Messages | string;
}

export function flattenMessages(nestedMessages: Messages, prefix = "") {
  return Object.keys(nestedMessages).reduce<{ [key: string]: string }>(
    (messages, key) => {
      let value = nestedMessages[key];
      let prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "string") {
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
    },
    {}
  );
}
