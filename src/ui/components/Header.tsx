import { IoHammer } from "react-icons/io5";

export default function Header() {
  return (
    <header className="border-b flex items-center gap-3 border-zinc-50 w-full p-4 text-zinc-50">
      <IoHammer className="text-2xl" />
      <h1>Base64 Encoder & Decoder</h1>
    </header>
  );
}
