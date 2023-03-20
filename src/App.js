import Header from "./pages/master/Header";
import {AppRouter} from "./routes/AppRouter";
import Footer from "./pages/master/Footer";

function App() {
  return (
      <>
        <Header />
        <><AppRouter /></>
        <Footer />
      </>
  );
}

export default App;
