import React from "react";
import { Col, Row, Typography, Divider } from 'antd';
import '../Styles/Home.css';
import StartButton from "../Components/Buttons/Button";

const { Title } = Typography;

const Home = (props: { handleGameStartClick: () => void; }) => {
    return (<>
    <div className="flex col halign inherit">
        <Row>
            <Col span={22} offset={1}>
                <div>
                    <div className="circle flex center mx-auto">
                        <Title type="danger">Quiz Up</Title>
                    </div>
                </div>
                <Divider/>
                <StartButton text={'Start Quiz'} handleClick={props.handleGameStartClick}/>
            </Col>
        </Row>
    </div>
    </>)
}

export default Home;