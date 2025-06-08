import React, { useState } from 'react';

const equipmentOptions = [
    { id: 1, name: 'Dumbbells' },
    { id: 2, name: 'Barbell' },
    { id: 3, name: 'Resistance Bands' },
    { id: 4, name: 'Kettlebell' },
    { id: 5, name: 'Bodyweight' },
    { id: 6, name: 'Medicine Ball' },
    { id: 7, name: 'Pull-up Bar' },
];

const EquipmentSelector: React.FC<{ onEquipmentChange: (selectedEquipment: string[]) => void }> = ({ onEquipmentChange }) => {
    const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

    const handleEquipmentChange = (equipment: string) => {
        setSelectedEquipment(prevState => {
            if (prevState.includes(equipment)) {
                return prevState.filter(item => item !== equipment);
            } else {
                return [...prevState, equipment];
            }
        });
    };

    const handleSubmit = () => {
        onEquipmentChange(selectedEquipment);
    };

    return (
        <div>
            <h2>Select Your Equipment</h2>
            <ul>
                {equipmentOptions.map(option => (
                    <li key={option.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedEquipment.includes(option.name)}
                                onChange={() => handleEquipmentChange(option.name)}
                            />
                            {option.name}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default EquipmentSelector;