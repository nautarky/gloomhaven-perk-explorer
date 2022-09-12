import React, { FunctionComponent } from "react";
import { Menu } from "@headlessui/react";

const ClassSelectForm: FunctionComponent = () => {
  const printSomething = () => {
    console.log("wow!!!");
  };

  return (
    <Menu as="div">
      <Menu.Button>Click This!</Menu.Button>
      <Menu.Items>
        <div>
          <Menu.Item>
            <button onClick={printSomething}>Inox Brute</button>
          </Menu.Item>
        </div>
        <div>
          <Menu.Item>
            <button>Quatryl Tinkerer</button>
          </Menu.Item>
        </div>
        <div>
          <Menu.Item>
            <button>Human Scoundrel</button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default ClassSelectForm;
