'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AppDestination, useDestination } from "@/hooks/use-destination";

type SidebarDestination = {
    destination: AppDestination;
    title: string;
}

export function AppSidebar() {
    const { setDestination } = useDestination();

    const destinationTools: SidebarDestination[] = [
        {
            destination: 'json-minify',
            title: 'JSON Minify',
        }
    ];

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {destinationTools.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild onClick={() => setDestination(item.destination)}>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
