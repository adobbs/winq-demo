import ChatInput from "./ChatInput";

const chatMessages = [
    { id: 1, isAuthorUser: false, content: "Hi Andy, can I help you with your career today?" },
    { id: 2, isAuthorUser: true, content: "Hey Winq. I just got laid off. What jobs are out there?" },
    { id: 3, isAuthorUser: false, content: "Yikes, sorry to hear that. Are you looking for a similar role?" },
    { id: 4, isAuthorUser: true, content: "Yes." },
    { id: 5, isAuthorUser: false, content: "Here is a list of similar jobs:" },
    { id: 6, isAuthorUser: false, content: "TODO - job list with expand button or pagination" },
    { id: 7, isAuthorUser: false, content: "I've saved this list to your worksheets. Want me to reach out on your behalf?" },
    { id: 8, isAuthorUser: true, content: <span>&#128077;</span> },
    { id: 9, isAuthorUser: false, content: "Great! Anything else?" },
];

// Filter out null and undefined values - https://www.skillthrive.com/hunter/snippets/combine-css-classes
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ChatThread() {
    return (
        <>
            <main className="flex flex-col max-w-screen-xl h-screen -mt-16 lg:mt-0 lg:pl-72">
                <div className="py-10 px-2 sm:px-4 mt-16 lg:mt-0 text-purple-950">
                    <ul role="list" className="space-y-3">
                        {chatMessages.map((message) => (
                            <li key={message.id}
                                className={classNames(
                                    message.isAuthorUser
                                    ? "bg-neutral-50 w-fit ml-auto mr-0 md:mr-4"
                                    : "bg-pink-50 w-fit ml-0 md:ml-4 mr-auto",
                                    "overflow-hidden px-4 py-4 rounded-full sm:px-6"
                                )}
                            >
                                {message.content}
                            </li>
                        ))}
                    </ul>
                    {/* <div className="mt-12">TODO - Chat avatars and bubble style tweaks</div> */}
                </div>
                <div className="sticky bottom-4 mt-auto self-center w-full md:w-4/6 px-2 sm:px-4 md:px-0">
                    <ChatInput />
                </div>
            </main>
        </>
    );
}
