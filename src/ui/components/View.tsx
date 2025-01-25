import { ViewProps } from "../../interface/ViewProps";

export default function View({ children }: ViewProps) {
  return (
    <div className="gap-2 w-screen h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
