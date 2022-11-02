import React from "react";

const Button = (props: {handleClick(): void;text: string}) => {
    return <>
        <button type='button' onClick={() => props.handleClick()}>{props.text}</button>
    </>
}

export default Button;