import { useEffect } from "react";

const SITE = "https://xnerds.co";

/** Sets the tab title, meta description and canonical URL for the current route. */
export function usePageMeta(title: string, description?: string, path = "/") {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${SITE}${path}`);
  }, [title, description, path]);
}
