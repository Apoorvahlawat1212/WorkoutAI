import axios from 'axios';
import { WorkoutPlanRequest, WorkoutPlanResponse } from '../types';

const AI_API_URL = 'https://api.example.com/generate-workout-plan';

export const generateWorkoutPlan = async (request: WorkoutPlanRequest): Promise<WorkoutPlanResponse> => {
    try {
        const response = await axios.post(AI_API_URL, request);
        return response.data;
    } catch (error) {
        throw new Error('Error generating workout plan: ' + error.message);
    }
};