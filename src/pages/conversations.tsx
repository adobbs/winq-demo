import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import ChatThread from "~/components/ChatThread";

const conversationsNav = [
    { name: 'Bot Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Bot Marketplace', href: '/marketplace', icon: GlobeAltIcon, current: false },
    { name: 'Bot Workbench', href: '/workbench', icon: RectangleGroupIcon, current: false },
    { name: 'Network Insights', href: '/network', icon: UsersIcon, current: false },
];

const Conversations: NextPage = () => {
    return (
        <>
            <MainNav page="Bot Conversations" navigation={conversationsNav} />
            <ChatThread />
        </>
    );
};

export default Conversations;
