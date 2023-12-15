import React from "react";
import {
  Home,
  LucideIcon,
  Search,
  Menu,
  CalendarDays,
  UserPlus,
  BellPlus,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navItems = [
  {
    icon: Home,
    name: "Home",
    url: "/",
  },
  {
    icon: CalendarDays,
    name: "Appointments",
    url: "/",
  },
  {
    icon: UserPlus,
    name: "Following",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 lg:px-40 h-[20vh] border-b-2 border-gray-100">
      <Image
        src="/beautli.svg"
        className="object-contain"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="hidden lg:flex items-center justify-between space-x-7">
        <SearchBar />
        {navItems.map((item, key) => (
          <NavIcon key={key} Icon={item.icon} text={item.name} />
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <NavIcon Icon={BellPlus} text={"Notifications"} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <NotificationBar />
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback>JK</AvatarFallback>
        </Avatar>
      </div>
      <Menu className="lg:hidden" />
    </nav>
  );
};

type NavIconProps = {
  Icon: LucideIcon;
  text: string;
};
const NavIcon: React.FC<NavIconProps> = ({ Icon, text }) => {
  return (
    <div className="flex flex-col text-[#979797] items-center justify-center  hover:text-[#F1B8DD] hover:cursor-pointer transition-all duration-150 ease-in-out hover:scale-105">
      <Icon />
      <p className="text-xs">{text}</p>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className=" relative mx-auto  text-[#979797]">
      <button type="submit" className="absolute left-0 top-0 mt-4 ml-4">
        <Search className=" text-black h-4 w-4" />
      </button>{" "}
      <input
        className="border-2 border-gray-[#979797] text-[#979797] bg-white h-12  pl-14 pr-36 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export const NotificationBar = () => {
  return (
    <div className="flex justify-center">
      <div
        x-show="dropdownOpen"
        className="  bg-white rounded-md shadow-lg overflow-hidden z-20"
        style={{ width: "30rem" }}
      >
        <div className="py-2 w-full">
          <a
            href="#"
            className="relative flex items-center px-10 py-2 border-b hover:bg-gray-100 "
          >
            <img
              className="h-14 w-14 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <div className="text-gray-600 text-sm mx-2">
              <p className="font-light">
                <span className="font-bold text-black">
                  {" "}
                  Mies beauty parlour{" "}
                </span>{" "}
                accepted your booking req...
              </p>
              <p className="font-light ">
                <span className="font-normal">$500:</span> For June 20th, 2023
              </p>{" "}
            </div>
            <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
              2m
            </span>
          </a>
          <a
            href="#"
            className="relative flex items-center px-10 py-2  border-b hover:bg-gray-100 "
          >
            <div className="text-gray-600 text-sm mx-2">
              <p className="font-light">
                <span className="font-bold text-black">Deposit sent</span> to{" "}
                <span className="font-bold text-black">
                  Jane’s beauty Parlour
                </span>{" "}
                for{" "}
                <span className="font-bold text-black">
                  medium short braids
                </span>
                .
              </p>
              <p className="font-light ">
                <span className="font-normal">$500:</span> For June 20th, 2023
              </p>{" "}
            </div>
            <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
              10m
            </span>
          </a>
          <a
            href="#"
            className="relative flex items-center px-10 py-2  border-b hover:bg-gray-100 "
          >
            <img
              className="h-14 w-14 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <div className="text-gray-600 text-sm mx-2">
              <p className="font-light">
                <span className="font-bold text-black"> Rebecca Wright </span>{" "}
                sent you a message
              </p>
              <p className="font-light ">
                Hey are you available to do these conrows for me.....
              </p>{" "}
            </div>
            <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
              20m
            </span>
          </a>

          <a
            href="#"
            className="relative flex items-center px-10 py-2  border-b hover:bg-gray-100 "
          >
            <img
              className="h-14 w-14 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <div className="text-gray-600 text-sm mx-2">
              <p className="font-light">
                <span className="font-bold text-black">
                  {" "}
                  Mies beauty parlour{" "}
                </span>{" "}
                accepted your booking req...
              </p>
              <div className="font-light flex items-center ">
                <Button className="scale-75" size={"sm"}>
                  Review
                </Button>
                <Button className="scale-75" size={"sm"} variant={"outline"}>
                  Decline
                </Button>
              </div>{" "}
            </div>
            <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
              2m
            </span>
          </a>
        </div>{" "}
        <Link
          href="/notifications"
          className="  text-black text-center font-bold"
        >
          <DropdownMenuItem className=" bg-[#F1B8DD] hover:bg-[#F1B8DD] h-12 text-center flex items-center justify-center">
            See All
          </DropdownMenuItem>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
