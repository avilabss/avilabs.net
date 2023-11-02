export const routes = {
  home: () => "/",
  article(slug: string) {
    return `/articles/${slug}`;
  },
};
