"use client";
import Image from "next/image";
import { useState, useEffect} from "react";

export default function ListEventos() {
  const url = 'http://localhost:3000/eventos';
  const [ eventos, setEvento ] = useState();
  const [ datas, setData ] = useState();
  async function getEventos() {

    const response = await fetch(url);
    const data = await response.json();
    setEvento(data);  
  }

  useEffect(() => {
    getEventos();
  }, []);
  
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Eventos</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome</th>
            <th className="py-2 px-4 border-b">Data</th>
          </tr>
        </thead>
        <tbody>
    
        {
          eventos && eventos.map((evento, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{evento.titulo}</td>
              <td className="py-2 px-4 border-b">{evento.data}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
