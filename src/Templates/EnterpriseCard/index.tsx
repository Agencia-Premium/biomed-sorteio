import React from "react";
import { UnitCard } from "../../components/UnitCard";
import { ContainerEnterprise } from "./styles";

export function EnterpriseCard() {
  return (
    <ContainerEnterprise>
      <div className="containerPg">
        <h1>Escolha uma de nossas Unidades</h1>
        <UnitCard />
      </div>
    </ContainerEnterprise>
  );
}
