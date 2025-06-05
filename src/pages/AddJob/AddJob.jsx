import React from "react";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth()

    const handleAddJo = e =>{
        e.preventDefault();
        const form = e.target;
        const formData= new FormData(form);
        // console.log(formData)
        const data = Object.fromEntries(formData.entries())
        // console.log(data)

        // process salaryRange
        const {min, max, currency, ...newJob} = data
        newJob.salaryRange = {min, max,currency}

        //process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim())
        newJob.requirements = requirementsClean
        // console.log(requirementsDirty, requirementsClean)

        //process responsibilities

        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        console.log(Object.keys(newJob).length)

    }
  return (
    <div>
      <h2>please add a job </h2>

      <form onSubmit={handleAddJo}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company Logo url"
          />
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job type </legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" name="deadline" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>


        {/* Job description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job description </legend>
          <textarea className="textarea" name="description" placeholder="Job description"></textarea>
        </fieldset>


        {/* job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job Requirements </legend>

          <textarea className="textarea" name="requirements" placeholder="Requirements (separate by comma"></textarea>

        </fieldset>
        
        {/* job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job Responsibilities </legend>

          <textarea className="textarea" name="responsibilities" placeholder="Responsibilities (separate by comma"></textarea>

        </fieldset>
        {/* job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_Name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            defaultValue={user.email}
            className="input"
            placeholder="HR_Email"
            
          />

        </fieldset>

        <input type="submit" className="btn" value="Add job" />
      </form>
    </div>
  );
};

export default AddJob;
