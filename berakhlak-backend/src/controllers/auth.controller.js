import bcrypt from 'bcrypt';
import { config } from '../config/env.js';
import { signToken } from '../middlewares/auth.js';
import { findUserByUsername } from '../repos/users.repo.js';

function sendSessionCookie(res, token) {
  res.cookie(config.cookie.name, token, {
    httpOnly: true,
    secure: config.cookie.secure,
    sameSite: config.cookie.sameSite,
    path: '/',
    maxAge: 24 * 60 * 60 * 1000
  });
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = { id: user.id, username: user.username };
    const token = signToken(payload);  // Generate the token

    // Send the token in the response
    res.json({ token });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function logout(_req, res, _next) {
  res.clearCookie(config.cookie.name, { path: '/' });
  res.json({ message: 'Logged out' });
}

export async function me(req, res, _next) {
  res.json({ user: req.user });
}
