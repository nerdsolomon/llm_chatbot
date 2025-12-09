export const fetchBotResponse = async (data: Object) => {
  try {
    const response = await fetch("openrouter.ai/api/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: "", messages: data }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bot response");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
