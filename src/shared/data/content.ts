import { kindergarten } from "./kindergarten";
import type { SectionId } from "./kindergarten";

/**
 * Every visible text on the site, in Kazakh. Facts come from `kindergarten.ts`;
 * group names are not known yet, so the groups section says so instead of inventing them.
 */

const { ages, groupsCount, meals, hours } = kindergarten;
const agesText = `${ages.from}–${ages.to} жас`;
const hoursText = `${hours.opens}–${hours.closes}`;

export const content = {
  skip: "Негізгі мазмұнға өту",
  nav: {
    home: "Басты бет",
    about: "Біз туралы",
    advantages: "Артықшылықтар",
    groups: "Топтар",
    gallery: "Галерея",
    documents: "Құжаттар",
    contacts: "Байланыс",
  } satisfies Record<SectionId, string>,
  header: {
    home: "«Тасним» — басты бет",
    navLabel: "Негізгі мәзір",
    menu: "Мәзір",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    call: "Қоңырау шалу",
    contact: "Байланысу",
  },
  hero: {
    place: "Балпық би ауылы · Көксу ауданы",
    title: "«Тасним»",
    subtitle: "бөбекжай-балабақшасы",
    greeting: `Қош келдіңіздер! «Тасним» — ${ages.from} жастан ${ages.to} жасқа дейінгі балаларға арналған, тәрбие мен білімді қазақ тілінде беретін бөбекжай-балабақша.`,
    call: "Қоңырау шалу",
    contacts: "Байланыс ақпараты",
    photoAlt: "«Тасним» балабақшасының балалары «Отбасы күні» плакатымен",
    photoSoon: "Мұнда балабақшаның суреті болады",
    facts: [
      { value: agesText, label: "балалардың жасы" },
      { value: `${groupsCount} топ`, label: "балабақшада" },
      { value: `${meals} мезгіл`, label: "тамақтану" },
      { value: hoursText, label: "жұмыс уақыты" },
    ],
  },
  about: {
    eyebrow: "Біз туралы",
    title: "Балпық би ауылындағы қазақ тілді бөбекжай-балабақша",
    lead: `«Тасним» бөбекжай-балабақшасы Жетісу облысы, Көксу ауданы, Балпық би ауылында орналасқан. Балабақшада ${agesText}тағы балаларға арналған ${groupsCount} топ жұмыс істейді. Тәрбие мен білім беру қазақ тілінде жүргізіледі, балалар күніне ${meals} мезгіл тамақтанады.`,
    legal: "Мекеме",
    photoAlt: "«Тасним» балабақшасының тәрбиеленушілері мерекеде",
    photoSoon: "Сурет жақында қосылады",
    facts: [
      { id: "hours", label: "Жұмыс уақыты", value: hoursText },
      { id: "ages", label: "Балалардың жасы", value: agesText },
      { id: "groups", label: "Топтар саны", value: `${groupsCount} топ` },
      { id: "language", label: "Оқыту тілі", value: kindergarten.language },
    ],
  },
  advantages: {
    eyebrow: "Артықшылықтарымыз",
    title: "Неге «Тасним»?",
    lead: "Ата-аналар үшін маңызды негізгі ақпарат — бір жерде.",
    items: [
      {
        id: "language",
        title: "Қазақ тілінде тәрбие мен білім беру",
        text: "Барлық топтарда тәрбие мен оқу қызметі ана тілімізде жүргізіледі.",
      },
      {
        id: "meals",
        title: `Күніне ${meals} мезгіл тамақтану`,
        text: `Балалар балабақшада күн бойы ${meals} рет тамақтанады.`,
      },
      {
        id: "ages",
        title: `${ages.from}–${ages.to} жас аралығындағы балалар`,
        text: `Бөбекжай-балабақша ${ages.from} жастан ${ages.to} жасқа дейінгі балаларға арналған.`,
      },
      {
        id: "groups",
        title: `${groupsCount} топ`,
        text: `Балабақшада ${groupsCount} топ жұмыс істейді.`,
      },
    ],
  },
  groups: {
    eyebrow: "Біздің топтар",
    title: `Балабақшада ${groupsCount} топ бар`,
    lead: "Топтардың атаулары мен толық ақпараты жақында осы бөлімде жарияланады.",
    group: (n: number) => `${n}-топ`,
    nameSoon: "Атауы жақында жарияланады",
    tags: [agesText, "Қазақ тілі", `${meals} мезгіл тамақ`],
    summaryTitle: "Барлық топтарда",
    summary: [`${agesText}тағы балалар`, "Тәрбие мен білім — қазақ тілінде", `Күніне ${meals} мезгіл тамақтану`, `Жұмыс уақыты: ${hoursText}`],
    ask: "Топтар туралы сұрау",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Балабақша өмірінен сәттер",
    more: "Тағы көрсету",
    less: "Жасыру",
    videos: "Бейнежазбалар",
    viewer: "Фотосуреттерді қарау",
    open: (n: number) => `${n}-фотосуретті толық экранда ашу`,
    photoAlt: (n: number) => `«Тасним» балабақшасы — ${n}-фото`,
    videoLabel: (n: number) => `${n}-бейнежазба`,
    play: (n: number) => `${n}-бейнежазбаны көру`,
    soundHint: "Дыбысымен көру үшін басыңыз",
    close: "Жабу",
    prev: "Алдыңғы",
    next: "Келесі",
    moreOnInstagram: "Тағы суреттер — Instagram-да",
    empty: "Фотосуреттер жақында қосылады",
    emptyHint: "Әзірге балабақша жаңалықтарын Instagram парақшамыздан көре аласыз.",
  },
  documents: {
    eyebrow: "Құжаттар",
    title: "Балабақша құжаттары",
    lead: "Балабақшаның құжаттары Google Drive қалтасында жинақталған. Қалта жаңа бетте ашылады.",
    open: "Құжаттарды ашу",
    soon: "Құжаттар қалтасының сілтемесі жақында осында қосылады.",
    note: "Google Drive",
  },
  contacts: {
    eyebrow: "Байланыс",
    title: "Бізбен байланысыңыз",
    lead: "Сұрақтарыңыз болса, қоңырау шалыңыз немесе Instagram арқылы жазыңыз.",
    address: "Мекенжай",
    phone: "Телефон",
    instagram: "Instagram",
    hours: "Жұмыс уақыты",
    hoursValue: hoursText,
    map: "Балабақшаның картадағы орны",
    mapActivate: "Картаны жылжыту үшін басыңыз",
    twoGis: "2ГИС-те ашу",
    yandex: "Яндекс Карталар",
  },
  footer: {
    rights: "Барлық құқықтар қорғалған.",
    top: "Жоғарыға",
  },
} as const;
