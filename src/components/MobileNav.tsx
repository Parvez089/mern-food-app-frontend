/** @format */
"use client";
import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type='button'
          className='cursor-pointer p-2 rounded-md hover:bg-accent focus:ring-2 focus:ring-primary'>
          <Menu className='text-primary' />
        </button>
      </SheetTrigger>
      <SheetContent side='right' className='bg-white space-y-3'>
        <SheetTitle className='py-4 mx-2'>
          {isAuthenticated ? (
            <span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='text-primary' />
              {user?.name}
            </span>
          ) : (
            <span className='text-primary text-xl'>Welcome to Foodies</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex flex-col gap-4'>
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button onClick={() => loginWithRedirect()} className='flex-1 mx-2 font-bold bg-primary text-white '>
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
