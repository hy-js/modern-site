import React from "react"
import moment from "moment"

async function getLatest() {
  const reposResponse = await fetch(
    "https://api.github.com/users/hy-js/repos?sort=pushed&per_page=1&direction=desc"
  )
  const repos = await reposResponse.json()

  return repos
}

const LatestWork = async () => {
  const repos = await getLatest()
  const latest = repos[0]
  return (
    <div className='p-8 max-w-[1440px] mx-auto'>
      <h2>Latest Work</h2>
      {latest && (
        <a href={latest.html_url} target='none'>
          <h2 className='font-medium'>
            {latest.full_name}
          </h2>
          <div className='flex gap-2 mb-3 flex-wrap'>
            <p className='bg-[#5E6873] rounded-full flex justify-center items-center px-4 py-1'>
              {latest.created_at.substring(0, 4)}
            </p>
            <p className='bg-[#5E6873] capitalize rounded-full flex justify-center items-center px-4 py-1'>
              {moment(latest.pushed_at).fromNow()}
            </p>
            <p className='bg-[#A6B2DC] rounded-full flex justify-center items-center px-4 py-1'>
              Web Development
            </p>
            <p className='bg-[#A6B2DC] rounded-full flex justify-center items-center px-4 py-1'>
              Web Design
            </p>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5  mb-2'>
            <div className='bg-[#A6B2DC] h-2.5 rounded-full w-[50%]'></div>
          </div>
          <p className='text-primary-400 text-center italic'>
            Coming Soon!
          </p>
        </a>
      )}
    </div>
  )
}

export default LatestWork
