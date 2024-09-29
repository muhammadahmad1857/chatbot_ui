import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegEdit, FaEllipsisV } from "react-icons/fa";
import chatHistory from "@/data/chatData.json"; // Adjust this import if needed
import Link from "next/link";
import ChatType from "@/types/chatType";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
//   const [activeOptions, setActiveOptions] = useState<string | null>(null);

//   const handleOptionsClick = (id: string) => {
//     setActiveOptions(activeOptions === id ? null : id);
//   };

//   return (
//     <div
//       className={`sidebar relative z-50 max-h-screen bg-violet-700 p-4 transition-all duration-300 ${
//         isOpen ? "translate-x-0 w-80 block" : "-translate-x-full hidden "
//       }`}
//       style={{ scrollbarGutter: "stable" }}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <button
//           onClick={() => setIsOpen(false)}
//           className="cursor-pointer hover:text-white rounded-xl px-[4px] transition-all duration-300"
//         >
//           <IoMdClose size={32} />
//         </button>
//         <button className="cursor-pointer font-bold px-[4px] py-1 hover:text-white rounded-xl transition-all duration-300">
//           <FaRegEdit size={32} />
//         </button>
//       </div>
//       <div className="max-h-[calc(100vh-80px)]  overflow-y-auto">
//         {chatHistory.map((item: ChatType, index: number) => (
//           <div key={index} className="relative">
//             <div className="pr-4 pl-2 rounded-xl hover:bg-violet-800 hover:-translate-y-2 transition-all duration-500 h-20 flex flex-col justify-center">
//               <div className="flex justify-between items-center">
//                 <Link href={`/c/${item.id}`} className="flex-1">
//                   <h2 className="text-xl font-bold text-nowrap w-60 overflow-hidden text-ellipsis">
//                     {item.name}
//                   </h2>
//                 </Link>
//                 <button
//                   onClick={() => handleOptionsClick(item.id)}
//                   className="ml-2"
//                 >
//                   <FaEllipsisV size={20} className="text-gray-700" />
//                 </button>
//               </div>
//               <p className="text-xs text-gray-200 pl-20">{item.timeStamp}</p>
//             </div>

//             {activeOptions === item.id && (
//               <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md z-10">
//                 <ul className="p-2">
//                   <li className="cursor-pointer hover:bg-gray-200 p-1">
//                     Rename
//                   </li>
//                   <li className="cursor-pointer hover:bg-gray-200 p-1">
//                     Delete
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeOptions, setActiveOptions] = useState<string | null>(null);

  const handleOptionsClick = (id: string) => {
    setActiveOptions(activeOptions === id ? null : id);
  };

  return (
    <div
      className={`sidebar max-md:fixed max-md:top-0 max-md:left-0 z-50 max-h-screen bg-violet-700 p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-80" : "-translate-x-full hidden"
      }`}
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(false)}
          className="cursor-pointer hover:text-white rounded-xl px-[4px] transition-all duration-300"
        >
          <IoMdClose size={32} />
        </button>
        <button className="cursor-pointer font-bold px-[4px] py-1 hover:text-white rounded-xl transition-all duration-300">
          <FaRegEdit size={32} />
        </button>
      </div>
      <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
        {chatHistory.map((item: ChatType, index: number) => (
          <div key={index} className="relative">
            <div className="pr-4 pl-2 rounded-xl hover:bg-violet-800 hover:-translate-y-2 transition-all duration-500 h-20 flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <Link href={`/c/${item.id}`} className="flex-1">
                  <h2 className="text-xl font-bold text-nowrap w-60 overflow-hidden text-ellipsis">
                    {item.name}
                  </h2>
                </Link>
                <button
                  onClick={() => handleOptionsClick(item.id)}
                  className="ml-2"
                >
                  <FaEllipsisV size={20} className="text-gray-700" />
                </button>
              </div>
              <p className="text-xs text-gray-200 pl-20">{item.timeStamp}</p>
            </div>

            {activeOptions === item.id && (
              <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md z-10">
                <ul className="p-2">
                  <li className="cursor-pointer hover:bg-gray-200 p-1">
                    Rename
                  </li>
                  <li className="cursor-pointer hover:bg-gray-200 p-1">
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
