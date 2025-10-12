import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-extrabold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground shadow hover:opacity-90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;


