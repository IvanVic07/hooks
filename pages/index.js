import Head from "next/head";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleScroll = () => {
    setCount(window.scrollY); // Actualiza el estado con la cantidad de píxeles desplazados
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  return (
    <>
      <Head>
        <title>Scroll</title>
        <meta name="description" content="Scroll state tracking app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Contenedor que ocupa toda la pantalla y centra el contenido */}
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <main style={{ textAlign: "center" }}>
          <h1>Scroll </h1>
          <p>Has desplazado {count} píxeles hacia abajo.</p>
          <button onClick={() => setCount(count + 1)}>Añadir 1 pixel</button>
        </main>
      </div>

      {/* Espacio adicional para permitir el desplazamiento */}
      <div style={{ height: "300vh", backgroundColor: "#f0f0f0" }}></div>
    </>
  );
}
