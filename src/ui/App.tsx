import View from "./components/View";
import Card from "./components/Card";
import { IoLogoGithub, IoLogoReact } from "react-icons/io5";
import { CardProps } from "../interface/CardProps";

function App() {
  const data: CardProps[] = [
    {
      title: "GitHub",
      icon: <IoLogoGithub />,
      content: "Build and ship software on a single, collaborative platform.",
      button: {
        link: "https://github.com",
        desc: "GitHub Page",
      },
    },
    {
      title: "React",
      icon: <IoLogoReact />,
      content: "The library for web and native user interfaces.",
      button: {
        link: "https://react.dev",
        desc: "React Docs",
      },
    },
  ];
  return (
    <View>
      {data.map((item) => (
        <Card
          key={Date.now() + item.title}
          title={item.title}
          icon={item.icon}
          content={item.content}
          button={item.button}
        />
      ))}
    </View>
  );
}

export default App;
