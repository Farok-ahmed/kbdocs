export interface AccordionItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface AccordionColumn {
  accordionId: string;
  items: AccordionItem[];
}

export interface FaqTab {
  id: string;
  title: string;
  columns: AccordionColumn[];
}
