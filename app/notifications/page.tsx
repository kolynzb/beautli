"use client";
import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const [showPersonal, setShowPersonal] = useState(true);

  return (
    <>
      <div className="flex my-4 items-center justify-between mb-4 w-full px-12">
        <h3 className="font-bold text-base  ">Notifications</h3>

        <select
          id="dropdown"
          name="dropdown"
          className="focus:outline-none"
          onChange={(e) => {
            if (e.target.value === "all") setShowPersonal(true);
            if (e.target.value === "personal") setShowPersonal(false);
          }}
        >
          <option value="all">
            All <Badge variant="outline">20</Badge>
          </option>
          <option value="personal">
            Personal <Badge variant="outline">20</Badge>
          </option>
        </select>
      </div>
      <div className="py-2 w-full">
        <a
          href="#"
          className="relative flex items-center px-12 py-5 border-b hover:bg-gray-100 "
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
          className="relative flex items-center px-12 py-5 border-b hover:bg-gray-100 "
        >
          <div className="text-gray-600 text-sm mx-2">
            <p className="font-light">
              <span className="font-bold text-black">Deposit sent</span> to{" "}
              <span className="font-bold text-black">
                Jane’s beauty Parlour
              </span>{" "}
              for{" "}
              <span className="font-bold text-black">medium short braids</span>.
            </p>
            <p className="font-light ">
              <span className="font-normal">$500:</span> For June 20th, 2023
            </p>{" "}
          </div>
          <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
            10m
          </span>
        </a>
        {showPersonal && (
          <>
            <a
              href="#"
              className="relative flex items-center px-12 py-5 border-b hover:bg-gray-100 "
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
              className="relative flex items-center px-12 py-5 border-b hover:bg-gray-100 "
            >
              <div className="text-gray-600 text-sm mx-2">
                <p className="font-light">
                  You have cancelled your
                  <span className="font-bold text-black">
                    Natural glam look
                  </span>{" "}
                  appointment.
                </p>
                <p className="font-light flex items-center ">
                  <CreditCard className="text-primary w-4 mr-2" />
                  <span className="font-normal">$70 charged</span>
                </p>{" "}
              </div>
              <span className="absolute bottom-4 right-12 font-extralight text-gray-300 text-xs">
                30m
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-center px-12 py-5 border-b hover:bg-gray-100 "
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
          </>
        )}
      </div>
    </>
  );
};

export default Notifications;
