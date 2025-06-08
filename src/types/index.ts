export interface Workout {
    id: string;
    date: string;
    duration: number; // in minutes
    type: string; // e.g., "Cardio", "Strength", etc.
    notes?: string;
}

export interface Equipment {
    id: string;
    name: string; // e.g., "Dumbbells", "Treadmill", etc.
    available: boolean;
}

export interface Plan {
    id: string;
    title: string;
    workouts: Workout[];
    duration: number; // total duration in minutes
    intensity: 'low' | 'medium' | 'high';
}