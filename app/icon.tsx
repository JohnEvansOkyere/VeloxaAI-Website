import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          background: "linear-gradient(135deg, #00FBFF 0%, #0EA5E9 100%)",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#020617",
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
