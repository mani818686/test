
function ApplicationDetails() {

  return (
    <div className='container mt-5 d-flex flex-column justify-content-center align-items-center border p-4'>
            <h5 className='text-center'>Enter Your Details</h5>
            <div className="mb-3 col-4">
                <label htmlFor="email" className="htmlForm-label">Email address</label>
                <input type="email" className="htmlForm-control" id="email" />
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="name" className="htmlForm-label">Full Name</label>
                <input type="text" className="htmlForm-control" id="name" />
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="resume" className="htmlForm-label">Upload your Resume</label>
                <input type="file" className="htmlForm-control" id="resume" />
            </div>
            <button type="submit" className="btn btn-light">Apply</button>
        </div>
  )
}

export default ApplicationDetails
