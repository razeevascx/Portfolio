import React, { lazy, Suspense } from "react";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Hero/Index";
import { Toaster } from "react-hot-toast";

// Lazy load components
const About = lazy(() => import("./pages/About/About"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const Service = lazy(() => import("./components/Service"));

// Custom Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen text-red-500">
          <h2 className="text-2xl font-bold">Oops! Something went wrong</h2>
          <p className="mt-4">{this.state.error.toString()}</p>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <>
            <Suspense fallback={<LoadingFallback />}>
              <Navbar />
            </Suspense>

            <main className="relative">
              <Suspense fallback={<LoadingFallback />}>
                <section id="home">
                  <Home />
                </section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <section id="about">
                  <About />
                </section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <section id="service">
                  <Service />
                </section>
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <section id="projects">
                  <Project />
                </section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <section id="contact">
                  <Contact />
                </section>
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <section id="footer">
                  <Footer />
                </section>
              </Suspense>
            </main>
          </>
        </Suspense>
        <Toaster />
      </ErrorBoundary>
    </div>
  );
}

export default App;
