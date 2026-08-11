import React from 'react'
import './newJobsAdded.css'

export const NewJobsAdded = ({jobList, green, orange,red}) => {
  return (
    <div className="added-jobs">
      <h2>Added Jobs</h2>
          {jobList.map((bot) => (
              <li
                style={
                  bot.status === "completed"
                    ? green
                    : bot.status === "in progress"
                      ? orange
                      : red
                }
                key={bot.id}
              >
                Job Id: {bot.id} Job Title: {bot.title} Job Status: {bot.status}
              </li>
            ))}
    </div>
  )
}


