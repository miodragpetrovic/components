import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto items-center py-32 px-10">
      <h2 className="py-10 text-gray-400">Button components</h2>
      <div>
        <Button />
      </div>
    </div>
  );
}
