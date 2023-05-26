import Generate from '@/components/Generate'
import GetHistory from '@/components/GetHistory'
import GetOtp from '@/components/GetOtp'
import Validate from '@/components/Validate'
import Invalidate from '@/components/Invalidate'
import ConsoleScreen from '@/components/ConsoleScreen'

import {ThemeContextProvider, useThemeContext} from '@/components/context/consoleContext'




export default function Home() {


  return (
  <div className='flex flex-col h-screen items-center'>
    <div className="flex items-center justify-center w-[90%] bg-red-600 m-5">
      <h1 className='text-5xl text-white p-5'>OTP Test Page</h1>
    </div>  
   
      <ThemeContextProvider>
      <div className="flex flex-row w-[90%] gap-2">
        <div className='flex flex-col gap-2 w-[25%] '>
          <Generate />
          <Validate />
          <GetHistory />
          <GetOtp />
          <Invalidate />
        </div>
        <div className="w-[70%]">
          <ConsoleScreen />
        </div>

      </div>

      </ThemeContextProvider>

    


    
  </div>
  
    
        

        
     
  
  )
}
