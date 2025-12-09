export type CLSX_MODS = Record<string, boolean>;

export function clsx(classNames: string[] = [], mods: CLSX_MODS = {}): string {
  return [
    ...classNames,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key),
  ]
    .join(" ")
    .trim();
}
