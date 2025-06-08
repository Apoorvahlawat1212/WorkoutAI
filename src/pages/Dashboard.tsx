import React from 'react';
import WorkoutTracker from '../components/WorkoutTracker';
import PlanGenerator from '../components/PlanGenerator';
import EquipmentSelector from '../components/EquipmentSelector';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <EquipmentSelector />
            <PlanGenerator />
            <WorkoutTracker />
        </div>
    );
};

export default Dashboard;