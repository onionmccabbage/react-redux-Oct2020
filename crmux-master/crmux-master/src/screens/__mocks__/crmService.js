module.exports = {
  get: () => {
    return Promise.resolve({
      actions: [
        {
          id: "interact",
          imagePath: "/interact.png",
          alt: "Interact",
          description: "Interact with Customers.",
        },
        {
          id: "analytics",
          imagePath: "/analytics.png",
          alt: "analytics",
          description: "View how well you are doing.",
        },
        {
          id: "knowledge",
          imagePath: "/knowledge.png",
          alt: "Knowledge",
          description:
            "Search the Knowledge Base for any questions you may have..",
        },
        {
          id: "contact",
          imagePath: "/contact.png",
          alt: "contact",
          description: "Your contacts.",
        },
        {
          id: "customers",
          imagePath: "/customers.png",
          alt: "customers",
          description: "Search your customers.",
        },
        {
          id: "businessstrategy",
          imagePath: "/businessstrategy.png",
          alt: "busines sstrategy",
          description:
            "Learn more about your business strategy to keep up-to-date.",
        },
        {
          id: "brainstorm",
          imagePath: "/brainstorm.png",
          alt: "Connect with other Users",
          description:
            "Connect with other usres, chat, ask questions, collaborate.",
        },
      ],
    });
  },
};
