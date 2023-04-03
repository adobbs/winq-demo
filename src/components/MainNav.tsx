import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    UsersIcon,
    RectangleGroupIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Conversations', href: '#', icon: ChatBubbleLeftRightIcon, current: true },
    { name: 'Insights', href: '#', icon: NewspaperIcon, current: false },
    { name: 'Networks', href: '#', icon: UsersIcon, current: false },
    { name: 'Worksheets', href: '#', icon: RectangleGroupIcon, current: false },
];

// Filter out null and undefined values - https://www.skillthrive.com/hunter/snippets/combine-css-classes
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function MainNav() {
    return (
        <>
            <div>
                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            className="h-8 w-auto"
                            src="/winq-logo-sm.svg"
                            alt="Winq logo"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                            ? 'bg-zinc-800 text-white'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                        >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-zinc-800"
                                >
                                <img
                                className="h-8 w-8 rounded-full bg-zinc-800"
                                src="/headshot.png"
                                alt="Profile photo"
                                />
                                <span className="sr-only">Your profile</span>
                                <span aria-hidden="true">Andy Dobbs</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">TODO - Conversation Thread</div>
                </main>
            </div>
        </>
    );
}


