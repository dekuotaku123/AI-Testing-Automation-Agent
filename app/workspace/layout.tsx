import WorkspaceHeader from "@/components/custom/WorkspaceHeader";
import { auth } from "@clerk/nextjs/server";

async function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  await auth.protect();

  return (
    <div>
      <WorkspaceHeader />
      {children}
    </div>
  );
}

export default WorkspaceLayout;
