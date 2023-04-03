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

const insightsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: true },
    { name: 'Networks', href: '#', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '#', icon: RectangleGroupIcon, current: false },
];

const Insights: NextPage = () => {
    return (
        <>
            <MainNav page="Insights" navigation={insightsNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">TODO - Insight Briefs</div>
            </main>
        </>
    );
};

export default Insights;
