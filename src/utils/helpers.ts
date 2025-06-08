export const formatTime = (timeInMinutes: number): string => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
};

export const validateInput = (input: any, type: string): boolean => {
    switch (type) {
        case 'number':
            return typeof input === 'number' && !isNaN(input);
        case 'string':
            return typeof input === 'string' && input.trim() !== '';
        default:
            return false;
    }
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};