import React, { FunctionComponent, useState } from "react";
import { Listbox } from "@headlessui/react";

import { GloomhavenClass } from "../types/gloomhaven";

const ClassSelectForm: FunctionComponent = () => {
  const [selectedClassName, setSelectedClassName] = useState(GloomhavenClass.InoxBrute);

  return (
    <div className="w-72 mt-1 ml-1 border pl-1 pr-1 pt-1 rounded-lg h-20">
      <h1 className="pl-3">Class</h1>
      <Listbox value={selectedClassName} onChange={setSelectedClassName}>
        <Listbox.Button className="relative w-full bg-white rounded-lg shadow-md text-left py-1 pl-3 border">
          {selectedClassName}
        </Listbox.Button>
        <Listbox.Options className="mt-1 w-full bg-white rounded-lg shadow-md border">
          {Object.keys(GloomhavenClass).map((ghClass) => (
            <Listbox.Option
              as="div"
              key={GloomhavenClass[ghClass as keyof typeof GloomhavenClass]}
              value={GloomhavenClass[ghClass as keyof typeof GloomhavenClass]}
              className={({ active }) => `cursor-pointer pl-3 py-1 ${active ? "bg-amber-100" : ""}`}
            >
              {GloomhavenClass[ghClass as keyof typeof GloomhavenClass]}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ClassSelectForm;
