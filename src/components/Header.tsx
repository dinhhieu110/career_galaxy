import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LinkIcon, LogOut, UserIcon } from "lucide-react";
import { BarLoader } from "react-spinners";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Header = () => {
  const navigate = useNavigate();

  //   TODO: Remove later
  const user = {
    user_metadata: {
      profile_pic: "",
      name: "Wilson Tran",
    },
  };
  const loading = false;

  return (
    <>
      <nav className="py-4 flex justify-between items-center border-b px-4 sm:px-8 lg:px-16 xl:px-22 2xl:px-24">
        <Link
          to="/"
          className="font-extrabold text-[#0186da] text-shadow-md text-4xl flex items-center gap-2"
        >
          <img src="/logo.png" alt="" className="h-14" />
          Career Galaxy
        </Link>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    </>
  );
};

export default Header;
