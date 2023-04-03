import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const conversationsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '/worksheets', icon: RectangleGroupIcon, current: false },
];

const Conversations: NextPage = () => {
    return (
        <>
            <MainNav page={conversationsNav[0].name} navigation={conversationsNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-white">TODO - Conversation Thread</div>
            </main>
        </>
    );
};

export default Conversations;
