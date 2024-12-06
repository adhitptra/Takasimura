const express = require("express");
const app = express();
const pengeluaranRoutes = require("./routes/pengeluaranRoutes");

app.use(express.json());

app.use("/pengeluaran", pengeluaranRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
});
