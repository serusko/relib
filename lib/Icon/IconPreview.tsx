import { useState, useEffect } from "react";

// Dynamically import all SVGs from the "src/icons" folder
const icons = import.meta.glob<true, string, string>("./icons/*.svg", {
  eager: true,
});

const IconPreview = () => {
  const [iconList, setIconList] = useState<any[]>([]);

  useEffect(() => {
    // Convert imported modules to an array of { name, path }
    const list = Object.keys(icons).reduce((acc, key) => {
      const name = key.split("/").pop()?.replace(".svg", "");

      if (name) {
        acc.push({
          name,
          // @ts-ignore  Extract file name
          Component: icons[key].default, // The imported SVG component or URL
        });
      }

      return acc;
    }, [] as any[]);

    setIconList(list);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {iconList.map(({ name, Component }, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          {/* Render the SVG */}
          <img src={Component} alt={name} width="50" height="50" />
          {/* Show icon name */}
          <div style={{ marginTop: "10px", fontSize: "12px" }}>{name}</div>
        </div>
      ))}
    </div>
  );
};

export default IconPreview;
