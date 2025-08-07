import React, { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"

export default function SingleValueTable({ data, brand }) {
  // Estado para lista y filtro
  const allItems = Object.values(data);
  const [items, setItems] = useState(allItems);
  const [sortOrder, setSortOrder] = useState(null); // null | "asc" | "desc"
  const [brandKey, setBrandKey] = useState("Marca");
  const [modelKey, setModelKey] = useState("Modelo");

  // Claves predefinidas para filtro
  const brandOptions = (brand == 'nvidia')
  ? ["Marca", "Zotac", "ASUS", "MSI", "Gigabyte"]
  : ["Marca", "ASUS", "MSI", "XFX", "ASRock", "Powercolor"];


  const modelOptions = (brand == 'nvidia')
  ? ["Modelo", "5060", "5070", "5080", "5090"]
  : ["Modelo", "9060 XT", "9070", "9070 XT"];


  const sortByPrice = () => {
    let newSortOrder;
    if (sortOrder === "asc") {
      newSortOrder = "desc";
    } else {
      newSortOrder = "asc";
    }

    const sorted = [...items].sort((a, b) => {
      const priceA = typeof a.price === "string" ? parseFloat(a.price.replace(/[^0-9.]/g, "")) : a.price;
      const priceB = typeof b.price === "string" ? parseFloat(b.price.replace(/[^0-9.]/g, "")) : b.price;

      if (newSortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    setItems(sorted);
    setSortOrder(newSortOrder);
  };

  // Si cambia data, resetear
  useEffect(() => {
    setItems(allItems);
    setSortOrder(null);
  }, [data]);

  // Filtrar según filtro seleccionado
  const handleBrandChange = (e) => {
    const key = e.target.value;
    setBrandKey(key);

    if (key === "Marca") {
      setItems(allItems);
    } else {
      // filtro simple: que el nombre incluya la clave
      setItems(allItems.filter(item => item.name.toLowerCase().includes(key.toLowerCase())));
    }
  };

  const handleModelChange = (e) => {
    const key = e.target.value;
    setModelKey(key);

    if (key === "Modelo") {
      setItems(allItems);
    } else {
      // filtro simple: que el nombre incluya la clave
      setItems(allItems.filter(item => item.name.toLowerCase().includes(key.toLowerCase())));
    }
  };

  return (
    <div className="text-center overflow-x-auto w-fit mx-auto my-5">
      <div className="flex flex-row px-3 py-1">
        <Image src={(brand == 'nvidia') ? '/images/nvidia.png' : '/images/amd.png'} alt={brand} width={140} height={30} className="hidden sm:block bg-white px-2 py-1 text-center rounded-lg opacity-90"/>
        
        {/* Select filtro */}
        <select
          value={brandKey}
          onChange={handleBrandChange}
          className="m-3 px-3 py-1 rounded border border-gray-600 bg-transparent hover:bg-gray-800 hover:bg-opacity-40 text-gray-200 text-xs my-auto"
        >
          {brandOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "Marca" ? "Marca" : opt}
            </option>
          ))}
        </select>

        {/* Select filtro */}
        <select
          value={modelKey}
          onChange={handleModelChange}
          className="mr-3 px-3 py-1 rounded border border-gray-600 bg-transparent hover:bg-gray-800 hover:bg-opacity-40 text-gray-200 text-xs my-auto appearance-none"
        >
          {modelOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "Modelo" ? "Modelo" : opt}
            </option>
          ))}
        </select>
        
        {/* Botón ordenar */}
        <button
          className="px-3 py-1 rounded border border-gray-600 bg-transparent hover:bg-gray-800 hover:bg-opacity-40 text-gray-200 text-xs my-auto"
          onClick={sortByPrice}
        >
          {sortOrder === "asc" ? "Precio descendente" : "Precio ascendente"}
        </button>
      </div>


      {/* Tabla */}
      <table>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-3 py-1 rounded-xl">
                <div className="flex flex-row gap-2 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-80 rounded-xl">
                  <Image src={item.image} alt="amd" width={60} height={60} className="rounded-lg"/>
                  <div className="flex flex-col my-auto">
                    <a target="_blank" key={index} href={item.url} className="text-xs text-gray-100 font-semibold block text-center hover:text-blue-500 hover:underline">{item.name}</a>
                    <p className="text-xs text-left font-semibold">{item.price.toFixed(2)} €</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
