import { CardProps } from "../../interface/CardProps";

function Divisor() {
  return <div style={{ height: 1 }} className="bg-zinc-400 my-2 w-full"></div>;
}

export default function Card({ title, content, button, icon }: CardProps) {
  return (
    <div className="bg-zinc-800 p-4 flex flex-col justify-start items-start border border-zinc-400 rounded-xl max-h-1/2 max-w-1/2 hover:shadow-lg shadow-black hover:cursor-pointer hover:scale-105">
      <h1 className="text-xl font-bold text-zinc-50 gap-1 flex items-center">
        {icon}
        {title || "No Title"}
      </h1>
      <Divisor />
      <p className="text-zinc-50">{content || "No Content Provided."}</p>
      {button ? (
        <a
          href={button.link}
          className="border border-zinc-400 text-zinc-50 p-1 px-4 rounded-4xl self-end hover:bg-zinc-950"
          target="_blank"
        >
          {button.desc}
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
