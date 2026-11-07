import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 text-5xl">This page is not in the index.</h1>
        <a href="/" className="mt-6 inline-block text-sm underline decoration-border underline-offset-4 hover:decoration-primary">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
