import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as BaseAccordion,
} from '@/components/ui/accordion';

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function AccordionTwo({ data }: Props) {
  return (
    <BaseAccordion type='single' collapsible className='w-full'>
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`} key={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
