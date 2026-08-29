import { ImageResponse } from "next/og";

export const alt =
  "Bethy — the AI property manager for UK landlords and letting agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030303",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 56,
          }}
        >
          <svg width="60" height="68" viewBox="15 15 355 400" fill="none">
            <path
              d="M192.89 37.5454C199.826 37.5454 206.762 39.7049 211.964 43.93L342.019 149.558C347.221 153.783 350.111 159.604 350.111 165.613V319.219C350.111 329.547 339.707 337.997 326.99 337.997H222.947V384.943C222.947 392.454 211.386 396.21 204.45 390.576L142.024 337.997H58.7888C46.0723 337.997 35.668 329.547 35.668 319.219V165.613C35.668 159.604 38.5581 153.783 43.7603 149.558L173.815 43.93C179.017 39.7049 185.953 37.5454 192.89 37.5454Z"
              fill="#00F2FF"
            />
            <path
              d="M117.33 195.236C166.898 279.247 258.208 279.247 294.732 226.44"
              stroke="#030303"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#FDFCF8",
              letterSpacing: "-0.02em",
            }}
          >
            Bethy
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 76,
              fontWeight: 600,
              color: "#FDFCF8",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Your AI Property Manager.
          </span>
          <span
            style={{
              fontSize: 30,
              color: "#888888",
              marginTop: 28,
              maxWidth: 920,
              lineHeight: 1.4,
            }}
          >
            Answers your phone, triages repairs, sources tradespeople — and
            only asks you to approve the cost.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
