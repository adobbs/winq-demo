import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import ChatThread from "~/components/ChatThread";

const conversationsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Workspace', href: '/workspace', icon: RectangleGroupIcon, current: false },
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
