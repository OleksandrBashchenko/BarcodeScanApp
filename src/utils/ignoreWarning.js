import { LogBox } from "react-native";

const ignoreWarns = [
    "ViewPropTypes will be removed from React Native",
];

const warn = console.warn;

console.warn = (...arg) => {

    for (const warning of ignoreWarns) {
        if (arg[0].startsWith(warning)) {
            return;
        }
    }

    warn(...arg);
};

LogBox.ignoreLogs(ignoreWarns);
