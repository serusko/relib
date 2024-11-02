import { Button } from "../lib";

export default function App() {
  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Disabled" disabled />
      <Button label="Large" size="large" />
      <Button label="Large" isLoading />
      <Button label="Text" variant="text" />
      <Button label="Primary" variant="primary" />
      <Button label="Outline" variant="outline" />
    </div>
  );
}
