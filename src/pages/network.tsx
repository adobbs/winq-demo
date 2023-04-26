import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const networkNav = [
    { name: 'Bot Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Bot Marketplace', href: '/marketplace', icon: GlobeAltIcon, current: false },
    { name: 'Bot Workbench', href: '/workbench', icon: RectangleGroupIcon, current: false },
    { name: 'Network Insights', href: '/network', icon: UsersIcon, current: true },
];

const Network: NextPage = () => {
    return (
        <>
            <MainNav page="Network Insights" navigation={networkNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Network Insights</div>
            </main>
        </>
    );
};

export default Network;
