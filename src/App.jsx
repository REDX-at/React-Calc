import { useState } from "react";

export default function App() {
  const [Num, setNum] = useState("");
  const [last, setLast] = useState(0);
  const [oper, setOper] = useState("");
  const [open, setopen] = useState(false);
  const handleOperation = () => {
    switch (oper) {
      case "+":
        setLast(last + Number(Num));
        break;
      case "-":
        setLast(last - Number(Num));
        break;
      case "/":
        setLast(last / Number(Num));
        break;
      case "x":
        setLast(last * Number(Num));
        break;
      case "%":
        setLast(last % Number(Num));
        break;
      default:
        setLast(Number(Num));
        break;
    }
  };
  const handleClick = (item) => {
    if (item === "AC" || item === "C") {
      setNum("");
      setLast(0);
      setOper("");
    } else if (
      item === "+" ||
      item === "-" ||
      item === "x" ||
      item === "/" ||
      item === "%"
    ) {
      if (Num) handleOperation();
      setOper(item);
      setNum("");
    } else if (item === "=") {
      if (Num && oper) handleOperation();
      setOper("");
      setNum("");
    } else {
      setNum((prevState) => prevState + item);
    }
  };

  return (
    <div className="bg-white h-screen text-white overflow-hidden">
      <h1 className="text-red-500 text-[50px] font-bold text-center mt-[2%]">
        Calculatrice
      </h1>
      {!open ? (
        <div className="flex flex-col gap-10 w-[500px] items-center bg-slate-400 rounded-3xl py-10 mx-[30%] shadow-lg">
          <span className="text-[70px]">
            <h1 className="h-24">{Num}</h1>
            <h1 className="h-24">{last}</h1>
          </span>
          <DivFour
            first={"AC"}
            seconde={"C"}
            third={"%"}
            last={"/"}
            primary={"bg-red-500"}
            textC={"text-white"}
            handleClick={handleClick}
          />
          <DivFour
            first={"7"}
            seconde={"8"}
            third={"9"}
            last={"x"}
            primary={"bg-white"}
            textC={"text-black"}
            handleClick={handleClick}
          />
          <DivFour
            first={"4"}
            seconde={"5"}
            third={"6"}
            last={"-"}
            primary={"bg-white"}
            textC={"text-black"}
            handleClick={handleClick}
          />
          <DivFour
            first={"1"}
            seconde={"2"}
            third={"3"}
            last={"+"}
            primary={"bg-white"}
            textC={"text-black"}
            handleClick={handleClick}
          />
          <DivSpan
            first={"0"}
            seconde={"."}
            third={"="}
            last={""}
            primary={"bg-white"}
            textC={"text-black"}
            handleClick={handleClick}
          />
        </div>
      ) : (
        ""
      )}
      <div>
        <button
          className="bg-red-500 text-white py-5 px-16 text-[30px] rounded-3xl mx-[43%] mt-[2%]"
          onClick={() => setopen(!open)}
        >
          {!open ? "Hide" : "open"}
        </button>
      </div>
    </div>
  );
}

function DivFour({ first, seconde, third, last, primary, textC, handleClick }) {
  return (
    <div className={`w-[400px] grid grid-cols-4 gap-4 ${textC}`}>
      <div
        className={`${primary} h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer`}
        onClick={() => handleClick(first)}
      >
        {first}
      </div>
      <div
        className={`${primary} h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer`}
        onClick={() => handleClick(seconde)}
      >
        {seconde}
      </div>
      <div
        className={`${primary} h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer`}
        onClick={() => handleClick(third)}
      >
        {third}
      </div>
      <div
        className={`bg-blue-400  text-white h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer`}
        onClick={() => handleClick(last)}
      >
        {last}
      </div>
    </div>
  );
}
function DivSpan({ first, seconde, third, last, handleClick }) {
  return (
    <div className="w-[400px] grid grid-cols-4 gap-4 text-black">
      <div
        className="bg-white h-[90px] rounded-full col-span-2 flex items-center justify-start px-10 text-[30px] cursor-pointer"
        onClick={() => handleClick(first)}
      >
        {first}
      </div>
      <div
        className="bg-white h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer"
        onClick={() => handleClick(seconde)}
      >
        {seconde}
      </div>
      <div
        className="bg-blue-400 text-white h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer"
        onClick={() => handleClick(third)}
      >
        {third}
      </div>
    </div>
  );
}
