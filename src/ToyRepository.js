import axios from "axios";

const ToyRepository = {
  async fetchToys() {
    try {
      const response = await axios.get("https://67962922bedc5d43a6c46ed1.mockapi.io/Todo"); // Replace with your API URL
      return response.data; // Return the raw data
    } catch (error) {
      console.error("Failed to fetch toys:", error);
      throw error;
    }
  },

  async addToy(toy) {
    try {
      const response = await axios.post("https://67962922bedc5d43a6c46ed1.mockapi.io/Todo", { name: toy }); // Replace with your API URL
      return response.data; // Return the newly added toy
    } catch (error) {
      console.error("Failed to add toy:", error);
      throw error;
    }
  },

  async deleteToy(id) {
    try {
      await axios.delete(`/api/toys/${id}`); // Replace with your API URL
    } catch (error) {
      console.error("Failed to delete toy:", error);
      throw error;
    }
  },
};

export default ToyRepository;
