"use client";

import { useEffect } from "react";

const Hello = () => {
  // ! FIX: the useeffect hook is not working as expected
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    window.electron.receiveHello(handleMessage);

    return () => {
      window.electron.stopReceivingHello(handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    window.electron.sayHello();
  };
  return (
    <button
      onClick={onSayHiClick}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Say hi to electron 👋
    </button>
  );
};

export default Hello;
