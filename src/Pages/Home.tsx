import React from "react";
import Button from "../Components/Buttons/Button";

const Home = (props: { handleGameStartClick: () => void; }) => {
    return (<>
        <h1>Home</h1>
        <Button text={'Start Quiz'} handleClick={props.handleGameStartClick}/>
    </>)
}

export default Home;