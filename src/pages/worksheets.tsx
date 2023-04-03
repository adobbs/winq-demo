// @ts-nocheck

import { NextPage } from "next";
import MainNav from "~/components/MainNav";
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    RectangleGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const worksheetsNav = [
    { name: 'Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon, current: false },
    { name: 'Insights', href: '/insights', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '/networks', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '/worksheets', icon: RectangleGroupIcon, current: true },
];

const Worksheets: NextPage = () => {
    return (
        <>
            <MainNav page={worksheetsNav[3].name} navigation={worksheetsNav} />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-white">TODO - Worksheet Canvas</div>
            </main>
        </>
    );
};

export default Worksheets;
