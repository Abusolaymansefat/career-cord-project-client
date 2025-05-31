import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = UseAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const linkedIn =form.linkedIn.value;
    const github =form.github.value;
    const resume =form.resume.value;

    console.log(linkedIn, github, resume)

  }
  return (
    <div>
      <h2 className="text-4xl">Apply for this job:<Link to={`/jobs/${jobId}`}>details</Link> </h2>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input" placeholder="LinkedIn profile Link" />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="Github link" />

          <label className="label">Resume Link</label>
          <input type="usl" name="resume" className="input" placeholder="Resume Link" />

          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
