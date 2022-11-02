import React from "react";
import { Button } from 'antd';

const StartButton = (props: {handleClick(): void;text: string}) => {
    return <>
        <Button shape="round" type="primary" block danger onClick={() => props.handleClick()}>{props.text}</Button>
    </>
}

export default StartButton;