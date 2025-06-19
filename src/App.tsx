import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./layout/Layout";

import "./App.scss";

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        Hello World!
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
