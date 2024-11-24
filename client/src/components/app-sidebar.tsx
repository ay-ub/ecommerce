import * as React from "react";
import {
  Archive,
  AudioWaveform,
  Bell,
  Command,
  File,
  GalleryVerticalEnd,
  LayoutDashboard,
  Settings2,
  ShoppingBag,
  TableOfContents,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard Overview",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Sales statistics",
          url: "sales-statistics",
        },
        {
          title: "Order summary",
          url: "order-summary",
        },
        {
          title: "Alerts",
          url: "alerts",
        },
      ],
    },
    {
      title: "Products manager",
      url: "#",
      icon: Archive,
      items: [
        {
          title: "Product List",
          url: "product-list",
        },
        {
          title: "create Product",
          url: "create-product",
        },
      ],
    },
    {
      title: "Commands",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "All orders",
          url: "orders",
        },
      ],
    },
    {
      title: "Customers Management",
      url: "#",
      icon: User,
      items: [
        {
          title: "Customer list",
          url: "customer-list",
        },
      ],
    },
    {
      title: "Categories Management",
      url: "#",
      icon: TableOfContents,
      items: [
        {
          title: "Categories list",
          url: "categories",
        },
      ],
    },
    // {
    //   title: "Content Management",
    //   url: "#",
    //   icon: File,
    //   items: [
    //     {
    //       title: "Content",
    //       url: "Content",
    //     },
    //   ],
    // },
    // {
    //   title: "Notifications & Alerts",
    //   url: "#",
    //   icon: Bell,
    //   items: [
    //     {
    //       title: "New order notifications",
    //       url: "new-order-notifications",
    //     },
    //   ],
    // },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General settings",
          url: "general-settings",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        my logo
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
