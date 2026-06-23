import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Raja Centro Servizi — CAF, Patronato, Immigrazione · Rovato (BS)" },
      { name: "description", content: "Centro servizi a Rovato (Brescia): CAF, Patronato, pratiche immigrazione, ticketing. Assistenza professionale multilingue." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/rcs.html");
  }, []);
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      color: "#C9A84C",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "serif",
    }}>
      Caricamento Raja Centro Servizi…
    </div>
  );
}
