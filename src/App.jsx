// import { useState } from "react";
// import { iconApi } from "./Api/IconApi";
// import { useUsersState } from "./Api/UserState";

import { useState } from "react";

// const iconFill = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={iconApi.size}
//     height={iconApi.size}
//     fill={iconApi.color}
//     viewBox="0 0 256 256"
//   >
//     <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
//   </svg>
// );
// const iconStroke = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={iconApi.size}
//     height={iconApi.size}
//     fill={iconApi.color}
//     viewBox="0 0 256 256"
//   >
//     <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
//   </svg>
// );
// export default function App() {
//   return (
//     <div className="flex my-[30%]">
//       <RateBoxMosueEnter />
//       <RateBoxOnClick />
//     </div>
//   );
// }

// // components

// function RateBoxMosueEnter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="text-4xl bg-slate-100 mx-auto py-14 w-[40%] rounded-xl shadow-md">
//       <div className="flex gap-2 items-center justify-center">
//         {Array.from({ length: count }, (_, i) => (
//           <span
//             key={i}
//             className="text-blue-500 cursor-pointer"
//             onMouseEnter={() => setCount(i + 1)}
//           >
//             {iconFill}
//           </span>
//         ))}
//         {Array.from({ length: iconApi.stars - count }, (_, i) => (
//           <span
//             key={i}
//             className="text-blue-500 cursor-pointer"
//             onMouseEnter={() => setCount(i + (count + 1))}
//           >
//             {iconStroke}
//           </span>
//         ))}
//       </div>
//       {count === 0 ? (
//         <h1 className="text-center mt-10">Rate The {iconApi.productName}</h1>
//       ) : (
//         <h1 className="text-center mt-10">
//           You give {iconApi.productName} {count} Star
//         </h1>
//       )}
//     </div>
//   );
// }
// function RateBoxOnClick() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="text-4xl bg-slate-100 mx-auto py-14 w-[40%] rounded-xl shadow-md">
//       <div className="flex gap-2 items-center justify-center">
//         {Array.from({ length: count }, (_, i) => (
//           <span
//             key={i}
//             className="text-blue-500 cursor-pointer"
//             onClick={() => setCount(i + 1)}
//           >
//             {iconFill}
//           </span>
//         ))}
//         {Array.from({ length: iconApi.stars - count }, (_, i) => (
//           <span
//             key={i}
//             className="text-blue-500 cursor-pointer"
//             onClick={() => setCount(i + (count + 1))}
//           >
//             {iconStroke}
//           </span>
//         ))}
//       </div>
//       {count === 0 ? (
//         <h1 className="text-center mt-10">Rate The {iconApi.productName}</h1>
//       ) : (
//         <h1 className="text-center mt-10">
//           You give {iconApi.productName} {count} Star
//         </h1>
//       )}
//     </div>
//   );
// }

export default function App() {
  const [Num, setNum] = useState([]);
  const handleClick = (item) => {
    if (item === "AC" || item === "C") setNum([]);
    else {
      setNum((prevState) => [...prevState, item]);
    }
  };
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <div className="flex flex-col gap-10 w-[40%] items-center bg-slate-400 rounded-3xl py-10 my-[10%] mx-[30%]">
        <span className="text-[70px]">
          <ul className="flex">
            {Num.map((num, i) => (
              <li key={i}>{num}</li>
            ))}
          </ul>
        </span>
        <DivFour
          first={"AC"}
          seconde={"C"}
          third={"%"}
          last={"/"}
          primary={"bg-red-500"}
          secondary={"green"}
          textC={"text-white"}
          handleClick={handleClick}
        />
        <DivFour
          first={"7"}
          seconde={"8"}
          third={"9"}
          last={"X"}
          primary={"bg-white"}
          secondary={"green"}
          textC={"text-black"}
          handleClick={handleClick}
        />
        <DivFour
          first={"4"}
          seconde={"5"}
          third={"6"}
          last={"-"}
          primary={"bg-white"}
          secondary={"green"}
          textC={"text-black"}
          handleClick={handleClick}
        />
        <DivFour
          first={"1"}
          seconde={"2"}
          third={"3"}
          last={"+"}
          primary={"bg-white"}
          secondary={"green"}
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
        className={`bg-blue-400 text-white h-[90px] rounded-full flex items-center justify-center text-[30px] cursor-pointer`}
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
