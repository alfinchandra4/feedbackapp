import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae iste accusamus quam ex minima dolore pariatur facere officiis amet.</p>
                <p>Version: 1.0.0</p>
            </div>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage