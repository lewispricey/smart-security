import app from "./app";

const PORT: String = process.env.PORT || "9090";

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
