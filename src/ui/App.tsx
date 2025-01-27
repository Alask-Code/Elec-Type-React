import Encoder from "./components/Encoder";
import Decoder from "./components/Decoder";
import Header from "./components/Header";
import View from "./components/View";

function App() {
  return (
    <View>
      <Header />
      <Encoder />
      <Decoder />
    </View>
  );
}

export default App;
