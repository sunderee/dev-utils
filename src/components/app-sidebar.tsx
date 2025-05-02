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
    useSidebar
} from "@/components/ui/sidebar";
import { AppDestination } from "@/hooks/use-destination";

type SidebarDestination = {
    destination: AppDestination;
    title: string;
}

export function AppSidebar() {
    const { setDestination } = useDestinationContext();
    const { setOpenMobile, isMobile } = useSidebar();

    const jsonToolDestination: SidebarDestination[] = [
        {
            destination: 'json-minify',
            title: 'JSON Minify',
        },
        {
            destination: 'json-prettify',
            title: 'JSON Prettify',
        },
        {
            destination: 'json-validate',
            title: 'JSON Validate',
        }
    ];

    const xmlToolDestinations: SidebarDestination[] = [
        {
            destination: 'xml-minify',
            title: 'XML Minify',
        },
        {
            destination: 'xml-prettify',
            title: 'XML Prettify',
        },
        {
            destination: 'xml-to-json',
            title: "XML to JSON"
        }
    ]

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                {/* JSON tools */}
                <SidebarGroup>
                    <SidebarGroupLabel>JSON</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {jsonToolDestination.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton onClick={() => {
                                        setDestination(item.destination);
                                        if (isMobile) {
                                            setOpenMobile(false);
                                        }
                                    }}>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* XML tools */}
                <SidebarGroup>
                    <SidebarGroupLabel>XML</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {xmlToolDestinations.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton onClick={() => {
                                        setDestination(item.destination);
                                        if (isMobile) {
                                            setOpenMobile(false);
                                        }
                                    }}>
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
