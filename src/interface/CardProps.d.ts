export interface CardProps {
  icon: ReactNode;
  title: string;
  content: string;
  button?: {
    link: string;
    desc: string;
  };
}