import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ModeToggle";
import SearchBar from "@/components/SearchBar";
import ToggleLang from "@/components/ToggleLang";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            {/* <Separator orientation='vertical' className='mr-2 h-4' /> */}
          </div>
          <div className='flex-1 flex justify-end px-4'>
            <div className='flex items-center gap-2'>
              <SearchBar />
              <ModeToggle />
              <ToggleLang />
            </div>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0 '>
          {/* <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' /> */}
          <div className='bg-muted/50 p-4 rounded-md flex-1'>
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
