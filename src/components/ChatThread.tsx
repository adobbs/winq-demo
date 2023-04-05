import ChatInput from "./ChatInput";

// TODO: ?Change bot content to only use faces outside bubbles and other emoji inside
// TODO: ?Conditionally displaying chat carets and emoji
// TODO: ?Dynamically color chat carets
// TODO: Convert to subcomponents
// TODO: Navigating to prior conversations

const emojiWave = <span>&#128075;</span>;
const emojiDisappointed = <span>&#128533;</span>;
const emojiParty = <span>&#127881;</span>
const emojiNerd = <span>&#129299;</span>
const emojiSlightSmile = <span>&#128578;</span>
const emojiThumbsUp = <span>&#128077;</span>
const emojiPointingRight = <span>&#128073;</span>

const chatMessages = [
    { id: 1, isAuthorUser: false, emoji: emojiWave, content: "Hi Andy, can I help you with your career today?" },
    { id: 2, isAuthorUser: true, emoji: null, content: "Hey Winq. I just got laid off. What jobs are out there?" },
    { id: 3, isAuthorUser: false, emoji: emojiDisappointed, content: "Yikes, sorry to hear that. Are you looking for a similar role?" },
    { id: 4, isAuthorUser: true, emoji: null, content: "Yes." },
    { id: 5, isAuthorUser: false, emoji: emojiSlightSmile, content: "Here is a list of similar jobs:" },
    { id: 6, isAuthorUser: false, emoji: emojiPointingRight, content: "TODO - job list with expand button or pagination" },
    { id: 7, isAuthorUser: false, emoji: emojiNerd, content: "I've saved this list to your worksheets. Want me to reach out on your behalf?" },
    { id: 8, isAuthorUser: true, emoji: null, content: emojiThumbsUp },
    { id: 9, isAuthorUser: false, emoji: emojiParty, content: "Great! Anything else?" },
];

// Filter out null and undefined values - https://www.skillthrive.com/hunter/snippets/combine-css-classes
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ChatThread() {
    return (
        <>
            <main className="flex flex-col max-w-screen-xl h-screen -mt-16 lg:mt-0 lg:pl-72">
                <div className="py-10 px-2 sm:px-4 lg:px-6 mt-16 lg:mt-0 text-purple-950">
                    <ul role="list" className="space-y-3">
                        {chatMessages.map((message) => (
                            <div className="flex flex-row gap-2 items-center">
                                <span
                                className={classNames(
                                    message.isAuthorUser
                                    ? "hidden"
                                    : "-mr-1",
                                    "h-8 w-8 rounded-full text-2xl flex items-center justify-center"
                                )}
                                >
                                    {message.emoji}
                                </span>
                                <svg 
                                    className={classNames(
                                        message.isAuthorUser
                                        ? "hidden"
                                        : "",
                                        "h-4 w-4 -ml-1 -mr-3"
                                    )}
                                >
                                    <polygon points="16,0 4,8 16,16" fill="rgb(253 242 248)" />
                                </svg>
                                <li key={message.id}
                                    className={classNames(
                                        message.isAuthorUser
                                        ? "bg-neutral-50 w-fit ml-auto"
                                        : "bg-pink-50 w-fit mr-auto",
                                        "relative px-4 py-4 rounded-full sm:px-6"
                                    )}
                                >
                                    {message.content}
                                </li>
                                <svg 
                                    className={classNames(
                                        message.isAuthorUser
                                        ? ""
                                        : "hidden",
                                        "h-4 w-4 -mr-1 -ml-3"
                                    )}
                                >
                                    <polygon points="0,0 12,8 0,16" fill="white" />
                                </svg>
                                <img
                                className={classNames(
                                    message.isAuthorUser
                                    ? ""
                                    : "hidden",
                                    "h-8 w-8 rounded-full bg-purple-800"
                                )}
                                src="/headshot.png"
                                alt="Profile photo"
                                />
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="sticky bottom-4 mt-auto self-center w-full md:w-4/6 px-2 sm:px-4 md:px-0">
                    <ChatInput />
                </div>
            </main>
        </>
    );
}
