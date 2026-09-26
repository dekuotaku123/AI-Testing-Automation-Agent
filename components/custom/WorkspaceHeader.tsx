import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function WorkspaceHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/workspace"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100/70 p-1">
            {/* Active */}
            <Link
              href="/workspace"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
            >
              Workspace
            </Link>

            {/* Inactive */}
            <Link
              href="/pricing"
              className="rounded-md px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-black"
            >
              Pricing
            </Link>

            <Link
              href="/support"
              className="rounded-md px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-black"
            >
              Support
            </Link>
          </div>
        </nav>

        {/* User */}
        <div className="flex items-center border-l border-zinc-200 pl-4">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default WorkspaceHeader;