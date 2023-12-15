import { cn } from "@/lib/utils";
import {
  CalendarX2,
  Ban,
  Banknote,
  CalendarDays,
  CalendarOff,
  Clock,
  LucideIcon,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h3 className="font-bold text-base content-start text-left mt-7 mb-3 w-full pl-6">
        Booking Details
      </h3>

      <figure className="flex-col flex items-right justify-between border-b py-4 px-4 w-full">
        <div className="flex items-center justify-start space-x-3 py-4 px-2">
          <Image
            src="/images/avatar.png"
            alt=""
            className="rounded-md h-24 w-24 bg-gray-500 object-contain"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-extrabold text-sm text-left">
              Natural Weave and charcoal black
            </h3>
            <div className="flex  items-center justify-center space-x-2">
              <Image
                src="/images/logo-rect.png"
                alt=""
                className="rounded-md h-12 w-12 bg-gray-500 object-contain"
                width={50}
                height={50}
              />
              <div className="flex flex-col text-xs  items-start justify-start">
                <h3 className="font-bold text-left ">Mie’s Stylist Parlor</h3>
                <p className="text-gray-400">
                  Created By
                  <span className="font-medium text-black pl-2">
                    Angella Vladez
                  </span>
                </p>
                <p className="text-gray-400">
                  Contact
                  <span className="font-medium text-black pl-2">
                    (276) 496-7367
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 pl-2 justify-start">
          <IconText Icon={CalendarDays} text="Friday, 20th February 2023" />
          <IconText Icon={Clock} text="11:00am" />
          <IconText Icon={MapPin} text="Chicago" />
        </div>
      </figure>

      <div className="flex-col divider-y px-6 py-5">
        <div className="flex-col flex mb-3">
          <IconText Icon={CalendarX2} text="Cancellation Policy" size="lg" />
          <p className="font-light py-2 text-xs">
            You will not be charged if you cancel or modify this booking at
            least 48 hours before your original booking start date.
          </p>
        </div>
        <div className="flex-col flex mb-3">
          <IconText Icon={Ban} text="No show Policy" size="lg" />
          <p className="font-light py-2 text-xs">
            You will be charged 50% of the total booking amount If you don’t
            show up for your appointment.
          </p>
        </div>
        <div className="flex-col flex mb-3">
          <IconText Icon={Banknote} text="Deposit Policy" size="lg" />
          <p className="font-light py-2 text-xs">
            A $50 class deposit will be charged upon booking
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-3 pb-6 pt-2 pl-6 text-xs ">
        <table className="w-[60%]  text-left">
          <div className="flex space-x-4 items-center mb-2">
            <h3 className="font-extrabold text-sm text-left">Cost breakdown</h3>
            <p className="rounded-lg bg-gray-300 text-gray-500 px-2 text-xs">
              Credit Card
            </p>
          </div>

          <tbody className="border-b-2">
            <tr className="flex">
              <td className="flex-1 py-1">Natural Glam Look</td>
              <td className="min-w-[44px]">$200</td>
            </tr>
            <tr className="flex py-1">
              <td className="flex-1">Add on 1</td>
              <td className="min-w-[44px]">$3.75</td>
            </tr>
            <tr className="flex py-1">
              <td className="flex-1">Tax</td>
              <td className="min-w-[44px]">$6.00</td>
            </tr>
          </tbody>

          <div>
            <tr className="flex text-base text-gray-500 ">
              <th className="w-full py-2">Total</th>
              <th className="min-w-[44px] py-2">$207.75</th>
            </tr>
          </div>
        </table>
      </div>
    </>
  );
}

type IconTextProps = {
  Icon: LucideIcon;
  text: string;
  size?: "sm" | "lg";
};
function IconText({ Icon, text, size = "sm" }: IconTextProps) {
  return (
    <div className="flex items-center justify-start space-x-2">
      <Icon
        className={cn(
          "text-primary",
          {
            "text-sm": size === "sm",
          },
          {
            "text-md": size === "lg",
          }
        )}
      />
      <p
        className={cn(
          "font-bold",
          {
            "text-xs": size === "sm",
          },
          {
            "text-sm": size === "lg",
          }
        )}
      >
        {text}
      </p>
    </div>
  );
}
