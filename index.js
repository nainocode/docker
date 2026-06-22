import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send([
  {
    "id": 1,
    "naam": "Ali Raza",
    "umar": 28,
    "shehar": "Lahore",
    "job": "Software Engineer",
    "email": "ali.raza@email.com",
    "phone": "+92-300-1234567"
  },
  {
    "id": 2,
    "naam": "Fatima Khan",
    "umar": 34,
    "shehar": "Karachi",
    "job": "Doctor",
    "email": "fatima.khan@email.com",
    "phone": "+92-321-9876543"
  },
  {
    "id": 3,
    "naam": "Ahmed Malik",
    "umar": 24,
    "shehar": "Karachi",
    "job": "Doctor",
    "email": "ahmed.malik@email.com",
    "phone": "+92-321-9834567"
  },
  {
    "id": 4,
    "naam": "HUsnain",
    "umar": 24,
    "shehar": "Karachi",
    "job": "Doctor",
    "email": "ahmed.malik@email.com",
    "phone": "+92-321-9834567"
  }
])
});

app.listen(PORT, () => {
    console.log(`server on running port on ${PORT}`)
})