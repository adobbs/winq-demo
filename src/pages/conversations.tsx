// @ts-nocheck

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    Bars3Icon,
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const conversationsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '#', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '#', icon: RectangleGroupIcon, current: false },
];

const Conversations: NextPage = () => {
    return (
        <>
            <MainNav page="Conversations" navigation={conversationsNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">TODO - Conversation Thread</div>
            </main>
        </>
    );
};

export default Conversations;
