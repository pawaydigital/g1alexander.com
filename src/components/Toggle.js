import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useState } from "react";

export function Toggle() {
  const [darkMode, setDarkMode] = useState();

  const state = useDarkMode(darkMode);

  const handleDarkMode = () => setDarkMode(!state);

  return (
    <>
      {state ? (
        <button onClick={handleDarkMode}>
          <Icon path={mdiWhiteBalanceSunny} size={1} color="blue" />
        </button>
      ) : (
        <button onClick={handleDarkMode}>
          <Icon path={mdiWeatherNight} size={1} color="red" />
        </button>
      )}
    </>
  );
}