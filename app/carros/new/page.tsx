"use client";

export default function NewCarro() {

    async function saveCarro() {
        console.log("Acessou");

        const marca = document.getElementById("marca") as HTMLInputElement;
        const portas = document.getElementById("portas") as HTMLInputElement;

        const carro = {
            marca: marca.value,
            portas: Number(portas.value)
        };

        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/carros`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carro)
        });

        
        window.location.href = "/carros";
    }

    return (
        <div>
            <br />
            <h1>Cadastrar Carro</h1>
            <br />

            <input
                type="text"
                id="marca"
                placeholder="Digite a marca do carro"
            />
            <br />

            <input
                type="number"
                id="portas"
                placeholder="Quantidade de portas"
            />
            <br />

            <button onClick={saveCarro}>Salvar</button>
        </div>
    );
}
