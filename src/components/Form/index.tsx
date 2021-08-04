/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import api from "../../services/api";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/client";

import { Container } from "./styles";

interface ICitys {
  id: number;
  nome: string;
}

interface IDados {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  termo: boolean;
  regras: boolean;
}

export function Formulario() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");
  const [termo, setTermo] = useState(false);
  const [regras, setRegras] = useState(false);

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

  const router = useRouter();
  const [session] = useSession();

  function sendToEnterprise() {
    router.push("/enterprises");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!session) {
      toast.error("Para continuar, você precisa fazer login com o Google");
      return;
    }

    const data: IDados = {
      nome: String(session.user?.name),
      telefone: phone,
      email: String(session.user?.email),
      cidade: city,
      termo,
      regras,
    };

    await api.post("/clientes", data).then(() => {
      toast.success(
        "Formulário enviado com sucesso! Você será redirecionado para concluir o processo"
      );
    });

    setTimeout(() => {
      sendToEnterprise();
    }, 3500);

    setName("");
    setPhone("");
    setCity("");
    setMail("");
  }

  return (
    <Container id="formBioMed" onSubmit={handleSubmit}>
      {session ? (
        <>
          <div className="profile">
            <img src={session?.user?.image || "./icons/user.png"} alt="User" />
            <div>
              <p>{session?.user?.name}</p>
              <span>{session?.user?.email}</span>
            </div>

            <button
              type="button"
              onClick={() => signOut()}
              className="signOutButton"
            >
              Sair
            </button>
          </div>
        </>
      ) : (
        <button
          type="button"
          onClick={() => signIn("google")}
          className="signInButton"
        >
          <FaGoogle color="#FFF" />
          Entrar com o Google
        </button>
      )}

      <label htmlFor="phone">Fone/WhatsApp</label>
      <input
        id="phone"
        placeholder="Digite seu tefefone ou WhatsApp"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        required
        disabled={!session}
      />

      <label htmlFor="city">Cidade</label>
      <select
        id="city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!session}
      >
        <option value=""> Escolha sua Cidade </option>
        {citysRondonia.map((item) => {
          return (
            <option key={item.id} value={item.nome}>
              {item.nome}
            </option>
          );
        })}
      </select>

      <div className="buttoncheck">
        <input
          className="botaoCheck"
          type="checkbox"
          id="check"
          required
          disabled={!session}
          onChange={(e) => setRegras(e.target.checked)}
        />
        <label className="check" htmlFor="check">
          Concordo com as
          <a href="/rules" target="_blank">
            Regras do sorteio.
          </a>
        </label>
      </div>

      <div className="buttoncheck">
        <input
          className="botaoCheck"
          type="checkbox"
          id="check"
          required
          disabled={!session}
          onChange={(e) => setTermo(e.target.checked)}
        />
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
