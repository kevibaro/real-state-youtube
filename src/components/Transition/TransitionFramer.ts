import { delay } from "framer-motion"
import { Transition } from "./Transition"

export const fadeIn = () => {
    return {
        hidden: { 
            opacity: 0, 
            y: 100,
            x: 0,
            Transition: { 
                type:"tween",
                duration: 0.8,
                delay: 0.8,
                ease:[0.25] 
            }, 
        }, 
        visible: { 
            opacity: 1,
            y: 0,
            x: 0,
            transition: {   
                type:"tween",
                duration: 0.7,
                delay: 0.7, 
                ease:[0.25, 0.25, 0.25, 0.75],
            }, 
        }, 
    }
}