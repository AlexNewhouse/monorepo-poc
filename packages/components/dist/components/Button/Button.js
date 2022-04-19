var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Button.module.scss";
export var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    return (_jsx("button", __assign({ className: styles["button"], onClick: onClick }, { children: text })));
};
