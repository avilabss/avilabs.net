export type Mode = "light" | "dark" | "system";

const DEFAULT_THEME_MODE: Mode = "system";
const THEME_KEY = "theme";

export function getTheme(): Mode {
  const persistedThemePreference = localStorage.getItem(THEME_KEY);

  if (persistedThemePreference === null) {
    return DEFAULT_THEME_MODE;
  }

  return persistedThemePreference as Mode;
}

export function setThemeOnPage(mode: "dark" | "light"): void {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function persistTheme(mode: Mode): void {
  localStorage.setItem(THEME_KEY, mode);
}

export function setTheme(mode: Mode): void {
  if (mode === "system") {
    const shouldUseDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setThemeOnPage(shouldUseDarkTheme ? "dark" : "light");
  } else {
    setThemeOnPage(mode);
    persistTheme(mode);
  }
}

export function toggleTheme(): Mode {
  const nextTheme: Mode = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";

  setTheme(nextTheme);
  return nextTheme;
}

export function initTheme(): Mode {
  const theme = getTheme();
  setTheme(theme);
  return theme;
}
