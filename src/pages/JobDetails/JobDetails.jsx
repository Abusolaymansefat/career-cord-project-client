import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company} = useLoaderData()
    
    return (
        <div>
            <h2 className='text-3xl'>Employment Information</h2>
            <div>
            <h2 className='text-6xl'> job details of : {title}</h2>
            <p>company: {company}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
        </div>
    );
};

export default JobDetails;