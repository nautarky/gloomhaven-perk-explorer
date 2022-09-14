import React, { FunctionComponent, useState } from "react";
import { Listbox } from "@headlessui/react";

const classNames = ["Inox Brute", "Quatryl Tinkerer", "Human Scoundrel"];

const ClassSelectForm: FunctionComponent = () => {
  const [selectedClassName, setSelectedClassName] = useState(classNames[0]);

  return (
    <div className="w-72 mt-1 ml-1">
      <h1>Class selection:</h1>
      <Listbox value={selectedClassName} onChange={setSelectedClassName}>
        <Listbox.Button className="relative w-full bg-white rounded-lg shadow-md text-left py-1 pl-3 pr-10 border">
          {selectedClassName}
        </Listbox.Button>
        <Listbox.Options className="mt-1 w-full bg-white rounded-lg shadow-md border">
          {classNames.map((name) => (
            <Listbox.Option
              as="div"
              key={name}
              value={name}
              className={({ active }) =>
                `cursor-pointer pl-3 py-1 ${active ? "bg-amber-100" : ""}`
              }
            >
              {name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ClassSelectForm;
