/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";

export function Formulario() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setName("");
    setPhone("");
    setMail("");
  }

  return (
    <Container id="formBioMed" onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="E-mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />

      <input
        placeholder="Fone/WhatsApp"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        required
      />

      <select required value={city} onChange={(e) => setCity(e.target.value)}>
        <option value=""> Selecione sua cidade </option>
        {/* {states.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })} */}

        <option value=""> Ji-Paraná </option>
        <option value=""> Porto Velho </option>
        <option value=""> Outros </option>
      </select>

      <div className="buttoncheck">
        <input className="botaoCheck" type="checkbox" id="check" required />
        <label className="check" htmlFor="check">
          Concordo com as
          <a href="/rules" target="_blank">
            Regras do sorteio.
          </a>
        </label>
      </div>

      <div className="buttoncheck">
        <input className="botaoCheck" type="checkbox" id="check" required />
        <span className="check">
          Concordo com os
          <a href="/rules" target="_blank">
            Termos de Uso e Privacidade.
          </a>
        </span>
      </div>

      <button type="submit">
        <img src="./icons/buttonEnviar.svg" alt="Botão agendamento" /> Quero
        participar
      </button>
    </Container>
  );
}