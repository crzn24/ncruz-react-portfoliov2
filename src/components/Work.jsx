import React from 'react'

import ArtMart from '../assets/projects/ArtMart.jpg'
import Vapour from '../assets/projects/steam-achievement-picker.jpeg'
import GifMe from '../assets/projects/funny_movie_gif.jpeg'
import Planner from '../assets/projects/daily-planner-app.jpeg'
import WeatherDashboard from '../assets/projects/5day-weather-dashboard.jpeg'
import PasswordGenerator from '../assets/projects/password-generator-javascript-application.jpeg'
import NoteTaker from '../assets/projects/note-taker-expressjs.jpeg'
import MorningMeeting from '../assets/projects/morning-meeting-app.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#1D1E1F] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FADE4B]'>Portfolio</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>


            {/* grid container for all of my projects */}
                {/* camelCase because CSS in React. Back ticks for template literal */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


{/* card item container 7 */}
                <div style={{backgroundImage: `url(${MorningMeeting})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Morning Meeting App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://crzn24.github.io/morning-meeting-app/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/morning-meeting-app' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 1 */}
                <div style={{backgroundImage: `url(${ArtMart})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        ArtMart
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://devartmart.herokuapp.com/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/artmart' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 2 */}
                <div style={{backgroundImage: `url(${Vapour})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Vapour
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://vapour-for-gamers.herokuapp.com/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/Steam-Achievement-Picker.git' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 3 */}
                <div style={{backgroundImage: `url(${GifMe})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        GifMe That Movie & TV Info
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://maksimrazuvaev.github.io/funny_movie_gif/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/gif_me_that' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 4 */}
                <div style={{backgroundImage: `url(${Planner})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Work Day Planner
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://crzn24.github.io/daily-planner-app/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/daily-planner-app.git' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 5 */}
                <div style={{backgroundImage: `url(${WeatherDashboard})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Weather Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://crzn24.github.io/5day-weather-dashboard/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/5day-weather-dashboard.git' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item container 6 */}
                <div style={{backgroundImage: `url(${PasswordGenerator})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Password Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://crzn24.github.io/password-generator-javascript-application/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/password-generator-javascript-application.git' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>



                {/* card item container 8 */}
                <div style={{backgroundImage: `url(${NoteTaker})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        Note Taker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://note-taker-expressjs-crzn24.herokuapp.com/' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/crzn24/note-taker-expressjs' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                            </a>
                        </div>
                    </div>
                </div>




            </div>



        </div>
    </div>
  )
}

export default Work