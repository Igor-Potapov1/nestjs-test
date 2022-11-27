export const getDatabaseURI = () => {
  // mongodb+srv://ingvarr15:<password>@cluster0.nloqben.mongodb.net/?retryWrites=true&w=majority
  return `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nloqben.mongodb.net/?retryWrites=true&w=majority`;
};
