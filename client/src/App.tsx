import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { GetInvolved } from "@/pages/GetInvolved";
import { Strategy } from "@/pages/Strategy";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

function useHashLocationWithoutSearch(): [string, (to: string) => void] {
  const [hashLocation, navigate] = useHashLocation();
  // hashLocation is like "/" or "/get-involved" already (no "?" here),
  // but we also want to ignore the browser search part for routing.
  const locationWithoutSearch = hashLocation.split("?")[0];
  return [locationWithoutSearch, navigate];
}

function Router() {
  return (
    <WouterRouter hook={useHashLocationWithoutSearch}>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/strategy" component={Strategy} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
