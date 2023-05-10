const botNames = [
    "C3PO",
    "R2D2",
    "Tabitha",
    "Oswald",
    "Richard",
    "Sandra",
];

export default function BotBuilder() {
    return (
        <>
            <main className="flex flex-col max-w-screen-xl h-screen -mt-16 lg:mt-0 lg:pl-72">
                <div className="py-10 px-2 sm:px-4 lg:px-6 mt-16 lg:mt-0 text-purple-950">
                    <h1 className="text-2xl font-semibold">Bot Builder</h1>
                    <div className="mt-1">Create a bot that will search for jobs and monitor opportunities for you.</div>
                    <button
                        type="button"
                        className="rounded-md px-3 py-2 text-sm font-semibold mt-4
                        text-white bg-purple-950 hover:bg-purple-800
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800"
                        >
                        Create bot
                    </button>
                    <div className="mt-8">TODO - Create bot form and character creator</div>
                </div>
            </main>
        </>
    );
}
