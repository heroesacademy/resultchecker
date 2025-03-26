const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Members API
app.post('/api/members/register', (req, res) => {
  const newMember = req.body;
  
  // Read existing members
  const members = JSON.parse(fs.readFileSync('./data/members.json'));
  
  // Add new member
  newMember.id = members.length + 1;
  newMember.joinDate = new Date().toISOString();
  members.push(newMember);
  
  // Save back to file
  fs.writeFileSync('./data/members.json', JSON.stringify(members, null, 2));
  
  res.json({ success: true, memberId: newMember.id });
});

// Courses API
app.get('/api/courses', (req, res) => {
  const courses = JSON.parse(fs.readFileSync('./data/courses.json'));
  res.json(courses);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});