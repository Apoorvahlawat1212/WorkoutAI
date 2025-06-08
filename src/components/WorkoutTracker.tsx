import React, { useState } from 'react';

const WorkoutTracker: React.FC = () => {
    const [workouts, setWorkouts] = useState<{ date: string; exercise: string; duration: number }[]>([]);
    const [exercise, setExercise] = useState('');
    const [duration, setDuration] = useState<number | ''>('');

    const handleAddWorkout = () => {
        if (exercise && duration) {
            const newWorkout = {
                date: new Date().toLocaleDateString(),
                exercise,
                duration: Number(duration),
            };
            setWorkouts([...workouts, newWorkout]);
            setExercise('');
            setDuration('');
        }
    };

    return (
        <div>
            <h2>Workout Tracker</h2>
            <div>
                <input
                    type="text"
                    placeholder="Exercise"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <button onClick={handleAddWorkout}>Add Workout</button>
            </div>
            <h3>Past Workouts</h3>
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>
                        {workout.date}: {workout.exercise} for {workout.duration} minutes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutTracker;