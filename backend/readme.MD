APIs documentation

The numbers and id is just placeholder pls look through thanks!!

# Submit quiz answers
```javascript
fetch('http://localhost:5001/api/quiz-answers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 'user123',
    quizId: 'quiz456',
    answers: { /* quiz answers object */ },
    score: 85
  })
});



# Submit reflection results

```javascript
fetch('http://localhost:5001/api/reflection-results', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 'user123',
    questionId: 'q789',
    reflection: 'User reflection text goes here!!!!',
    sentiment: 'positive'
  })
});

```