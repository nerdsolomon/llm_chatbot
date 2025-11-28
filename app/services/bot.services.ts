export const fetchBotResponse = async (data: any) => {
  try {
    const response = await fetch("", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bot response");
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};