import React from "react";
import { Space, Spin } from 'antd';

const PageLoader = (props: {text: string}) => {
    return <>
        <Space size="middle">
            <Spin size="large" tip={props.text}></Spin>
        </Space>
    </>
}

export default PageLoader;