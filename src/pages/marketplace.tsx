import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const marketplaceNav = [
    { name: 'Bot Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Marketplace', href: '/marketplace', icon: GlobeAltIcon, current: true },
    { name: 'Bot Workbench', href: '/workbench', icon: RectangleGroupIcon, current: false },
    { name: 'Network Insights', href: '/network', icon: UsersIcon, current: false },
];

const Marketplace: NextPage = () => {
    return (
        <>
            <MainNav page="Bot Marketplace" navigation={marketplaceNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Bot Marketplace</div>
            </main>
        </>
    );
};

export default Marketplace;
