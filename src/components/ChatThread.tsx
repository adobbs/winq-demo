const chatMessages = [
    { id: 1, isAuthorUser: false, content: "TODO - Bot Content" },
    { id: 2, isAuthorUser: true, content: "TODO - User Content" },
    { id: 3, isAuthorUser: false, content: "TODO - Bot Content" },
    { id: 4, isAuthorUser: true, content: "TODO - User Content" },
    { id: 5, isAuthorUser: false, content: "TODO - Bot Content" },
    { id: 6, isAuthorUser: false, content: "TODO - Bot Content" },
];

// Filter out null and undefined values - https://www.skillthrive.com/hunter/snippets/combine-css-classes
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ChatThread() {
    return (
        <>
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8 text-white">
                    <ul role="list" className="space-y-3">
                        {chatMessages.map((message) => (
                            <li key={message.id}
                                className={classNames(
                                    message.isAuthorUser
                                    ? "bg-blue-900 ml-16 mr-4 sm:ml-48 md:ml-64"
                                    : "bg-zinc-900 ml-4 mr-16 sm:mr-48 md:mr-64",
                                    "overflow-hidden px-4 py-4 rounded-full sm:px-6"
                                )}
                            >
                                {message.content}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}
