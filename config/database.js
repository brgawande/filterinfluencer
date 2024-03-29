import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "filterinfluencer",
    })
    .then((c) => console.log(`Database connected on host ${c.connection.host}`))
    .catch((e) => console.log("error"));
};
