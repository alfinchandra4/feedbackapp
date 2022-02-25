import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: ' thi item is from context',
            rating: 1
        },
        {
            id: 2,
            text: ' thi item is from context 2',
            rating: 2
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // delete feedback
    const deleteFeedback = id => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) =>
                item.id !== id
            ))
        }
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        setFeedback([newFeedback, ...feedback])
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map(
                (item) => (item.id === id ?
                    { ...item, ...updItem } : item
                )
            )
        )
    }

    // Set item to be updated
    const editFeedback = item => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider
            value={{
                // ini untuk mendaftarkan variabel apa
                // yg bisa diakses secara context
                // tanpa pake state lagi
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