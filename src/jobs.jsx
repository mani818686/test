
import { useNavigate ,Link} from 'react-router-dom'
import { jobs } from './data/jobs'
import "./jobs.css"

function Jobs() {
  const navigate = useNavigate();


  const handleApply = (job_id)=>{
    navigate("/job/"+job_id);
  }
  return (
    <>
    <ul className="list-items">
      {
        jobs.map((job) => {
          return (
            <li className='item' key={job.job_id}>
              <div className="item-part1">
                <p>{job.job_title}</p>
                <div className='location'>
                
                <p>{job.job_location}</p>
                </div>
               
              </div>
              <div className='item-part2'>
                <button className='btn btn-primary' onClick={(e)=>handleApply(job.job_id)}>Apply for this Job</button>
              </div>
            </li>
          )
        })
      }
    </ul>
    
    </>
  )
}

export default Jobs
