'use client';

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline'

const marketplaceNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Builder', href: '/builder', icon: WrenchIcon, current: false },
    { name: 'Job Tracker', href: '/tracker', icon: BriefcaseIcon, current: false },
    { name: 'Marketplace', href: '/marketplace', icon: BuildingStorefrontIcon, current: true },
];

const Marketplace: NextPage = () => {
    return (
        <>
            <MainNav page="Marketplace" navigation={marketplaceNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Marketplace</div>
            </main>
        </>
    );
};

export default Marketplace;
