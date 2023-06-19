import React from 'react'

export default function SubmissionData({ submissions }) {
  return (
    <div className="submission-data">
        <h2>Your submissions</h2>
        <ol>
            {submissions.map(submission => {
                return (
                    <li>
                        <p>Language: {submission.language}</p>
                        <p>Status: {submission.status}</p>
                        <br />
                    </li>
                )
            })}
        </ol>
    </div>
  )
}
