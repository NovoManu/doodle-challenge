import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./layout/Layout";
import { ChatView } from "./views";

import "./App.scss";

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <ChatView />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
