import { clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

import { menuStructure } from "@/utils/constants";

export function filterMenuByRights(userRights) {
  return Object.entries(menuStructure)
    .map(([menuLabel, buttons]) => {
      const allowedButtons = buttons.filter((btn) =>
        userRights.includes(btn.right)
      );
      if (allowedButtons.length === 0) return null;
      return { [menuLabel]: allowedButtons };
    })
    .filter(Boolean);
}

export function formatBreadcrumbLabel(str) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCustomDate(inputDate) {
  const date = dayjs(inputDate);

  const dayOfWeek = date.format("ddd");    // Tue
  const day = date.format("D");            // 22
  const month = date.format("MMMM");       // April
  const year = date.format("YYYY");        // 2025

  const hour = date.format("h");           // 9 (12-hour)
  const minute = date.format("mm");        // 20
  const ampm = date.format("A");           // AM

  const timeWithSpaces = `${hour} : ${minute} ${ampm}`;

  return `${dayOfWeek}, ${day} ${month} ${year}\n${timeWithSpaces}`;
}