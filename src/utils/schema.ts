export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      let fullUrl = item.url;
      if (!fullUrl.startsWith('http')) {
        const cleanPath = item.url.startsWith('/') ? item.url : `/${item.url}`;
        fullUrl = `https://intelsecsul.com.br${cleanPath}`;
      }
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": fullUrl
      };
    })
  };
}
