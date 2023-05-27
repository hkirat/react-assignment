import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const Problem = () => {
  const { problemId } = useParams();
  return (
    <div className="grid grid-cols-3 gap-4 m-4 h-full">
      <div className="rounded-md bg-white h-full p-4">
        <h1 className="text-xl">Problem Title</h1>
        <p className="text-sm py-2">
          Problem Description: ljalsdkj kjalskdfjlakf alkdfj akdj fakdfj alkdfj
          akld fjalkdf jakldfjakldf jad
        </p>
      </div>
      <div className="rounded-md bg-white col-span-2 p-4 flex flex-col gap-4">
        <h1 className="text-xl">Code Here</h1>
        <textarea
          className="w-full flex-grow resize-none outline rounded-md outline-slate-400 focus:outline-slate-800 p-4"
          placeholder="Code Here"
        />
        <div className="w-full flex gap-4 flex">
          <select className="rounded-md mr-auto outline-slate-400 focus:outline-slate-800 p-2">
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
          <Button text="Run Code" />
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Problem;
