import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Workout AI</h1>
            <p>Your personal workout assistant that helps you track workouts and generate plans based on your available equipment, intensity, and time.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/workout-tracker">Log Workout</Link>
                    </li>
                    <li>
                        <Link to="/plan-generator">Generate Workout Plan</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">View Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;