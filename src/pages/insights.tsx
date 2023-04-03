import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const insightsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: true },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '/worksheets', icon: RectangleGroupIcon, current: false },
];

const Insights: NextPage = () => {
    return (
        <>
            <MainNav page={insightsNav[1].name} navigation={insightsNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-white">TODO - Insight Brief</div>
            </main>
        </>
    );
};

export default Insights;
