import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Benefits = () => {
  return (
    <section className="p-5">
      <Title
        title="Benefits"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        link="View All"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefitItems.map((item) => (
          <div className="bg-white p-10 flex flex-col rounded-xl">
            <div className="bg-orange-300 flex justify-center items-center mx-auto px-5 py-2 rounded-xl mb-4">
              <img src={item.icon} alt={item.title} width={64} height={64} />
            </div>
            <div>
                <h2 className="font-bold">{item.title}</h2>
                <p>{item.text}</p>
            </div>
            <div className="mt-auto ml-auto w-10 h-10 rounded-xl border-white-95 flex justify-center items-center text-orange-300 hover:bg-orange-300 hover:text-white">
                <ArrowOutwardIcon/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
