import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const networksNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: true },
    { name: 'Tracker Bots', href: '/trackers', icon: GlobeAltIcon, current: false },
    { name: 'Workspace', href: '/workspace', icon: RectangleGroupIcon, current: false },
];

const Networks: NextPage = () => {
    return (
        <>
            <MainNav page="Networks" navigation={networksNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Network Graph</div>
            </main>
        </>
    );
};

export default Networks;
