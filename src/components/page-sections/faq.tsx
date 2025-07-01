import FaqLayout from "./faqLayout";

export default function Faq() {
  const items = [
    {
      id: 1,
      title: "Purchasing Online",
      icon: "icon_folder-alt",
      content: [
        {
          question: "How can I deploy Documentation Landing?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "Is maternity covered in health insurance policies?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "What are the documents required for claiming?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "Any useful books on numerical computing?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "How do I repair an item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "How can I deploy Documentation Landing?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "Is there a warranty on my item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
      ],
    },
    {
      id: 2,
      title: "Post Forms",
      icon: "icon_cloud-upload_alt",
      content: [
        {
          question: "Is there a warranty on my item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
      ],
    },
    {
      id: 3,
      title: "Pricing & Support",
      icon: "icon_key_alt",
      content: [
        {
          question: "Is there a warranty on my item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
      ],
    },
    {
      id: 4,
      title: "Registration & Profile",
      icon: "icon_lightbulb_alt",
      content: [
        {
          question: "Is there a warranty on my item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
        {
          question: "Is there a warranty on my item?",
          answer:
            "Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!",
        },
      ],
    },
    {
      id: 5,
      title: "Returns",
      icon: "icon_bag_alt",
      content: [],
    },
    {
      id: 6,
      title: "Care & Repair",
      icon: "icon_menu-square_alt2",
      content: [],
    },
    {
      id: 7,
      title: "Warranty",
      icon: "icon_lock-open_alt",
      content: [],
    },
  ];

  return (
    <section className="doc_faq_area_two sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Frequently Asked Questions</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Some dodgy chav bevvy amongst argy-bargy spiffing absolutely
            bladdered nancy boy cup of tea a load of old tosh porkies.
          </p>
        </div>
        <FaqLayout data={items} />
      </div>
    </section>
  );
}
