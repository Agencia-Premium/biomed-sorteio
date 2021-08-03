/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { signIn, signOut, useSession } from "next-auth/client";

import { Container } from "./styles";

interface ICitys {
  id: number;
  nome: string;
}

export function Formulario() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");

  const [citysRondonia, setCitysRondonia] = useState<ICitys[]>([]);

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  useEffect(() => {
    async function listCitys() {
      await axios
        .get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/RO/municipios?orderBy=nome"
        )
        .then((response) => {
          setCitysRondonia(response.data);
        });
    }

    listCitys();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setName("");
    setPhone("");
    setMail("");
  }

  const [session] = useSession();

  console.log(session);

  return (
    <Container id="formBioMed" onSubmit={handleSubmit}>
      {session ? (
        <button
          type="button"
          onClick={() => signOut()}
          className="signInButton"
        >
          <FaGoogle color="#04d361" />
          {session?.user?.name}
          <FiX color="#737380" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => signIn("google")}
          className="signInButton"
        >
          <FaGoogle color="#eba417" />
          Sign in with Google
        </button>
      )}

      <label htmlFor="name">Nome</label>
      <input
        id="name"
        placeholder="Digite seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="mail">E-mail</label>
      <input
        id="mail"
        placeholder="Digite seu endereço de e-mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />
      <label htmlFor="phone">Fone/WhatsApp</label>
      <input
        id="phone"
        placeholder="Digite seu tefefone ou WhatsApp"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        required
      />
      <label htmlFor="city">Cidade</label>
      <select
        id="city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value=""> Escolha sua Cidade </option>
        {citysRondonia.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          );
        })}
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
            Termos de uso e Privacidade.
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
