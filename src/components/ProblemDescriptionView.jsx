import { Editor } from "@monaco-editor/react";
import React, { Fragment, useState } from "react";
import defaultCodeSnippets from "../data/defaultCode";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

const ProblemDescriptionView = (props) => {
  const { id, title, statement, examples } = props;
  const [solutionLanguage, setSolutionLanguage] = useState("cpp");
  return (
    <div className="text-gray-800">
      <div className="mx-auto px-6 py-4">
        <div className="grid grid-cols-2 gap-6 items-start">
          <div className="grid grid-cols-1">
            <h1 className="text-xl font-bold">
              {id}. {title}
            </h1>
            <div className="mt-4 text-base font-normal">{statement}</div>
            {examples.map((example, idx) => (
              <div>
                <div className="px-1 mt-6 mb-1 font-medium">
                  Example {idx + 1}:
                </div>
                <div className="border-gray-500 bg-slate-100 rounded-2xl px-3 py-2">
                  <div>
                    <div className="font-bold">Input :</div>
                    <div className="font-mono">{example.Input}</div>
                  </div>
                  <div>
                    <div className="font-bold">Output :</div>
                    <div className="font-mono">{example.Output}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 border-orange-400">
            <div className="">
              <Editor
                height="80vh"
                language={solutionLanguage}
                defaultValue={defaultCodeSnippets.javascript}
                value={defaultCodeSnippets[solutionLanguage]}
                // theme="vs-dark"
              />
            </div>
            <div className="flex justify-end">
              <div className="w-full mt-auto max-w-xs">
              <Listbox value={solutionLanguage} onChange={setSolutionLanguage}>
                <div className="w-full items-right justify-right border-orange-700">
                  <div className="relative py-1 px-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{solutionLanguage}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      className="bottom-full"
                    >
                      <Listbox.Options className="absolute mb-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {Object.keys(defaultCodeSnippets).map(
                          (language, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={language}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {language}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          )
                        )}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </div>
              </Listbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescriptionView;
