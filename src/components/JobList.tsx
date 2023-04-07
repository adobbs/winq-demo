import JobListItem from "./JobListItem";

//TODO: Move actions to bottom bar - request new list, done, cancel

const jobs = [
    {id: 1, jobTitle: "Staff Backend Engineer", companyName: "Alkero Health", 
        contacts: [{
            name: "Jamie Anderson",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }]
    },
    {id: 2, jobTitle: "Staff Backend Engineer", companyName: "Alkero Health",
        contacts: [{
            name: "Jamie Anderson",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }]
    },
    {id: 3, jobTitle: "Staff Backend Engineer", companyName: "Alkero Health",
        contacts: [{
            name: "Jamie Anderson",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }]
    },
];

export default function JobList() {
    return (
        <>
            <div className="border-b border-neutral-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-base font-semibold leading-6 text-purple-950">Job List</h3>
                        <p className="mt-1 text-sm text-purple-800">
                            Identify jobs that match and choose next steps.
                        </p>
                    </div>
                    {/* <div className="ml-4 sm:ml-8 mt-4 flex-shrink-0">
                        <button type="button"
                            className="relative inline-flex items-center rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white
                            hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800"
                        >
                            Request new list
                        </button>
                    </div> */}
                </div>
            </div>
            <ul role="list" className="divide-y divide-neutral-200 bg-white">
                {jobs.map((job) => (
                    <li key={job.id} className="py-4">
                        <JobListItem jobTitle={job.jobTitle} companyName={job.companyName} contacts={job.contacts} />
                    </li>
                ))}
            </ul>
        </>
    );
}
