const ToyAdapter = {
  formatToy(rawToy) {
    return {
      _id: rawToy?.id,
      toyName: rawToy?.name?.toUpperCase(), // Format toy name
    };
  },

  formatToys(rawToys) {
    return rawToys?.map(this?.formatToy);
  },

  // Prepare a single toy for input (for saving to the repository)
  prepareToyInput(toy) {

    return {
      _id: toy?.id,       // Map the 'id' to '_id'
      toyName: toy?.name, // Keep the 'name' as 'toyName'
    };
  },
};

export default ToyAdapter;
