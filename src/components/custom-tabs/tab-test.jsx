import Tabs from ".";
import "./tabs.css";

const RandomComponent = () => {
  return <h1>Algun contenido aleatorio</h1>;
};

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Este es el contenido de Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Este es el contenido de Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
