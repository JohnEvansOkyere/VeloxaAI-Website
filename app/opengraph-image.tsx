import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/apple-touch-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(0,251,255,0.22), transparent 55%), radial-gradient(circle at 8% 92%, rgba(14,165,233,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              padding: 8,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={40} height={40} alt="Veloxa" />
          </div>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#ffffff", letterSpacing: -0.5 }}>
            Veloxa
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: -1.5,
            maxWidth: 980,
          }}
        >
          Software engineering & applied AI, built in Accra
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 860,
          }}
        >
          Operations platforms, internal systems, integrations and AI agents for businesses in Africa and abroad.
        </div>
      </div>
    ),
    { ...size }
  );
}
