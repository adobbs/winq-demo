interface Contact {
    name: string;
    imageUrl: string;
}

interface Jobs {
    jobTitle: string;
    companyName: string;
    contacts: Contact[];
}

export default function JobListItem({ jobTitle, companyName, contacts }: Jobs) {
    return (
        <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-purple-950">
                    {jobTitle}
                </p>
                <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        75% match
                    </p>
                </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                    <p className="flex items-center text-sm text-purple-800">
                        {companyName}
                    </p>
                </div>
                <div className="mt-4 flex-shrink-0 sm:ml-5 sm:mt-0">
                    <button className="text-sm underline text-neutral-500">more info</button>
                    {/* <div className="flex -space-x-1 overflow-hidden">
                      {contacts.map((contact) => (
                        <img
                          key={contact.name}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src={contact.imageUrl}
                          alt={contact.name}
                        />
                      ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}
