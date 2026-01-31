"use client";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          ADF → Fabric Migration Blueprint
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#dddddd",
            marginBottom: "24px",
          }}
        >
          Upload your Azure Data Factory ARM template and get an instant:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "32px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>ADF → Fabric component mapping</li>
          <li>Unsupported features list</li>
          <li>Migration risk score</li>
          <li>Effort estimate</li>
          <li>Fabric scaffold assets</li>
        </ul>

        <p
          style={{
            fontSize: "18px",
            color: "#bbbbbb",
            marginBottom: "24px",
          }}
        >
          Fully automated assessment. No consulting. No migrations.
        </p>

        <h2
          style={{
            fontSize: "22px",
            marginBottom: "32px",
          }}
        >
          Early access price:{" "}
          <span style={{ color: "#4ade80" }}>$499 (one-time)</span>
        </h2>

        <button
          onClick={() =>
            (window.location.href =
              "https://2445996621817.gumroad.com/l/porhdn")
          }
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "16px 40px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(37, 99, 235, 0.5)",
          }}
        >
          Get Early Access
        </button>

        <p
          style={{
            marginTop: "16px",
            fontSize: "14px",
            color: "#888888",
          }}
        >
          You’ll receive a downloadable report immediately after purchase.
        </p>
      </div>
    </div>
  );
}
