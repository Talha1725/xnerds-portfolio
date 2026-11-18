import { useEffect, useState } from "react";

/**
 * False during server rendering and the first client render, true right after.
 * Use it for anything that depends on the real URL (query strings, unknown paths), so the first
 * client render matches the prerendered HTML and React can hydrate it without a mismatch.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
