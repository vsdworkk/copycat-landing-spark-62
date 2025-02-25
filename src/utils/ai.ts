export const generatePitchInsights = async (
  role: string, 
  company: string,
  additionalContext: string = "" // Making the third parameter optional with a default value
) => {
  try {
    // Simulate AI response for now
    return `Here are some insights for ${role} at ${company}: ...`;
  } catch (error) {
    console.error('Error generating insights:', error);
    return null;
  }
}