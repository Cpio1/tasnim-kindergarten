/**
 * Confirmed facts about the kindergarten. Everything on the site is built from this file
 * and the texts in `content.ts` — nothing else should be invented
 * (no group names, teachers, licences, prices or programmes).
 */

export const kindergarten = {
  brand: "Тасним",
  fullName: "«Тасним» бөбекжай-балабақшасы",
  legalName: "«Бай қонақ» ЖШС",
  /** Russian legal form, used in structured data for search engines */
  legalNameRu: "ТОО «Бай қонақ»",
  ages: { from: 2, to: 5 },
  groupsCount: 6,
  meals: 5,
  language: "Қазақ тілі",
  hours: { opens: "07:30", closes: "18:00" },
  phone: { display: "+7 (707) 246-83-11", tel: "+77072468311" },
  instagram: {
    handle: "@tasnimbalabakshasy",
    url: "https://www.instagram.com/tasnimbalabakshasy/",
  },
  address: {
    region: "Жетісу облысы",
    district: "Көксу ауданы",
    locality: "Балпық би ауылы",
    street: "Желтоқсан көшесі, 2Б",
  },
  /**
   * «Құжаттар»: the documents live in a shared Google Drive folder, the site only links to it.
   * Paste the folder's share link here (Drive → Share → "Anyone with the link").
   * While it is empty, no button is rendered — only a calm "the link will appear soon" note.
   */
  documents: {
    driveUrl: "",
  },
  /**
   * Map marker. The kindergarten has no 2GIS/OSM card yet, so the point is the middle of
   * Желтоқсан street in Балпық би (OpenStreetMap way 385737542). Replace it with the exact
   * coordinates of house 2Б when known (right-click the building in Yandex Maps → copy coordinates).
   */
  geo: {
    lat: 44.894607,
    lng: 78.234047,
  },
} as const;

const { address, geo } = kindergarten;

/** Full address in one line, e.g. for the map label and structured data. */
export const fullAddress = `${address.region}, ${address.district}, ${address.locality}, ${address.street}`;
const searchQuery = encodeURIComponent(`Балпық би, Желтоқсан көшесі, 2Б`);

export const links = {
  tel: `tel:${kindergarten.phone.tel}`,
  instagram: kindergarten.instagram.url,
  /** Map services search the address themselves — they find the building once it is in their database. */
  twoGis: `https://2gis.kz/search/${searchQuery}`,
  yandex: `https://yandex.kz/maps/?text=${searchQuery}`,
  /** Keyless interactive Yandex map widget with a marker. */
  mapWidget: `https://yandex.kz/map-widget/v1/?ll=${geo.lng}%2C${geo.lat}&z=16&pt=${geo.lng}%2C${geo.lat}%2Cpm2gnm`,
} as const;

/** Section ids, shared by both layouts so anchors survive switching between them. */
export const sectionIds = ["home", "about", "advantages", "groups", "gallery", "documents", "contacts"] as const;
export type SectionId = (typeof sectionIds)[number];

/** Header navigation (order matters). */
export const navSections = ["about", "advantages", "groups", "gallery", "documents", "contacts"] as const satisfies readonly SectionId[];
