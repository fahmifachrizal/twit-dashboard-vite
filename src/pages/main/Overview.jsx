import { useState } from 'react'
import Header from '../../components/Header'

function OverviewPage() {
  const [ followNasa, setFollowNasa ] = useState(false)
  return (
    <div className='w-full min-h-screen py-10 px-16 flex flex-col bg-gray-200'>
      <div>
        <Header title={'Overview'} subtitle={'Take a closer look on how your social media accounts are performing'}/>
      </div>
      <div className='w-full h-fullflex-1 flex flex-wrap'>
        
        {/* Nasa Follow Status */}
        <div className='h-64 w-64 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
          <div className='h-full w-full flex flex-col'>
            <h3 className='text-lg font-semibold pb-2'>{followNasa?`That's Great You Are Following NASA`:`Why are you not following NASA? Are you...`}</h3>
            <div className='flex-1 relative overflow-clip rounded-xl'>
              <img src="https://pbs.twimg.com/profile_banners/11348282/1679344008/1500x500" alt="NASA" className='object-none h-full w-full rounded-xl group-hover:scale-150 duration-500 group-hover:rotate-12'/>
              <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-y-2'>
                <img src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" alt="NASA" className=' w-16 h-16 bg-white rounded-lg p-1'/>
                <button className={`text-xs text-gray-800 bg-white ${followNasa?'':'hover:bg-[#03a9f4] hover:text-white'}  font-medium rounded-full px-2 py-1`} disabled={followNasa}>Follow{followNasa&&'ing'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewPage