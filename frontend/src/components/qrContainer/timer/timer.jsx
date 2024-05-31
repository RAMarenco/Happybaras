import { useEffect, useState } from "react";

const Timer = ({handleDeadline, timeLimit, deadline, expired}) => {
    const [timeDelta, setTimeDelta] = useState({
        minutes: timeLimit.getMinutes(), 
        seconds: timeLimit.getSeconds(),
    });

    const getTime = () => {
        //console.log(deadline)
        const time = deadline - Date.now(); // Get the remaining time until reaching the deadline

        if(time > 0)
            setTimeDelta({
                minutes: Math.floor((time / 1000 / 60) % 60),
                seconds: Math.floor((time / 1000) % 60),
            })
        else {
            handleDeadline();
        }
    }

    useEffect(() => {
        setTimeDelta({
            minutes: timeLimit.getMinutes(),
            seconds: timeLimit.getSeconds(),
        })

    }, [deadline])

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, [deadline])

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