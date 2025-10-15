export type Brand = {
  id: string;
  name: string;
};

export const BRANDS: Brand[] = [
  { id: "minute-to-month", name: "Minute To Month" },
  { id: "acme-co", name: "Acme Co" },
  { id: "globex", name: "Globex" },
];

export function getBrandById(id?: string | null) {
  if (!id) return undefined;
  return BRANDS.find((b) => b.id === id);
}

