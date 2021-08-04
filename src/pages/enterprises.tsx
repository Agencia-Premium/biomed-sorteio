import { LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { EnterpriseCard } from "../Templates/EnterpriseCard";

export default function HomeEnterprise() {
  const [level, setLevel] = useState(0);
  useEffect(() => {
    setLevel(60);
  }, []);
  return (
    <>
      <LinearProgress variant="determinate" value={level} />
      <EnterpriseCard />
    </>
  );
}
