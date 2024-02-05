import React from "react";
import ProductTopSection from "@/app/_components/ProductTopSection";
import ProductInstructions from "@/app/_components/ProductInstructions";
import ProductSuggestion from "@/app/_components/ProductSuggestion";
import { teas, TeaProps } from "@/app/teas";

type Params = {
  params: {
    product: string;
  };
};

const page = ({ params }: Params) => {
  const { product } = params;
  const productId = parseInt(product, 10);

  const tea = teas.find((t: TeaProps) => t.id === productId);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {tea ? (
        <>
          <ProductTopSection
            name={tea.name}
            description={tea.description}
            image={tea.image}
            origin={tea.characteristics.origin as string}
            organic={tea.characteristics.organic as boolean}
            prices={tea.prices}

          />
          <ProductInstructions 
          flavour={tea.characteristics.flavour as string}
          qualities={tea.characteristics.qualities as string}
          caffeine={tea.characteristics.caffeine as string}
          allergens={tea.characteristics.allergens as string} 
          ingredients={tea.characteristics.ingredients as string}
          />
          <ProductSuggestion />
        </>
      ) : (
        <p>Tea not found</p>
      )}
    </div>
  );
};

export default page;
