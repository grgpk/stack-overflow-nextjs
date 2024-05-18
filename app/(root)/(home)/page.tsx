import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
};

export default Home;
