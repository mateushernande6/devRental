import {Container} from './style'
import {useEffect, useState} from "react";
import api from "../../services";

interface IAceptedWork {
    title: string;
    objective: string;
    // description: string;
    // tecnology: string[];
    // reward: string;
    // workDeadline: string;
}
interface IItem {
    item: any;
}

const AceptedWork = ({item}:IItem) => {

    const {title, objective} = item

    return (
    <Container>
        <h1>{title}</h1>
        <h1>{objective}</h1>
    </Container>
    );
};

export default AceptedWork;