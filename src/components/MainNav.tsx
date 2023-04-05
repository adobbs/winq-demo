import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Filter out null and undefined values - https://www.skillthrive.com/hunter/snippets/combine-css-classes
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface Navigation {
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>;
    current: boolean;
}

export default function MainNav({page, navigation}: {page: string, navigation: Navigation[]}) {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(page);
    
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        <div className="fixed inset-0 bg-zinc-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                                </div>
                            </Transition.Child>
                            {/* Sidebar component */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-800 px-6 pb-2 ring-1 ring-white/10">
                                <div className="flex h-16 shrink-0 items-center">
                                    <Link href="/">
                                    <span className="text-2xl text-white">&#128521; Winq</span>
                                    </Link>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigation.map((item) => (
                                            <li key={item.name} onClick={() => { setCurrentPage(item.name)}}>
                                                <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                    ? 'bg-pink-900 text-white'
                                                    : 'text-neutral-100 hover:text-white hover:bg-pink-800',
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
                                </ul>
                                </nav>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-800 px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <Link href="/">
                            <span className="text-2xl text-white">&#128521; Winq</span>
                            </Link>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                        <li key={item.name} onClick={() => { setCurrentPage(item.name)}}>
                                            <a
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                ? 'bg-pink-900 text-white'
                                                : 'text-neutral-100 hover:text-white hover:bg-pink-800',
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
                                        href="https://www.adobbs.com/"
                                        target="_blank"
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

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-purple-800 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-neutral-100 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-white">{currentPage}</div>
                    <a href="https://www.adobbs.com/" target="_blank">
                        <span className="sr-only">Your profile</span>
                        <img
                        className="h-8 w-8 rounded-full bg-purple-800"
                        src="/headshot.png"
                        alt="Profile photo"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}


