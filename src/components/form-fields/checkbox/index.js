import React, { useState } from "react";

const Text = ({ label, name, value, onChange }) => {
    return (
        <div
            onClick={() => onChange(!value)}
            style={{
                margin: "30px 0",
                width: "100%",
                display: "flex",
                flexDirection: "row"
            }}
        >
            <span
                style={{
                    position: "absolute",
                    display: "none",
                    fontSize: value ? "20px" : "0.875em",
                    textAlign: "center",
                    width: "25px",
                    lineHeight: value ? "23px" : "1em",
                    cursor: "inherit",
                    backgroundColor: value && "#8E8E8E",
                    color: value && "white",
                    textShadow: value && "0 0 0.0714em $pastel-purple",
                    fontWeight: value && "bold",
                    border: value && 0
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        display: "none",
                        fontSize: "20px",
                        textAlign: "center",
                        width: "25px",
                        lineHeight: "23px",
                        cursor: "inherit"
                    }}
                >
                    ✓
                </span>
                <input
                    type="checkbox"
                    name={name}
                    value={value}
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        opacity: 0
                    }}
                />
            </span>
            <label
                style={{
                    marginLeft: "10px",
                    cursor: "inherit",
                    color: value && "#8E8E8E"
                }}
            >
                {label}
            </label>
        </div>
    );
};

export default Text;
