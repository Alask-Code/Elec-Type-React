export default function Encoder() {
  return (
    <div className="m-4 flex flex-col gap-4 mb-0 text-zinc-50">
      <h1 className="p-1 text-xl border rounded-xl border-transparent hover:border-zinc-50">
        Decode Text
      </h1>
      <div className="flex flex-col border border-zinc-50 p-4 gap-4 rounded-xl">
        <input
          type="text"
          placeholder="Paste or Type Base64 String"
          className="border border-zinc-50 p-2 rounded-xl placeholder:text-zinc-50"
        />
        <p className="border border-zinc-50 p-2 rounded-xl tex">Output</p>
        <button className="border border-zinc-50 p-2 rounded-xl cursor-pointer">
          Decode Base64
        </button>
      </div>
    </div>
  );
}
