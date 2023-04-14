import { useState } from "react";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import AppSidebar from "./scenes/global/AppSidebar";
import Team from "./scenes/team";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppSidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Dashboard />} />
              <Route path="/invoices" element={<Dashboard />} />
              <Route path="/form" element={<Dashboard />} />
              <Route path="/faq" element={<Dashboard />} />
              <Route path="/bar" element={<Dashboard />} />
              <Route path="/pie" element={<Dashboard />} />
              <Route path="/line" element={<Dashboard />} />
              <Route path="/geography" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
