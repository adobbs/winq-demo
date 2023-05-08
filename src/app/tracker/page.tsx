'use client';

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline'

const trackerNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Builder', href: '/builder', icon: WrenchIcon, current: false },
    { name: 'Job Tracker', href: '/tracker', icon: BriefcaseIcon, current: true },
    { name: 'Marketplace', href: '/marketplace', icon: BuildingStorefrontIcon, current: false },
];

const Tracker: NextPage = () => {
    return (
        <>
            <MainNav page="Job Tracker" navigation={trackerNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Job Tracker</div>
            </main>
        </>
    );
};

export default Tracker;
