import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormQuest from "../components/QuestForm";

export default function HomeForm() {
  const [level, setLevel] = useState(60);
  useEffect(() => {
    setLevel(90);
  }, []);
  return (
    <>
      <LinearProgress variant="determinate" value={level} />
      <FormQuest />
    </>
  );
}
