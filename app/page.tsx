"use client";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>ADF → Fabric Migration Blueprint</h1>

      <p>
        Upload your Azure Data Factory ARM template and get:
      </p>

      <ul>
        <li>ADF → Fabric component mapping</li>
        <li>Unsupported features list</li>
        <li>Migration risk score</li>
        <li>Effort estimate</li>
        <li>Fabric scaffold assets</li>
      </ul>

      <p>
        Fully automated assessment. No consulting. No migrations.
      </p>

      <h2>Early access price: $499</h2>

      <button onClick={() => window.location.href = "https://2445996621817.gumroad.com/l/porhdn"}>
        Get Early Access
      </button>
    </div>
  );
}
