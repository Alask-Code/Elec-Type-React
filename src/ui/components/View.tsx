import { ViewProps } from "../../interface/ViewProps";

export default function View({ children }: ViewProps) {
  return (
    <div className=" w-screen h-screen flex flex-col items-stretch justify-start">
      {children}
    </div>
  );
}
