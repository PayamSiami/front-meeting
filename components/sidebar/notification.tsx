import ArrowIcon from "@/assets/icon/Arrow";
import CloseIcon from "@/assets/icon/Close";
import NotificationIcon from "@/assets/icon/Notification";
import React from "react";

export default function Notifications() {
  return (
    <div className="h-[90px] bg-dark_bg_3 flex items-center p-[13px]">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-x-4">
          <div className="cursor-pointer">
            <NotificationIcon className="fill-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="textPrimary">
              Get notification of new messages
            </span>
            <span className="textSecondary mt-0.5 flex items-center gap-0.5">
              Turn on desktop notifications
              <ArrowIcon className="fill-dark_svg_1 mt-1" />
            </span>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <CloseIcon className={"fill-dark_svg_2"} />
      </div>
    </div>
  );
}
