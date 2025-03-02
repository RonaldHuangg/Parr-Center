const express = require("express");
const cors = require("cors");
const app = express();
const supabase = require('./db/supabase');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node.js backend!");
});

// Get all items from a sample table (replace 'items' with your actual table name)
app.get("/api/items", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('items')
      .select('*');
    
    if (error) throw error;
    
    res.json(data);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: err.message });
  }
});

// Add a new item
app.post("/api/items", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('items')
      .insert([req.body]);
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
