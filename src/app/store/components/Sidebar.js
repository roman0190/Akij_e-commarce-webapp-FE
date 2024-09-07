import React from "react";
const list = [
  {
    id: 1,
    name: "Rocking chair",
    Path: "/",
  },
  {
    id: 2,
    name: "Side chair",
    Path: "/",
  },
  {
    id: 3,
    name: "Lounge chair",
    Path: "/",
  },
];
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-[12px] pt-[40px] w-[263px] h-[1000px] border-r">
      {list.map((item) => (
        <a
          key={item.id}
          href=""
          className="flex items-center px-[24px] rounded-lg text-[#717171]  text-[22px] h-[53px] w-[231px] font-medium hover:font-semibold hover:bg-black hover:text-white "
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
