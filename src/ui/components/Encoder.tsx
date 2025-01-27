import { useState } from "react";
export default function Encoder() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  function EncodeString(string) {
    setOutput(Buffer.from(string).toString("base64"));
  }

  return (
    <div className="m-4 flex flex-col gap-4 mb-0 text-zinc-50">
      <h1 className="p-1 text-xl border rounded-xl border-transparent hover:border-zinc-50">
        Encode Text
      </h1>
      <div className="flex flex-col border border-zinc-50 p-4 gap-4 rounded-xl bg-zinc-900">
        <input
          type="text"
          onChange={(el) => {
            setText(el.target.value);
            if (el.target.value === "") {
              setOutput("");
            }
          }}
          placeholder="Paste or Type Text to Encode"
          className="border border-zinc-50 p-2 rounded-xl placeholder:text-zinc-50"
        />
        <p className="border border-zinc-50 p-2 rounded-xl">
          {output || "Output"}
        </p>
        <button
          onClick={() => EncodeString(text)}
          className="border border-zinc-50 p-2 rounded-xl cursor-pointer"
        >
          Encode Text
        </button>
      </div>
    </div>
  );
}
