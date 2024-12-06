import { useState } from "react";
import { Button } from "../lib";
import Icon from "../lib/Icon";
import TextField from "../lib/TextField/index.tsx";
import Tooltip from "../lib/Tooltip/index.tsx";
import ButtonGroup from "../lib/ButtonGroup/index.tsx";
import Toggle from "../lib/Toggle/index.tsx";
import ToggleField from "../lib/ToggleField/index.tsx";
import CheckBox from "../lib/CheckBox/index.tsx";
import Radio from "../lib/Radio/index.tsx";
import { RadioOption } from "../lib/Radio/props";
import RadioField from "../lib/RadioField/index.tsx";

export default function App() {
  const [value, setValue] = useState<null | string>(null);
  const [bul, setBul] = useState<null | boolean>(null);
  const [radio, setRadio] = useState<unknown>(null);

  const radioOptions: RadioOption[] = [
    { value: 1, label: "First" },
    { value: 2, label: "Second" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <a href="#1">Example link</a>

      <div className="grid grid-cols-3 gap-4">
        <Button label="Active" isActive />
        <Button label="Default" size="medium" chevron />
        <Button label="Disabled" disabled />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Button label="Loading" size="small" isLoading />
        <Button label="Loading" isLoading />
        <Button label="Loading" size="large" isLoading />
      </div>

      <ButtonGroup>
        <Button label="Text" variant="text" />
        <Button label="Default" variant="default" />
        <Button label="Primary" variant="primary" chevron />
        <Button label="Outline" variant="outline" chevron />
      </ButtonGroup>

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

      <ButtonGroup variant="text">
        <Button label="Active" isActive />
        <Button label="Default" />
        <Button label="Disabled" disabled />
      </ButtonGroup>

      <div className="grid grid-cols-3 gap-4 ml-72">
        <Tooltip
          placement="left"
          content={
            <>
              Lest take a look on{" "}
              <a href="#2" className="text-primary-500">
                More
              </a>
            </>
          }
        >
          <Button label="Left" variant="outline" />
        </Tooltip>
        <Tooltip
          placement="bottom"
          content={
            <>
              Lest take a look on{" "}
              <a href="#2" className="text-primary-500">
                More
              </a>
            </>
          }
        >
          <Button label="Tooltip" variant="outline" />
        </Tooltip>
        <Tooltip
          placement="right"
          content={
            <>
              Lest take a look on{" "}
              <a href="#2" className="text-primary-500">
                More
              </a>
            </>
          }
        >
          <Button label="Right" variant="outline" />
        </Tooltip>
      </div>
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
        leftIcon={<Icon name="box-3d-center" size={21} />}
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
        leftIcon={<Icon name="box-3d-center" />}
      />
      <TextField
        rightItem={<Button label="R" variant="primary" />}
        leftItem={<Button leadingIcon="box-3d-center" variant="primary" />}
        setValue={setValue}
        label="Text Field"
        value={value}
        name="text"
        required
        placeholder="gege"
      />

      <div className="flex flex-row gap-3 items-center">
        <Toggle value={bul} setValue={(v) => setBul(v)} text="ggg" />
        <ToggleField
          text="Lorem ipsum set amet halalala balalalal salalal  bulalal "
          setValue={(v) => setBul(v)}
          warning="muheheheh"
          label="gg item"
          name="toggle"
          required
          value={bul}
        />
        <ToggleField
          text="Lorem ipsum set amet halalala balalalal salalal  bulalal "
          setValue={(v) => setBul(v)}
          warning="muheheheh"
          label="gg item"
          name="toggle"
          required
          value={bul}
          rtl
        />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <CheckBox value={bul} setValue={(v) => setBul(v)} text="ggg" />
        <ToggleField
          text="Lorem ipsum set amet halalala balalalal salalal  bulalal "
          setValue={(v) => setBul(v)}
          warning="muheheheh"
          label="gg item"
          name="toggle"
          value={bul}
          required
          checkbox
        />
        <ToggleField
          text="Lorem ipsum set amet halalala balalalal salalal  bulalal "
          setValue={(v) => setBul(v)}
          warning="muheheheh"
          label="gg item"
          name="toggle"
          value={bul}
          required
          rtl
          checkbox
        />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <Radio<unknown>
          value={radio}
          setValue={(v) => setRadio(v)}
          options={radioOptions}
        />
        <Radio<unknown>
          value={radio}
          setValue={(v) => setRadio(v)}
          options={radioOptions}
          dir="col"
        />
        <RadioField
          label="Select option"
          options={radioOptions}
          setValue={setRadio}
          value={radio}
          error="There is validation error"
          name="radio1"
          required
        />
      </div>
    </div>
  );
}
