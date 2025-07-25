export type TicketCategoriesProps = {
  id: number;
  name: string;
  icon: string;
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
  icon: string;
  color?: string;
}
