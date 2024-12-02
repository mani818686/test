import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from './data/jobs';
import "./jobdescription.css";
import ApplicationDetails from './applicationDetails';


function Jobdescription() {

  const params = useParams();
  const [apply, setApply] = useState(false);
  const job = jobs.find(({ job_id }) => job_id == params.id)


  return (
    <>
    <div className='job-container'>
      <h3 className='mb-5'>Role : {job.job_title}</h3>
      <div className='description'>
        <h5 className='title-description'>Job Description</h5>
        {job.job_details.description}
      </div>
      <div className="responsibilties mt-3">
        <h5>Roles & Responsiblities</h5>
        <ul>
          {job.job_details.responsibilities.map((resp) => {
            return (
              <li className='resposibilty-item'>
                {resp}
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className="skills mt-3">
        <h5>Preferred Skills</h5>
        <ul>
          {job.job_details.preferred_skills.map((skill) => {
            return (
              <li className='resposibilty-item'>
                {skill}
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className="skills mt-3">
        <h5 className='title-education'>Education & Experience</h5>
        <ul>
          {job.job_details.experience.map((experience) => {
            return (
              <li className='resposibilty-item'>
                {experience}
              </li>
            )
          })
          }
        </ul>
      </div>
      {apply && <ApplicationDetails/> }
      {!apply && <button type="button" className="btn btn-dark" onClick={() => setApply(true)} >Apply Now !</button>}
    </div>
     <div>
     
     
   </div>
   </>
  )
}

export default Jobdescription
