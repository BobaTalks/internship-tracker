import React, { useState } from "react";
import { useTheme } from "@mui/material";
const NancyBox = (props) => {
    const [count, setCount] = useState(0);
    // useState is a hook; look into more
    let theme = useTheme();

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <p style={{ color: theme.palette.success.main }}>{props.name}</p>
            <p>{count}</p>
            <button style={{ backgroundColor: props.colour }} onClick={handleClick}>
                Click Me!
            </button>
        </>
    );
};
export default NancyBox;
