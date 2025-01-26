// Helper function to generate unique IDs
export const idGenerator = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
