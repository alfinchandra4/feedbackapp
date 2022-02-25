import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext'
import Card from './components/shared/Card';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

export default function App() {

    // const [feedback, setFeedback] = useState(FeedbackData);

    return (

        <FeedbackProvider>

            <Router>
                <Header bgColor='purple' textColor='yellow' />
                <div className="container">
                    <Routes>
                        <Route path='/' exact element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />

                                {/* <Card>
                            <NavLink to="/" activeClassName='active'>
                                Home
                            </NavLink>
                            <NavLink to="/about" activeClassName='active'>
                                About
                            </NavLink>
                        </Card> */}

                                <AboutIconLink />

                            </>
                        }>

                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/post/*' element={<Post />} />
                    </Routes>
                </div>
            </Router>

        </FeedbackProvider>
    )
}



// import React from 'react'

// export default function App() {

//     const title = 'blog post';
//     const body = 'this is my blog post';
//     const comments = [
//         { id: 1, text: 'Comment 1' },
//         { id: 2, text: 'Comment 2' },
//         { id: 3, text: 'Comment 3' },
//     ];

//     const loading = false;
//     const showComments = true;
//     const commentBlock = (
//         <div className="comments">
//             <h3>Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, idx) => (
//                     <li key={idx}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
//     )

//     if (loading) return <h1>Loading ...</h1>

//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>H{body.toUpperCase()}</p>
//             <div className="myclass">{10 - 2}</div>

//             {showComments && commentBlock}

//         </div>
//     )
// }


