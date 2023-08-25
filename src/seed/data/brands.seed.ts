import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: "Volvo",
    createdAt: new Date().getTime(),
    updatedAt: null,
  },
  {
    id: uuid(),
    name: "Toyota",
    createdAt: new Date().getTime(),
    updatedAt: null,
  },
  {
    id: uuid(),
    name: "Honda",
    createdAt: new Date().getTime(),
    updatedAt: null,
  },
];
