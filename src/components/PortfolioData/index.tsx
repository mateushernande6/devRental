// @ts-nocheck

import { Container, Card, List } from "./style";
import {useEffect, useState} from "react";
import api from "../../services";

const PortfolioData = () => {

  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
  let user = JSON.parse(localStorage.getItem("token") ?? "");

  const [a, setA] = useState<any>([])

  useEffect(()=>{
    async function fetchData(){
    const data = await api.get(`portfolio/?userId_like=${idUser}`, {
    headers: { Authorization: `Bearer ${user}` }})
    console.log('portfolio', data)
    setA(data.data)

    return null

    }
    fetchData()

  },[])

  return <Container>
      <h2>Projetos passados</h2>

    {console.log(a)}
    <List>
      {a.map((element, index) =>
      <Card key={index}>
        <div>

          <h3><span>Título:</span> {element.item.title}</h3>
          <h3><span>Objetivo:</span> {element.item.objective}</h3>
          <h3><span>Link do deploy:</span>{element.text}</h3>

        </div>
      </Card>)}
    </List>
  </Container>;
};

export default PortfolioData;
