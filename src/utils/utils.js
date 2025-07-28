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