'use client';

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline'

const builderNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Builder', href: '/builder', icon: WrenchIcon, current: true },
    { name: 'Job Tracker', href: '/tracker', icon: BriefcaseIcon, current: false },
    { name: 'Marketplace', href: '/marketplace', icon: BuildingStorefrontIcon, current: false },
];

const Builder: NextPage = () => {
    return (
        <>
            <MainNav page="Bot Builder" navigation={builderNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Bot Builder</div>
            </main>
        </>
    );
};

export default Builder;
