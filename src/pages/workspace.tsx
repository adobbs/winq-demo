import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const workspaceNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Tracker Bots', href: '/trackers', icon: GlobeAltIcon, current: false },
    { name: 'Workspace', href: '/workspace', icon: RectangleGroupIcon, current: true },
];

const Workspace: NextPage = () => {
    return (
        <>
            <MainNav page="Workspace" navigation={workspaceNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-purple-950">TODO - Workspace Canvas</div>
            </main>
        </>
    );
};

export default Workspace;
