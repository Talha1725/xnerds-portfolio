export const WHATSAPP_NUMBER = "923234314748";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi xNerds, I'd like to talk about a project."
)}`;
export const PHONE_DISPLAY = "+92 323 4314748";
export const EMAIL = "info@xnerds.com";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const GITHUB_URL = "https://github.com/XnerdsORG";
export const LINKEDIN_URL = "https://www.linkedin.com/company/xnerds-solutions/";

export const hostOf = (url: string) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
};
