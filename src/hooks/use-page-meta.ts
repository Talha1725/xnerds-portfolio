import { useEffect } from "react";
import { SITE_URL, pages } from "@/lib/seo";

const setMeta = (selector: string, attr: string, value: string) =>
  document.querySelector(selector)?.setAttribute(attr, value);

/** Keeps the head in sync on client-side navigation; the prerendered HTML already ships the same values. */
export function usePageMeta(key: keyof typeof pages) {
  useEffect(() => {
    const m = pages[key];
    const url = `${SITE_URL}${m.path === "/404" ? "/" : m.path}`;
    document.title = m.title;
    setMeta('meta[name="description"]', "content", m.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", m.title);
    setMeta('meta[property="og:description"]', "content", m.description);
    setMeta('meta[name="twitter:title"]', "content", m.title);
    setMeta('meta[name="twitter:description"]', "content", m.description);
  }, [key]);
}
