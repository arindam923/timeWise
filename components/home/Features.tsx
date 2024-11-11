import React from "react";

const Features = () => {
  return (
    <section className="py-12 flex flex-col items-center ">
      <h3 className="text-indigo-600 shadow-large shadow-indigo-600">
        What you&apos;ll get
      </h3>

      <h3 className="text-3xl font-bold text-gray-900 dark:text-white py-10 leading-relaxed text-center">
        We resolve problems and make your <br /> life easier. We&apos;re here to
        help you.
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {new Array(4).fill(0).map((_, index) => (
          <div
            key={index}
            className="h-[300px] p-4 flex flex-col justify-end bg-zinc-900 border-2 rounded-lg shadow-lg border-zinc-800"
          >
            <h3 className="text-xl font-semibold text-gray-300">
              {index + 1}. Feature
            </h3>
            <p className="text-sm text-gray-600 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              totam optio ipsam commodi earum magni illo ipsa. Autem, incidunt
              neque.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
