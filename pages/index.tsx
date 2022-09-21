import { NextPage } from "next";
import React from "react";

import ClassSelectForm from "../components/ClassSelectForm";

const Home: NextPage = () => (
  <div className="bg-amber-300 w-full h-8">
    <h1 className="text-2xl pl-3">Gloomhaven Perk Explorer</h1>
    <ClassSelectForm />
  </div>
);

export default Home;
