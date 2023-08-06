import { SearchInput } from "@/components/SearchInput";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return <div className="h-full p-4 space-y-2">
    <SearchInput/>
  </div>;
};

export default Page;
