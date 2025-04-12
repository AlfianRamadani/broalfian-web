import React from 'react';
import { Icons1, Icons2 } from '../assets/stack/icon';
import { Icon } from '../Types';

const StackRight = ({ Icons }: { Icons: Icon[] }) => {
  return (
    <div className="flex gap-10 animate-infinite-scroll-left group-hover:animation-pause p-4">
      {Icons?.map((icon, index) => (
        <div key={index} className="flex flex-row justify-center gap-4 px-10 py-5 bg-card1 hover:ring-2 hover:ring-ring1 rounded-xl">
          <div className="flex items-center w-12 h-12  md:w-16 md:h-16">
            <img src={icon.src} alt={icon.alt} className="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-primary font-medium text-sm">{icon.alt}</p>
            <p className="text-secondary font-thin text-sm">{icon.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const InfiniteStack = () => {
  return (
    <div className="flex flex-col py-5 md:py-10">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#57C098] font-plusjakarta font-semibold text-xl">Tech Stack and Tools</p>
        <p className="text-primary font-plusjakarta text-2xl font-bold">Explore professional skillset and expertise</p>
      </div>
      <div className="py-7">
        <div className="inline-flex w-full  flex-nowrap group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <StackRight Icons={Icons1} />
          <StackRight Icons={Icons1} />
        </div>
        <div className="inline-flex w-full flex-nowrap group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <StackRight Icons={Icons2} />
          <StackRight Icons={Icons2} />
        </div>
      </div>
    </div>
  );
};

export default InfiniteStack;
