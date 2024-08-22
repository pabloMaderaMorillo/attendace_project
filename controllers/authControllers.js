const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AttendandeManager = require('../models/attendanceManager.js');
require('dotenv').config();