import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: 'Challenging but great course overall', 
            rating: 7
        },
        {
            id: 2, 
            text: 'Happy Holidays!', 
            rating: 4
        },
        {
            id: 3, 
            text: 'Happy New Year!', 
            rating: 10
        },



    ])

    // add feedback 
     const [feedbackEdit, setFeedbackEdit]  = useState ({
        item: {}, 
        edit: false
     })

    //  delete feedback 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }


    const deleteFeedback = (id) => {
        if (window.confirm ('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

//  Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id ===id ? {... item,...updItem} : item))
        )
    }

// Set item to be updated 
    const editFeedback = (item) =>{
        setFeedbackEdit ({
            item, 
            edit: true 
        })
    }
    

    return (<FeedbackContext.Provider 
        value= {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        

    }}>
        {children}
        </FeedbackContext.Provider>

      
    )
}
   


export default FeedbackContext