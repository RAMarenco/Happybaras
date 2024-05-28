import { useEffect, useState } from "react";

const Timer = ({handleDeadline, timeLimit}) => {
    const [timeDelta, setTimeDelta] = useState({
        minutes: timeLimit.getMinutes(), 
        seconds: timeLimit.getSeconds(),
    });
    const [expired, setExpired] = useState(false);

    const deadline = new Date(); // Current time
    deadline.setMinutes(deadline.getMinutes() + timeLimit.getMinutes()); // Add 10 minutes to the current time. This will be our deadline

    const getTime = () => {
        const time = deadline - Date.now(); // Get the remaining time until reaching the deadline

        if(time > 0)
            setTimeDelta({
                minutes: Math.floor((time / 1000 / 60) % 60),
                seconds: Math.floor((time / 1000) % 60),
            })
        else {
            handleDeadline();
            setExpired(true);
        }
    
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, [])

    return(
        <div>
            {
                !expired ? 
                    <span style={{fontWeight: "bold"}}>
                        {timeDelta.minutes >= 10 ? timeDelta.minutes : `0${timeDelta.minutes}`}:
                        {timeDelta.seconds < 10 ? `0${timeDelta.seconds}` : timeDelta.seconds}
                    </span>
                : 
                <span style={{color: "#E92B19", fontWeight: "bold"}}>
                        {timeDelta.minutes >= 10 ? timeDelta.minutes : `0${timeDelta.minutes}`}:
                        {timeDelta.seconds < 10 ? `0${timeDelta.seconds}` : timeDelta.seconds}
                </span>
            }
        </div>
    )
}

export default Timer; 