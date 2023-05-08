'use client';

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline'
import ChatThread from "~/components/ChatThread";

const conversationsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Bot Builder', href: '/builder', icon: WrenchIcon, current: false },
    { name: 'Job Tracker', href: '/tracker', icon: BriefcaseIcon, current: false },
    { name: 'Marketplace', href: '/marketplace', icon: BuildingStorefrontIcon, current: false },
];

const Conversations: NextPage = () => {
    return (
        <>
            <MainNav page="Conversations" navigation={conversationsNav} />
            <ChatThread />
        </>
    );
};

export default Conversations;
