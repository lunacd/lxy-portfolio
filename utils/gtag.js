export const pageView = (url) => {
  window.gtag("config", "G-26S1RW6P14", {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
