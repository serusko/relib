import { useState, useEffect } from "react";
import Icon from "./index";

// Dynamically import all SVGs from the "src/icons" folder
const icons = import.meta.glob("./dist/*.svg", {
  eager: true,
});

const IconPreview = () => {
  const [iconList, setIconList] = useState<any[]>([]);

  useEffect(() => {
    // Convert imported modules to an array of { name, path }
    const list = Object.keys(icons).reduce((acc, key) => {
      const name = key.split("/").pop()?.replace(".svg", "");

      if (name) {
        acc.push(name);
      }

      return acc;
    }, [] as any[]);

    setIconList(list);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {iconList.map((name) => (
        <Icon name={name} key={name} />
      ))}
    </div>
  );
};

export default IconPreview;
