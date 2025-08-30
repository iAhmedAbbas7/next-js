import Hello from "../components/hello";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-[4rem]">NEXT JS APP</h1>
      <Hello />
    </div>
  );
};

export default Home;
