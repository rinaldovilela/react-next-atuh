"use client";

import React from "react";
import { Input, Card, Spacer } from "@nextui-org/react";
import { useState } from "react";
export default function Cadastro() {

  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleCheckboxChange = (value: number) => {
    setSelectedValue(value);
  };

 return <div>
 <label>
   <input
     type="checkbox"
     value={1}
     onChange={() => handleCheckboxChange(1)}
     checked={selectedValue === 1}
   />
   Categoria 1
 </label>
 <br />
 <label>
   <input
     type="checkbox"
     value={2}
     onChange={() => handleCheckboxChange(2)}
     checked={selectedValue === 2}
   />
   Categoria 2
 </label>
 <br />
 <label>
   <input
     type="checkbox"
     value={3}
     onChange={() => handleCheckboxChange(3)}
     checked={selectedValue === 3}
   />
   Categoria 3
 </label>
 <br />
 <label>
   <input
     type="checkbox"
     value={4}
     onChange={() => handleCheckboxChange(4)}
     checked={selectedValue === 4}
   />
   Categoria 4
 </label>
 <br />
 <p>Valor selecionado: {selectedValue}</p>
</div>
    

}
