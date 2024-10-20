"use client";

import { useState } from "react";

import Button from "../../../components/Button";
import Input from "./Input";

import { ArrowLeft } from "lucide-react";

const Form = () => {
  const [matchType, setMatchType] = useState("publica");

  const [formData, setFormData] = useState({
    nome: "",
    tipoSala: matchType,
    senha: "",
  });

  const changeValue = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Input
        onChange={(e) => changeValue("nome", e.target.value)}
        type="text"
        placeholder="Nome..."
      />
      <Input setMatchType={setMatchType} placeholder="Nome..." />

      {matchType === "privada" && (
        <Input
          onChange={(e) => changeValue("senha", e.target.value)}
          type="text"
          placeholder="Senha..."
        />
      )}

      <div className="flex w-full gap-5 mt-3">
        <Button baseColor="#FACC15" onClick={() => alert("Voltar")}>
          <ArrowLeft />
        </Button>
        <Button baseColor="#4ADE80" onClick={() => console.log(formData)}>
          Criar
        </Button>
      </div>
    </div>
  );
};

export default Form;
