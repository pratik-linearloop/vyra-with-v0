import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, BarChart2, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6 bg-white">
      <nav className="flex items-center gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-medium text-vyra-500 text-base"
        >
          <LayoutGrid className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/analytics"
          className="flex items-center gap-2 font-medium text-gray-500 hover:text-vyra-500 text-base"
        >
          <BarChart2 className="h-4 w-4" />
          Analytics
        </Link>
      </nav>

      <Link href="/dashboard" className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-ngaz4xp7e8I8hRbEYtuHry8cbupNPv.svg"
          alt="Vyra Logo"
          width={72}
          height={30}
          priority
        />
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex hover:text-vyra-500 font-medium text-base hover:cursor-pointer">
          <div className="flex items-center gap-2 group">
            <span className="text-sm font-medium rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:text-vyra-500"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5245 4.62168C12.2029 4.42355 11.7971 4.42355 11.4754 4.62168L5.16008 8.51224C4.84291 8.70763 4.68345 9.03756 4.68458 9.3675C4.68514 9.38064 4.68545 9.39385 4.68549 9.40711C4.69821 9.70676 4.84365 10.002 5.124 10.1917L11.4394 14.467C11.7779 14.6962 12.222 14.6962 12.5605 14.467L18.8759 10.1917C19.4771 9.78478 19.4579 8.89302 18.8398 8.51224L12.5245 4.62168ZM4.6855 12.3101L5.99995 13.1999V16.12C5.99995 17.4168 6.64858 18.6277 7.72814 19.3463C10.3156 21.0685 13.6843 21.0685 16.2718 19.3463C17.3513 18.6277 18 17.4168 18 16.12V13.1999L19.9971 11.8479C21.8006 10.627 21.7431 7.95175 19.8888 6.80943L13.5735 2.91886C12.6087 2.32449 11.3913 2.32449 10.4264 2.91886L4.11106 6.80943C3.13882 7.40838 2.66055 8.42876 2.6855 9.43997V15.1741C2.6855 15.7264 3.13321 16.1741 3.6855 16.1741C4.23778 16.1741 4.6855 15.7264 4.6855 15.1741V12.3101ZM13.6817 16.1231L16 14.5538V16.12C16 16.7476 15.6861 17.3336 15.1636 17.6814C13.2473 18.9568 10.7526 18.9568 8.8363 17.6814C8.31385 17.3336 7.99995 16.7476 7.99995 16.12V14.5538L10.3182 16.1231C11.3339 16.8108 12.666 16.8108 13.6817 16.1231Z"
                  fill="currentColor"
                  className="opacity-40 group-hover:opacity-100"
                />
              </svg>
            </span>
            Go to student view
          </div>
        </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-40 hover:opacity-100 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9999 2C10.1446 2 8.64062 3.50399 8.64062 5.35925V7.01678C7.00616 8.10461 5.9291 9.96364 5.9291 12.0742V12.7354C5.9291 14.0859 5.50994 15.4032 4.72946 16.5053L4.59254 16.6987C3.75302 17.8842 4.28526 19.5437 5.6577 20.0198L6.67398 20.3723C10.1238 21.5691 13.8761 21.5691 17.3259 20.3724L18.3423 20.0198C19.7147 19.5437 20.2469 17.8841 19.4074 16.6986L19.2705 16.5053C18.4899 15.4031 18.0707 14.0859 18.0707 12.7353V12.0742C18.0707 9.9636 16.9936 8.10454 15.3591 7.01672V5.35925C15.3591 3.50399 13.8551 2 11.9999 2ZM13.3591 6.15616V5.35925C13.3591 4.60856 12.7506 4 11.9999 4C11.2492 4 10.6406 4.60856 10.6406 5.35925V6.15618C11.0776 6.05622 11.5326 6.00342 11.9999 6.00342C12.4672 6.00342 12.9221 6.05621 13.3591 6.15616ZM7.9291 12.0742C7.9291 9.82598 9.75167 8.00342 11.9999 8.00342C14.2482 8.00342 16.0707 9.82598 16.0707 12.0742V12.7353C16.0707 14.5 16.6185 16.2211 17.6383 17.6612L17.7752 17.8545C17.8449 17.9529 17.8007 18.0907 17.6868 18.1302L16.6704 18.4828C13.6452 19.5323 10.3547 19.5323 7.32947 18.4828L6.31319 18.1303C6.19922 18.0907 6.15503 17.9529 6.22474 17.8545L6.36166 17.6611C7.38142 16.2211 7.9291 14.5 7.9291 12.7354V12.0742Z"
              fill="currentColor"
            />
          </svg>
          {/* <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-vyra-500" /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
