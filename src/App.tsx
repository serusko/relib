import { useState } from "react";
import { Button } from "../lib";
import Icon from "../lib/Icon";
import TextField from "../lib/TextField/index.tsx";
import Tooltip from "../lib/Tooltip/index.tsx";
import ButtonGroup from "../lib/ButtonGroup/index.tsx";

export default function App() {
  const [value, setValue] = useState<null | string>(null);

  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <a href="#1">Pipik</a>
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" chevron />
      <Button label="Disabled" disabled />
      <Button label="Large" size="large" />
      <Button label="Large" isLoading />
      <Button label="Text" variant="text" />
      <Button label="Primary" variant="primary" chevron />

      <ButtonGroup>
        <Button label="Active" isActive />
        <Button label="Default" />
        <Button label="Disabled" disabled />
      </ButtonGroup>

      <ButtonGroup variant="outline">
        <Button label="Active" isActive />
        <Button label="Default" />
        <Button label="Disabled" disabled />
      </ButtonGroup>

      <ButtonGroup variant="primary">
        <Button label="Active" isActive />
        <Button label="Default" />
        <Button label="Disabled" disabled />
      </ButtonGroup>

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
      <TextField
        name="text"
        label="Text Field"
        required
        value={value}
        setValue={setValue}
      />
      <TextField
        name="text"
        label="Text Field"
        required
        multiline
        value={value}
        setValue={setValue}
        helperText="Helper ... text"
        max={100}
        leftIcon={<Icon name="a" size={18} />}
      />
      <TextField
        name="text"
        label="Text Field"
        required
        value={value}
        setValue={setValue}
        leftItem={<Button label="Left" />}
        rightItem={<Button label="R" variant="primary" />}
      />
    </div>
  );
}
