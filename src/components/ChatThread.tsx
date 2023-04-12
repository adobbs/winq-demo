import ChatInput from "./ChatInput";
import JobList from "./JobList";

// TODO: Dynamically color chat carets
// TODO: JobList actions - request new list, done, cancel
// TODO: Link job list to workspace page
// TODO: Convert to more subcomponents
// TODO: Navigating to prior conversations

const emojiWink = <span>&#128521;</span>;
const emojiDisappointed = <span>&#128533;</span>;
const emojiNerd = <span>&#129299;</span>;
const emojiCool = <span>&#128526;</span>;
const emojiSlightSmile = <span>&#128578;</span>;
const emojiThumbsUp = <span>&#128077;</span>;

const emojiWaveText = String.fromCodePoint(128075);
const emojiPointingDownText = String.fromCodePoint(128071);
const emojiPartyText = String.fromCodePoint(127881);

const jobList = <JobList />;

const chatMessages = [
    { id: 1, isAuthorUser: false, emoji: emojiWink, type: "text", content: `${emojiWaveText} Hi Andy, can I help you with your career today?` },
    { id: 2, isAuthorUser: true, emoji: null, type: "text", content: "Hey Winq. I just got laid off. What jobs are out there?" },
    { id: 3, isAuthorUser: false, emoji: emojiDisappointed, type: "text", content: "Yikes, sorry to hear that. Are you looking for a similar role?" },
    { id: 4, isAuthorUser: true, emoji: null, type: "text", content: "Yes." },
    { id: 5, isAuthorUser: false, emoji: emojiSlightSmile, type: "text", content: `Here is a list of similar jobs. ${emojiPointingDownText} ` },
    { id: 6, isAuthorUser: false, emoji: null, type: "list", content: jobList },
    { id: 7, isAuthorUser: false, emoji: emojiNerd, type: "text", content: "I've saved this list to your workspace. Want me to reach out now?" },
    { id: 8, isAuthorUser: true, emoji: null, type: "text", content: emojiThumbsUp },
    { id: 9, isAuthorUser: false, emoji: emojiCool, type: "text", content: `${emojiPartyText} Great! Anything else?` },
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
                            <div key={message.id}
                                className="flex flex-row gap-2 items-center">
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
                                        message.isAuthorUser || !message.emoji
                                        ? "hidden"
                                        : "",
                                        "h-4 w-4 -ml-1 -mr-3"
                                    )}
                                >
                                    <polygon points="16,0 4,8 16,16" fill="rgb(253 242 248)" />
                                </svg>
                                <li
                                    className={classNames(
                                        message.isAuthorUser
                                        ? "bg-neutral-50 w-fit ml-auto"
                                        : "bg-pink-50 w-fit mr-auto",
                                        !message.isAuthorUser && !message.emoji
                                        ? "ml-2"
                                        : "",
                                        message.type === "list"
                                        ? "rounded-3xl pb-0 pt-4"
                                        : "py-4 rounded-full",
                                        "relative px-4 sm:px-6"
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
                <div className="sticky bottom-4 mt-auto self-center w-11/12 md:w-4/6 px-2 sm:px-4 md:px-0">
                    <ChatInput />
                </div>
            </main>
        </>
    );
}
