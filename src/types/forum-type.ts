import { StaticImageData } from "next/image";

export type TicketCategoriesProps = {
  id: number;
  name: string;
  icon: StaticImageData | string;
  count: number;
  activeCount?: number;
};

export type TagsProps = {
  id: number;
  name: string;
};

export interface TopicCategory {
  id: string;
  name: string;
  icon: StaticImageData | string;
  color?: string;
}
