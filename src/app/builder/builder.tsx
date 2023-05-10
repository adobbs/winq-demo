'use client';

import MainNav from "~/components/MainNav";
import {
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline';
import BotBuilder from "~/components/BotBuilder";

const builderNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Builder', href: '/builder', icon: WrenchIcon, current: true },
    { name: 'Job Tracker', href: '/tracker', icon: BriefcaseIcon, current: false },
    { name: 'Marketplace', href: '/marketplace', icon: BuildingStorefrontIcon, current: false },
];

export default function Builder() {
    return (
        <>
            <MainNav page="Bot Builder" navigation={builderNav} />
            <BotBuilder />
        </>
    );
}
