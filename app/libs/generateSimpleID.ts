export default function generateSimpleId() {
    const simpleId: string = Math.random().toString(16).substr(2, 16);
    
    // Verify that it is unique accross all tables

    return simpleId;
}