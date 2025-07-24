import React, { useState } from "react";
import { homepageCards } from "../data/homepageCards";

const Test = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  function expandHandler(id) {
    setIsExpanded((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="flex h-screen w-full gap-3 flex-wrap">
      {homepageCards.map((card) => {
        const expandId = isExpanded == card.id;

        return (
          <div key={card.id}  onClick={() => expandHandler(card.id)} 
              className={`w-[10vw] flex flex-col flex-wrap gap-3
          ${expandId && "w-[100vw] transition-all duration-200"}
          `}>
            <div>
              <div>
                <card.icon height={40} />
              </div>
              <div>
                <div className=" flex flex-col items-center justify-center border z-10 relative py-2 rounded-md">
                  <p className="mt-3 text-bold text-center">{card.title}</p>
                  <p className="mt-2 mb-1 px-3 text-xs text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
