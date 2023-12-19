'use client'
import { Button } from "@nextui-org/react";
import { useState } from "react";



export default function CadastrarEventos(props) {
    const [increment, setIncrement] = useState(0);

function handleIncrement() {
    setIncrement(increment + 1);
}

function handleDecrement() {
    setIncrement(increment - 1);
}

    return(
        <div className="min-h-screen">
        <h1>Cadastrar Eventos</h1>
        <h1>Eventos: {increment} </h1>
        <Button onClick={handleDecrement}>Diminuir </Button>
        <Button onClick={handleIncrement}>Adicionar</Button>
        <h2>{props.nome}</h2>
        </div>
    )
}