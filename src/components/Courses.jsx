import React from "react";
import Title from "./Title";
import { coursesSecItems } from "../constant/data";
const Courses = () => {
  return (
    <section className="p-5">
      <Title
        title="Our Courses"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        link="View All"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {coursesSecItems.map((item) => (
          <div className="bg-white p-10 flex flex-col rounded-xl">
            <div className="">
              <img src={item.img} alt={item.title} width={350} height={250} className="rounded-[5px] w-full" />
            </div>
            <div className="flex items-center flex-wrap gap-3">
                {
                    item.tags.map((tag)=>(
                        <span className="border border-amber-400 mt-2 p-2 rounded-md">
                            {tag.tag}
                        </span>
                    ))
                }

                <p className="ml-auto">{item.instructor}</p>
            </div>
            <div className="mt-5 mb-5">
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <button className="w-full bg-gray-50 p-2 rounded-md border border-amber-100 hover:border-amber-400 hover:text-amber-400">Get it now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
