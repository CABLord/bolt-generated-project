const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const missions = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/missions.json'), 'utf8'));
const upgrades = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/upgrades.json'), 'utf8'));
const servers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/servers.json'), 'utf8'));

router.get('/missions', (req, res) => {
  res.json(missions);
});

router.get('/upgrades', (req, res) => {
  res.json(upgrades);
});

router.get('/servers', (req, res) => {
  res.json(servers);
});

module.exports = router;
