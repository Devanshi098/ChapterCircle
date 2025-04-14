const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const clubRoutes = require('./routes/clubRoutes');
const clubMemberRoutes = require('./routes/clubmemberRoutes');
const discussionRoutes = require('./routes/discussionRoutes');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api',bookRoutes);
app.use(clubRoutes);
app.use('/api',clubMemberRoutes);
app.use('/api/discussions', discussionRoutes);


app.listen(3000, () => console.log('Server running on port 3000'));
