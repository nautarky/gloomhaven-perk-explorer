import type { NextPage } from "next";

import ClassSelectForm from "../components/ClassSelectForm";

const Home: NextPage = () => {
  return (
    <div className="bg-amber-300 w-full h-8">
      <h1 className="text-2xl pl-3">Gloomhaven Perk Explorer</h1>
      <ClassSelectForm />
    </div>
  );
};

export default Home;
