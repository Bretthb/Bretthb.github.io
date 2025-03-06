import React from "react";

import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "About Me",
    path: "/aboutme",
    icon: <MdIcons.MdEmojiPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <MdIcons.MdOutlineLightbulb />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Digital Library",
    icon: <IoIcons.IoMdBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Book Portfolio",
        path: "/Literature/BooksRead",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Books to Read",
        path: "/Literature/Books-To-Read",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export default SidebarData;
