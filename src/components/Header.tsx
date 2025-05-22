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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-8 rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage
                    src={user?.user_metadata?.profile_pic}
                    className="object-cover"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {user?.user_metadata?.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4" />
                    My URLs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  <LogOut className="h-4 w-4" />
                  <span
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Sign out
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="h-full bg-[#0186da] hover:bg-[#0186da] cursor-pointer"
              onClick={() => navigate("/auth")}
            >
              Login
            </Button>
          )}
        </div>
      </nav>
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    </>
  );
};

export default Header;
