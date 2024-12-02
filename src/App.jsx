import React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load components
const About = lazy(() => import('./components/About/About'));
const Home = lazy(() => import('./components/Hero/Index'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Project = lazy(() => import('./components/Project'));
const Contact = lazy(() => import('./components/Contact'));
const Service = lazy(() => import('./components/Service'));
const Name = lazy(() => import('./components/Name'));

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
    console.error('Uncaught error:', error, errorInfo);
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
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
  </div>
);

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          {!showMainContent ? (
            <Name />
          ) : (
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
                  <section id="projects">
                    {/* <Project /> */}
                  </section>
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                  <section id="service">
                    <Service />
                  </section>
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                  <section id="contact">
                    <Contact />
                  </section>
                </Suspense>
              </main>
            </>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
