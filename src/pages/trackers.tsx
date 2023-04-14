import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const trackersNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Tracker Bots', href: '/trackers', icon: UsersIcon, current: true },
    { name: 'Workspace', href: '/workspace', icon: RectangleGroupIcon, current: false },
];

const Trackers: NextPage = () => {
    return (
        <>
            <MainNav page="Trackers" navigation={trackersNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Tracker Bot Settings</div>
            </main>
        </>
    );
};

export default Trackers;
