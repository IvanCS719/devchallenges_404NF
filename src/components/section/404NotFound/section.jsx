export default function section() {
    return (
        <section className='min-h-full w-full flex flex-col lg:flex-row xl:flex-grow justify-center items-center xl:px-6'>
            <div className="xl:w-2/4 flex justify-center items-center mb-[3.75rem] xl:mb-0">
                <img src="Scarecrow.png" className="w-4/5 xl:w-[33.7015rem]" alt="" />
            </div>
            <div className="xl:w-2/4 min-h-max ps-6 xl:ps-0">
                <h1 className="font-bold text-5xl xl:text-6xl text-gray-700 lea mb-[1.87rem] xl:mb-[2.25rem] leading-normal xl:leading-normal xl:w-[36.625rem] -tracking-wider">I have bad news for you</h1>
                <p className="text-gray-600 font-normal text-lg xl:text-2xl xl:w-[23.8125rem] leading-normal xl:leading-normal mb-[4.12rem] -tracking-wide">The page you are looking for might be removed or is temporarily unavailable.</p>
                <button className="h-[4.25rem] w-[13.5rem] text-sm bg-neutral-800 text-white mb-[7.13rem] xl:mb-0">BACK TO HOMEPAGE</button>
            </div>
        </section>
    )
}