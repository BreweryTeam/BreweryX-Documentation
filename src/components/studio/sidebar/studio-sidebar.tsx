import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Beer, BoxIcon, ChevronDown, CookingPot, type LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type SidebarEntryTab = {
    tab: string;
    type: "tab";
};

type SidebarEntryParent = {
    children: SidebarEntry[];
    isOpenByDefault?: boolean;
    type: "parent";
};

type SidebarEntry = {
    id: string;
    label: string;
    icon: LucideIcon;
} & (SidebarEntryTab | SidebarEntryParent);

const SIDEBAR_ENTRIES: SidebarEntry[] = [
    {
        id: "brewing",
        label: "Brewing",
        icon: Beer,
        isOpenByDefault: true,
        type: "parent",
        children: [
            {
                id: "recipes-tab",
                label: "Recipes",
                icon: CookingPot,
                tab: "recipes",
                type: "tab",
            },
            // {
            //     id: "custom-items-tab",
            //     label: "Custom Items",
            //     icon: BoxIcon,
            //     tab: "custom-items",
            //     type: "tab",
            // },
        ],
    },
];

function SidebarTitle({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
    return (
        <div className="my-0.5 flex items-center gap-2 py-0.5">
            <Icon size={18} />
            <span className="text-[0.9rem] font-medium select-none">{label}</span>
        </div>
    );
}

function SidebarCard({
    children,
    className,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    return (
        <div {...props} className={twMerge("rounded-md px-2 py-0.5 hover:bg-zinc-800", className)}>
            {children}
        </div>
    );
}

function SidebarSection({ entry, onClick }: { entry: SidebarEntry; onClick: (entry: SidebarEntry) => void }) {
    switch (entry.type) {
        case "tab":
            return (
                <SidebarCard onClick={() => onClick(entry)}>
                    <SidebarTitle label={entry.label} icon={entry.icon} />
                </SidebarCard>
            );
        case "parent":
            return (
                <Collapsible className="my-1 flex flex-col items-stretch" defaultOpen={entry.isOpenByDefault}>
                    <CollapsibleTrigger asChild>
                        <SidebarCard className="flex items-center justify-between [&[data-state=open]>svg]:rotate-180">
                            <SidebarTitle label={entry.label} icon={entry.icon} />
                            <ChevronDown className="text-foreground block h-4 w-4 shrink-0 transition-transform duration-200" />
                        </SidebarCard>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="my-1 ml-3 border-l border-zinc-700/75 pl-2">
                        {entry.children.map((child) => (
                            <SidebarSection key={child.id} onClick={() => onClick(child)} entry={child} />
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            );
    }
}

export function StudioSidebar({ onTabSelect }: { onTabSelect: (tab: string) => void }) {
    function handleClick(entry: SidebarEntry) {
        switch (entry.type) {
            case "tab":
                onTabSelect(entry.tab);
                return;
        }
    }

    return (
        <div className="flex min-h-[calc(100dvh-var(--navbar-height))] w-[20rem] flex-col border-r border-zinc-800 bg-zinc-900 p-4">
            {SIDEBAR_ENTRIES.map((entry) => (
                <SidebarSection key={entry.id} onClick={handleClick} entry={entry} />
            ))}
        </div>
    );
}
