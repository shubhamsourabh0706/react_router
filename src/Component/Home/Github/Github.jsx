import { } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData();
  return (
    <div  className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Following : {data.following}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        Repo : {data.repos_url}
        
      
    </div>
  )
}

export const gitInfoLoader = async ()=>{
  const response =   await fetch('https://api.github.com/users/8287586461')
  return response.json()
}
