import { ImageResponse } from "next/og";
import { loadGoogleFont, logoDataUri } from "@/shared/lib/og";

export const alt = "«Тасним» бөбекжай-балабақшасы — Балпық би ауылы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const title = "«Тасним»";
  const subtitle = "бөбекжай-балабақшасы";
  const facts = ["2–5 жас", "6 топ", "5 мезгіл тамақ", "07:30–18:00"];
  const place = "Балпық би ауылы, Желтоқсан көшесі, 2Б";

  const [display, body] = await Promise.all([
    loadGoogleFont("Nunito", 900, title + subtitle),
    loadGoogleFont("Golos+Text", 500, facts.join("") + place),
  ]);
  const fonts = [
    ...(display ? [{ name: "Nunito", data: display, weight: 900 as const }] : []),
    ...(body ? [{ name: "Golos", data: body, weight: 500 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FAF9F3", position: "relative", fontFamily: "Golos", color: "#25372D" }}>
        <div style={{ position: "absolute", right: -160, top: -180, width: 640, height: 640, borderRadius: "58% 42% 46% 54%", background: "#DCEEDC", display: "flex" }} />
        <div style={{ position: "absolute", right: 160, bottom: -240, width: 460, height: 460, borderRadius: 999, background: "#4B956B", opacity: 0.25, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#4B956B" }}>{place}</div>
          <div style={{ display: "flex", fontFamily: "Nunito", fontSize: 110, lineHeight: 1, marginTop: 22, color: "#245C43" }}>{title}</div>
          <div style={{ display: "flex", fontFamily: "Nunito", fontSize: 48, lineHeight: 1.2, marginTop: 10 }}>{subtitle}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            {facts.map((f) => (
              <span key={f} style={{ display: "flex", background: "#FFFFFF", borderRadius: 999, padding: "12px 22px", fontSize: 24, border: "1px solid #E3E8DC" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: 120, top: 150, display: "flex", borderRadius: 72, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri()} width={280} height={280} alt="" />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
