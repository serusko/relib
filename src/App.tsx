import { useState } from "react";
import { Button } from "../lib";
import Icon from "../lib/Icon";
import TextField from "../lib/TextField/index.tsx";
import Tooltip from "../lib/Tooltip/index.tsx";

export default function App() {
  const [value, setValue] = useState<null | string>(null);

  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Disabled" disabled />
      <Button label="Large" size="large" />
      <Button label="Large" isLoading />
      <Button label="Text" variant="text" />
      <Button label="Primary" variant="primary" />
      <Tooltip
        content={
          <>
            Lest take a look on{" "}
            <a href="#2" className="text-primary-500">
              More
            </a>
          </>
        }
      >
        <Button label="Outline" variant="outline" />
      </Tooltip>

      <TextField
        name="text"
        label="Text Field"
        required
        value={value}
        setValue={setValue}
        helperText="Helper ... text"
        error={
          (value || "").length > 10
            ? "Cannot be longer than 10 characters"
            : undefined
        }
        leftIcon={<Icon name="a" size={18} />}
        max={10}
      />
    </div>
  );
}
