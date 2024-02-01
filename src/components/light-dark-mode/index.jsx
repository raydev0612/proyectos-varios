import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="light_dark_mode" data-theme={theme}>
      <div className="container">
        <p>Hola Dev!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
