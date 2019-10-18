import React, { useState } from "react";

const useFocus = () => {
    const [focused, setFocused] = useState(false);

    const focus = () => setFocused(true);
    const blur = () => setFocused(false);

    return [focused, focus, blur];
};

const Text = ({ label, name, disabled, value, password, onChange }) => {
    const [focused, focus, blur] = useFocus();
    return (
        <div
            style={{
                margin: "30px 0",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                transition:
                    "border-bottom-color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms)",
                borderBottom: focused
                    ? "2px solid #9C7ED3"
                    : "2px solid silver",
                boxShadow:
                    "0 8px 6px -6px rgba(0, 0, 0, 0.1), 0 8px 6px -6px rgba(0, 0, 0, 0.13)"
            }}
        >
            <label
                style={{
                    margin: "10px 0",
                    color: focused ? "#9C7ED3" : "#8E8E8E",
                    position: "absolute",
                    userSelect: "none",
                    transition:
                        "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                    transformOrigin: "bottom left",
                    transform: (focused || value) && "translate(0, -25px)"
                }}
            >
                {label}
            </label>
            <input
                type={password ? "password" : "text"}
                name={name}
                onChange={e => onChange(e.target.value)}
                onFocus={focus}
                onBlur={blur}
                disabled={disabled}
                value={value}
                style={{
                    outline: focused ? "0" : "inherit",
                    width: "100%",
                    padding: "12px 0px",
                    margin: "0",
                    position: "relative",
                    background: "none",
                    border: 0,
                    color: focused && "#9C7ED3"
                }}
            />
        </div>
    );
};

export default Text;
