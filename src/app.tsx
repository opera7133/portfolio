import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <main class="min-h-screen overflow-hidden">
            <div class="splashbg"></div>
            <Header />
            <div id="main-content">
              <div>
                <Suspense>{props.children}</Suspense>
              </div>
            </div>
          </main>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
