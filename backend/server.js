const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const supabase = require('./db/supabase');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node.js backend!");
});
// This is just like a placeholder, its called items in the supabase rn but we should prolly change it to like idk userid progress, answers,etc)
app.get("/api/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');
    
    if (error) throw error;
    
    res.json(data);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: err.message });
  }
});

// adding a new item
app.post("/api/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([req.body])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: err.message });
  }
});

// Keep the old endpoints for backward compatibility
app.get("/api/items", async (req, res) => {
  res.redirect('/api/users');
});

app.post("/api/items", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([req.body])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
