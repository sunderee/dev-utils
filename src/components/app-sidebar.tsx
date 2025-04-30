'use client';

import { useDestinationContext } from "@/components/destination-provider";
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
import { AppDestination } from "@/hooks/use-destination";

type SidebarDestination = {
    destination: AppDestination;
    title: string;
}

export function AppSidebar() {
    const { setDestination } = useDestinationContext();

    const destinationTools: SidebarDestination[] = [
        {
            destination: 'json-minify',
            title: 'JSON Minify',
        },
        {
            destination: 'json-prettify',
            title: 'JSON Prettify',
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
                                    <SidebarMenuButton onClick={() => setDestination(item.destination)}>
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
