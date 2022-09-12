import type { NextPage } from "next";

import ClassSelectForm from "../components/ClassSelectForm";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello!</h1>
      <ClassSelectForm />
    </div>
  );
};

export default Home;
