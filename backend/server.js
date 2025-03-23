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
      .from('account')
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
    // First create the auth user
    const { user, error: authError } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password
    });

    if (authError) throw authError;

    // Then create the account record
    const { data, error } = await supabase
      .from('account')
      .insert([{
        id: user.id,
        email: req.body.email,
        username: req.body.username,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        is_active: true
      }])
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

// Submit quiz answers
app.post("/api/quiz-answers", async (req, res) => {
  try {
    const { userId, quizId, answers, score } = req.body;
    
    const { data, error } = await supabase
      .from('quiz_answers')
      .insert([{
        user_id: userId,
        quiz_id: quizId,
        answers: answers,
        score: score,
        submitted_at: new Date().toISOString()
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (err) {
    console.error('Error submitting quiz answers:', err);
    res.status(500).json({ error: err.message });
  }
});

// Get quiz answers for a user
app.get("/api/quiz-answers/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    
    const { data, error } = await supabase
      .from('quiz_answers')
      .select('*')
      .eq('user_id', userId)
      .order('submitted_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
  } catch (err) {
    console.error('Error fetching quiz answers:', err);
    res.status(500).json({ error: err.message });
  }
});

// Submit reflection results
app.post("/api/reflection-results", async (req, res) => {
  try {
    const { userId, questionId, reflection, sentiment } = req.body;
    
    const { data, error } = await supabase
      .from('reflection_results')
      .insert([{
        user_id: userId,
        question_id: questionId,
        reflection: reflection,
        sentiment: sentiment,
        submitted_at: new Date().toISOString()
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (err) {
    console.error('Error submitting reflection:', err);
    res.status(500).json({ error: err.message });
  }
});

// Get reflection results for a user
app.get("/api/reflection-results/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    
    const { data, error } = await supabase
      .from('reflection_results')
      .select('*')
      .eq('user_id', userId)
      .order('submitted_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
  } catch (err) {
    console.error('Error fetching reflection results:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
