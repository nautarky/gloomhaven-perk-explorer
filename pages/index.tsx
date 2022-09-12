import type { NextPage } from "next";

import ClassSelectForm from "../components/ClassSelect";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello!</h1>
      <ClassSelectForm />
    </div>
  );
};

export default Home;
