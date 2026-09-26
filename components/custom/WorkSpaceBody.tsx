"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "../ui/button";

function WorkSpaceBody() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Workspace
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your integrations and workspace settings.
          </p>
        </div>

        {/* Credits */}
        <div className="rounded-full border bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <span className="text-blue-500">Credits:</span>{" "}
          {userDetail?.credits ?? 0}
        </div>
      </div>

      {/* Integrations */}
      <div className="mt-8">
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          Integrations
        </h3>

        <div className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-white">
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <h4 className="font-medium">GitHub</h4>
                <p className="text-sm text-muted-foreground">
                  Connect your GitHub account to access repositories.
                </p>
              </div>
            </div>

            {/* Right */}
            <Button
              variant="outline"
              className="gap-1.5"
            >
              <span className="text-lg leading-none">+</span>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSpaceBody;