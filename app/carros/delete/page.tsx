"use client";

import { useSearchParams } from "next/navigation";

export default function DeleteCarro() {

    const id = useSearchParams().get('id');

    async function deleteCarro() {
        console.log("Excluindo carro...");
        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/carros/${id}`, {
            method: "DELETE"
        });

        window.location.href = "/carros"; 
    }

    return (
        <div>
            <h1>Confirmar exclusão do carro?</h1>
            <button onClick={deleteCarro}>Confirmar</button>
        </div>
    );
}
