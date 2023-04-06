const jobs = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
];

export default function JobList() {
    return (
        <div>
            <ul role="list" className="divide-y divide-neutral-200">
                {jobs.map((job) => (
                    <li key={job.id} className="py-4">
                        TODO: Job list item content and layout
                    </li>
                ))}
            </ul>
        </div>
    );
}
