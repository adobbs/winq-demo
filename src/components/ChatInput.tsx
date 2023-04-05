export default function ChatInput() {
    return (
        <>
            <div className="flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <input 
                        type="text"
                        name="chat"
                        id="chat"
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-3 
                        text-zinc-900 ring-1 ring-inset ring-neutral-300 placeholder:text-purple-300 
                        focus:ring-2 focus:ring-inset focus:ring-pink-800 text-sm leading-6"
                        placeholder="TODO - Chat Input"
                    />
                </div>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 
                    text-sm font-semibold text-purple-950 ring-1 ring-inset ring-neutral-300 bg-white hover:bg-pink-100"
                    >
                    Send
                </button>
            </div>
        </>
    );
}
