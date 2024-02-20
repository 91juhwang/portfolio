import { useState } from "react";
// import { linkedinIcon } from './icons'

function App() {
  const [pageDark, setPageDark] = useState(false);

  return (
    <>
      {pageDark ? (
        <div className={`flex h-screen items-center justify-center transition bg-black duration-[1500ms]`}>
          <div className="">
            <h2 className={`text-4xl font-bold text-white duration-[700ms] ease-in`}>
              JAMES HWANG
            </h2>

            {/* social section */}
            <div className="social-links-section mt-6">
              <div className="text-white font-bold flex justify-center">
                <svg className="mr-3 relative top-1.5" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 30 30" fill="white">
                  <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
                </svg>
                <a href="https://www.linkedin.com/in/91juhwang" className="hover:text-cyan-800" target="_blank">
                  <p className="hover:text-cyan-600 active:text-cyan-900">
                    LINKEDIN
                  </p>
                </a>
              </div>

              <div className="text-white font-bold flex justify-center">
                <svg className="relative top-1 right-3.5" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 50 50" fill="white">
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
                <a href="https://www.github.com/91juhwang" className="hover:text-cyan-800" target="_blank">
                  <p className="hover:text-cyan-600 active:text-cyan-900">
                    GITHUB
                  </p>
                </a>
              </div>

              <div className="text-white font-bold flex justify-center">
                <svg className="relative top-0.5 right-3" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100" fill="white">
                  <path d="M 34.179688 10.164062 C 32.103687 10.164062 30.615234 11.426266 30.615234 13.697266 L 30.648438 25.806641 C 30.648438 28.846641 32.770234 30.712891 35.615234 30.712891 C 38.460234 30.712891 40.615234 29.002891 40.615234 25.962891 L 40.615234 14.306641 L 39.613281 14.306641 L 39.523438 25.869141 C 39.523438 28.079141 37.599438 29.808594 35.648438 29.808594 C 33.697437 29.808594 31.615234 28.049844 31.615234 25.839844 L 31.644531 13.611328 C 31.644531 12.304328 33.077484 11.126953 34.271484 11.126953 C 35.465484 11.126953 36.615234 12.275031 36.615234 13.582031 L 36.615234 24.056641 C 36.615234 24.056641 36.139813 25.056641 35.632812 25.056641 C 35.125812 25.056641 34.486234 24.700391 34.615234 24.150391 L 34.615234 14.308594 L 33.615234 14.308594 L 33.582031 23.964844 C 33.582031 25.344844 34.32225 25.964844 35.65625 25.964844 C 36.99025 25.964844 37.615234 25.249141 37.615234 23.869141 L 37.615234 13.664062 C 37.615234 11.393062 36.255687 10.164062 34.179688 10.164062 z M 41.613281 11.306641 C 41.061281 11.306641 40.613281 11.754641 40.613281 12.306641 C 40.613281 12.858641 41.061281 13.306641 41.613281 13.306641 L 59.613281 13.306641 L 59.613281 23.792969 C 59.613281 29.039969 63.881906 33.306641 69.128906 33.306641 L 79.613281 33.306641 L 79.613281 82.574219 C 79.613281 86.837219 76.146812 90.306641 71.882812 90.306641 L 28.347656 90.306641 C 24.084656 90.306641 20.615234 86.838219 20.615234 82.574219 L 20.615234 21.039062 C 20.615234 16.776063 24.083656 13.308594 28.347656 13.308594 L 29.615234 13.308594 C 30.167234 13.308594 30.615234 12.860594 30.615234 12.308594 C 30.615234 11.756594 30.167234 11.308594 29.615234 11.308594 L 28.347656 11.308594 C 22.981656 11.308594 18.615234 15.672062 18.615234 21.039062 L 18.615234 82.574219 C 18.615234 87.940219 22.980656 92.306641 28.347656 92.306641 L 71.882812 92.306641 C 77.248812 92.306641 81.613281 87.940219 81.613281 82.574219 L 81.613281 32.554688 C 81.613281 32.289688 81.508313 32.035656 81.320312 31.847656 L 61.072266 11.599609 C 60.885266 11.411609 60.630234 11.306641 60.365234 11.306641 L 41.613281 11.306641 z M 60.613281 13.966797 L 78.951172 32.306641 L 69.128906 32.306641 C 64.433906 32.306641 60.613281 28.487969 60.613281 23.792969 L 60.613281 13.966797 z M 28.371094 19.505859 C 28.245219 19.481734 28.110094 19.505984 27.996094 19.583984 C 25.878094 21.023984 24.613281 23.406078 24.613281 25.955078 L 24.613281 78.617188 C 24.613281 82.856187 28.048484 86.306641 32.271484 86.306641 L 67.955078 86.306641 C 72.178078 86.306641 75.613234 82.856188 75.615234 78.617188 L 75.615234 60.806641 C 75.615234 60.530641 75.391234 60.306641 75.115234 60.306641 C 74.839234 60.306641 74.615234 60.530641 74.615234 60.806641 L 74.615234 78.617188 C 74.615234 82.305187 71.628031 85.306641 67.957031 85.306641 L 32.273438 85.306641 C 28.602438 85.306641 25.615234 82.305188 25.615234 78.617188 L 25.615234 25.955078 C 25.615234 23.737078 26.714594 21.664156 28.558594 20.410156 C 28.786594 20.255156 28.846406 19.945797 28.691406 19.716797 C 28.613906 19.603297 28.496969 19.529984 28.371094 19.505859 z M 75.113281 47.306641 C 74.837281 47.306641 74.613281 47.530641 74.613281 47.806641 L 74.613281 50.806641 C 74.613281 51.082641 74.837281 51.306641 75.113281 51.306641 C 75.390281 51.306641 75.613281 51.082641 75.613281 50.806641 L 75.613281 47.806641 C 75.613281 47.530641 75.389281 47.306641 75.113281 47.306641 z M 30.113281 51.306641 C 29.837281 51.306641 29.613281 51.530641 29.613281 51.806641 C 29.613281 52.082641 29.837281 52.306641 30.113281 52.306641 L 53.113281 52.306641 C 53.390281 52.306641 53.613281 52.082641 53.613281 51.806641 C 53.613281 51.530641 53.389281 51.306641 53.113281 51.306641 L 30.113281 51.306641 z M 75.113281 52.306641 C 74.837281 52.306641 74.613281 52.530641 74.613281 52.806641 L 74.613281 58.806641 C 74.613281 59.082641 74.837281 59.306641 75.113281 59.306641 C 75.390281 59.306641 75.613281 59.082641 75.613281 58.806641 L 75.613281 52.806641 C 75.613281 52.530641 75.389281 52.306641 75.113281 52.306641 z M 30.113281 58.306641 C 29.837281 58.306641 29.613281 58.530641 29.613281 58.806641 C 29.613281 59.082641 29.837281 59.306641 30.113281 59.306641 L 44.113281 59.306641 C 44.390281 59.306641 44.613281 59.082641 44.613281 58.806641 C 44.613281 58.530641 44.389281 58.306641 44.113281 58.306641 L 30.113281 58.306641 z M 46.113281 58.306641 C 45.837281 58.306641 45.613281 58.530641 45.613281 58.806641 C 45.613281 59.082641 45.837281 59.306641 46.113281 59.306641 L 70.113281 59.306641 C 70.390281 59.306641 70.613281 59.082641 70.613281 58.806641 C 70.613281 58.530641 70.389281 58.306641 70.113281 58.306641 L 46.113281 58.306641 z M 30.113281 65.306641 C 29.837281 65.306641 29.613281 65.530641 29.613281 65.806641 C 29.613281 66.082641 29.837281 66.306641 30.113281 66.306641 L 48.113281 66.306641 C 48.390281 66.306641 48.613281 66.082641 48.613281 65.806641 C 48.613281 65.530641 48.389281 65.306641 48.113281 65.306641 L 30.113281 65.306641 z M 50.113281 65.306641 C 49.837281 65.306641 49.613281 65.530641 49.613281 65.806641 C 49.613281 66.082641 49.837281 66.306641 50.113281 66.306641 L 61.113281 66.306641 C 61.390281 66.306641 61.613281 66.082641 61.613281 65.806641 C 61.613281 65.530641 61.389281 65.306641 61.113281 65.306641 L 50.113281 65.306641 z M 63.113281 65.306641 C 62.837281 65.306641 62.613281 65.530641 62.613281 65.806641 C 62.613281 66.082641 62.837281 66.306641 63.113281 66.306641 L 71.113281 66.306641 C 71.390281 66.306641 71.613281 66.082641 71.613281 65.806641 C 71.613281 65.530641 71.389281 65.306641 71.113281 65.306641 L 63.113281 65.306641 z M 30.113281 72.306641 C 29.837281 72.306641 29.613281 72.530641 29.613281 72.806641 C 29.613281 73.082641 29.837281 73.306641 30.113281 73.306641 L 54.113281 73.306641 C 54.390281 73.306641 54.613281 73.082641 54.613281 72.806641 C 54.613281 72.530641 54.389281 72.306641 54.113281 72.306641 L 30.113281 72.306641 z M 57.113281 72.306641 C 56.837281 72.306641 56.613281 72.530641 56.613281 72.806641 C 56.613281 73.082641 56.837281 73.306641 57.113281 73.306641 L 70.113281 73.306641 C 70.390281 73.306641 70.613281 73.082641 70.613281 72.806641 C 70.613281 72.530641 70.389281 72.306641 70.113281 72.306641 L 57.113281 72.306641 z"></path>
                </svg>
                <a href="https://drive.google.com/file/d/1bbL8odmQLP-i4dM-zDehskxH44aNtUcW/view?usp=sharing" className="hover:text-cyan-800" target="_blank">
                  <p className="hover:text-cyan-600 active:text-cyan-900">
                    RESUME
                  </p>
                </a>
              </div>
            </div>


            <div className="flex justify-center">
              <button
                className="mt-12 text-black font-bold bg-white p-2 hover:bg-gray-400 focus:-translate-y-1 hover:-translate-y-0.5"
                onClick={() => setPageDark(!pageDark)}
              >
                SEE MORE
              </button>
            </div>
          </div>
        </div >
      ) : (
        <div className={`flex h-screen items-center justify-center transition bg-white duration-[1500ms]`}>
          <div className="text-center">
            <h2 className={`text-4xl font-bold text-black duration-[700ms] ease-in`}>
              JAMES HWANG
            </h2>

            <p className="text-black font-bold mt-6 ">
              91JUHWANG@GMAIL.COM
            </p>
            <p className="text-black font-bold">
              (+1) 646-942-7592
            </p>

            <button
              className="mt-12 text-white font-bold bg-black p-2 focus:-translate-y-1 hover:bg-gray-600 hover:-translate-y-0.5"
              onClick={() => setPageDark(!pageDark)}
            >
              SEE MORE
            </button>
          </div>
        </div>
      )
      }
    </>
  )
}

export default App
