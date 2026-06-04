import React from "react";
import ClawGuardDashboard from "./ClawGuardDashboard";
import LandingPage from "./LandingPage";

function App() {
  const [dashboardOpen, setDashboardOpen] = React.useState(() => window.location.hash === "#dashboard");

  if (dashboardOpen) {
    return <ClawGuardDashboard />;
  }

  return (
    <LandingPage
      onEnterDashboard={() => {
        window.location.hash = "dashboard";
        setDashboardOpen(true);
      }}
    />
  );
}

export default App;
