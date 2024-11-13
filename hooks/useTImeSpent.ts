import { useState,useEffect } from "react"



//TODO: modify this so it tracks time spend on Individual projects and tasks 

const useTimeSpent =() => {
    const [timeSpent,setTimeSpent] = useState(0)

    useEffect(() => {
        let startTime = Date.now();
        const interval = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Convert to seconds
            setTimeSpent(elapsedTime);
        }, 1000); // Update every second

        return () => {
            clearInterval(interval);
            console.log(`total time spent ${timeSpent}`)
        }
        
    }, [])
}


export default useTimeSpent