import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center space-y-10'>
      <section className='flex m-40 '>

        <div className='justify-center space-y-10 w-696'>
          <h1 className='text-3xl text-green-600'>Tons of <br /> supportive<br />
            community you<br />can discover </h1>
       
          <h1 className='text-white'>
            Search any tpe and field of community you want, by searching<br />
            on the search page you can discover tons of supportive<br />
            community that will held you with your work.
          </h1>
      
          <button className='h-8 text-white border border-green-500 rounded-full w-52'>Explore the communities</button>
        </div>
      </section>
      <section className='space-y-10 w-[600px] justify-center'>
        <div className='ml-40 space-y-6 text-center bg-gray-900 border border-none w-60 rounded-xl h-60'>
          <div className='ml-20'><img src='.\images\image 28.png' width={40 } height={40} /></div>
          <p className='text-2xl text-white'>Study With Me! </p>
          <p className='text-gray-600'>Study stream  via live-time with<br />people around world.</p>
          <button className='w-40 h-8 bg-green-500 border border-gray-900 rounded-full'>Join now</button>
        </div>
        <div className='h-40 mr-10 space-y-6 text-center bg-gray-900 border border-none rounded-xl w-110'>
          <p> Discover the community you want</p>
          <p className='text-gray-600'>From design, programming,to study stream</p>
          <input type='text' placeholder='Discover communities' className='h-8 text-center bg-gray-800 rounded' />
        </div>
        <div className='flex h-8 text-right bg-gray-900 border-gray-900 rounded w-60'>
          <img src='.\images\Group 53.png' width={40 } height={40} />
          Framer community
        </div>
        <div className='flex h-8 text-right bg-gray-900 border-gray-900 rounded ml-60 w-60'>
          <img src='.\images\image 25.png' width={40 } height={40}/>
          Behance community
        </div>
      </section>
    </main>
  )
}
