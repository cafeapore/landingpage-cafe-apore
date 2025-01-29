import HighlightCard from "../HighlightCard";

const HighlightsSection = () => {
  const products = [
    {
      id: "1",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "2",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "3",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "4",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "5",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "6",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "7",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
    {
      id: "8",
      title: "Nome do produto 500g",
      image: "/coffee.png",
      description:
        "Lorem ipsum dolor sit amet. Sed optio incidunt ab aspernatur internos aut impedit distinctio At iusto perferendis et saepe porro vel omnis possimus?",
    },
  ];

  return (
    <div className="max-w-6xl flex flex-col w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10">
      <div className="font-bold text-5xl border-l-2 mr-auto border-red-700 pl-2 h-32">
        <p>Nossos</p>
        <p>Destaques</p>
      </div>

      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-5">
        {products.map((product) => (
          <HighlightCard data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
