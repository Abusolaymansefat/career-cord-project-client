import { useEffect, useState } from "react";
import Jobcard from "../../Shared/Jobcard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:3000/jobs');
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) return <p className="text-center">Loading jobs...</p>;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
            {
                jobs.map(job => <Jobcard key={job._id} job={job} />)
            }
        </div>
    );
};

export default HotJobs;
