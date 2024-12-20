import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Quotes from "./pages/Quotes";
import QuoteResponse from "./pages/QuoteResponse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Quotes />} />
          <Route path="/quote-response" element={<QuoteResponse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
