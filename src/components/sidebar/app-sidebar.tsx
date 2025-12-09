"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  WalletCards,
  ChartBarBig,
  ClipboardPaste,
  Landmark,
  CreditCard,
  BanknoteArrowDown,
  // ChartColumnDecreasing,
  // ChartNoAxesCombined,
  // ChartColumnIncreasing,
  UserRoundCog,
  Users,
  ReceiptText,
  BanknoteArrowUp,
  Wrench,
  Scroll,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesColumnDecreasing,
  FileStack,
  Contact,
  Contact2,
  ChartBarStacked,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
// import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavUser } from "@/components/sidebar/nav-user";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  // SidebarMenu,
  // SidebarMenuButton,
  // SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  //
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
    // Cadastro
    {
      title: "Cadastros",
      url: "#",
      icon: ClipboardPaste,
      isActive: true,
      items: [
        {
          title: "Categoria",
          url: "#",
          icon: ChartBarBig,
        },
        {
          title: "SubCategoria",
          url: "#",
          icon: ChartBarStacked,
        },
        {
          title: "Credores",
          url: "#",
          icon: Contact2,
        },
      ],
    },
    // Contas e cartões
    {
      title: "Contas e Cartões",
      url: "#",
      icon: WalletCards,
      items: [
        {
          title: "Contas",
          url: "#",
          icon: Landmark,
        },
        {
          title: "Cartões",
          url: "#",
          icon: CreditCard,
        },
      ],
    },
    // Movimentações
    {
      title: "Movimentações",
      url: "/movement",
      icon: ReceiptText,
      items: [
        {
          title: "Despesas",
          url: "/expense",
          icon: BanknoteArrowDown,
        },
        {
          title: "Receitas",
          url: "/reveue",
          icon: BanknoteArrowUp,
        },
      ],
    },

    // Relatórios
    {
      title: "Relatórios",
      url: "#",
      icon: Scroll,
      isActive: true,
      items: [
        {
          title: "Movimentações",
          url: "/report/movement",
          icon: ChartNoAxesColumnIncreasing,
        },
        {
          title: "Cadastros",
          url: "/report/register",
          icon: FileStack,
        },
      ],
    },
    // Settings
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Parâmetros",
          url: "#",
          icon: Wrench,
        },
        {
          title: "Usuário",
          url: "#",
          icon: UserRoundCog,
        },
        {
          title: "Grupos",
          url: "#",
          icon: Users,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
