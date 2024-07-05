import React, { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;

  const [setsCompleted, setSetsCompleted] = useState(0);

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  return (
    <div className="bg-slate-950 flex flex-col gap-4 rounded-md p-4 sm:flex-wrap">
      <div className="flex flex-col gap-x-4 sm:flex-row sm:items-center sm:flex-wrap">
        <h4 className="text-3xl hidden sm:inline text-slate-400 sm:text-4xl md:text-5xl font-semibold">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-slate-400 text-sm capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscles Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2">
        {exercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-content-center">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-slate-900 border-solid w-full"
            >
              <h3 className="text-slate-400 capitalize text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncrement}
          className="border-[1.5px] border-solid border-blue-900 hover:border-blue-600 duration-200 w-full p-2"
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets Completed</h3>
          <p className="font-medium text-white">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
