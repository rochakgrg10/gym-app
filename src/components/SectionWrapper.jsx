import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title, id } = props;

  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-900 py-10 flex flex-col items-center justify-center gap-4 p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]} <span className="uppercase text-blue-400">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="flex flex-col max-w-[800px] gap-10 mx-auto p-4">
        {children}
      </div>
    </section>
  );
}
