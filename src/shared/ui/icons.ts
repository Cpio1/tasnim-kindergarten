import { Baby, BookOpenText, Clock3, Languages, type LucideIcon, UsersRound, UtensilsCrossed } from "lucide-react";

/** One icon per fact / advantage id, so both layouts show the same symbol for the same thing. */
export const factIcons: Record<string, LucideIcon> = {
  hours: Clock3,
  ages: Baby,
  groups: UsersRound,
  language: Languages,
  meals: UtensilsCrossed,
  learning: BookOpenText,
};
