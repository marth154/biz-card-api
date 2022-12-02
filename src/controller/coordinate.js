const CoordModel = require("../models/coordinate");

async function createCoordinate(req, res) {
  const userId = req.headers.id;
  const coord = await CoordModel.findOne({ user_id: userId });
  if (!coord) {
    try {
      await CoordModel.create({ ...req.body, user_id: userId });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: "Impossible de créer ces coordonnes" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Les coordonnées de cette utilisateur existe déjà" });
  }
}

async function getCoordinate(req, res) {
  try {
    const coord = await CoordModel.findOne({
      user_id: req.headers.id,
    });
    res.status(200).json(coord);
  } catch (error) {
    res.status(404).json();
  }
}

async function updateCoordinate(req, res) {
  try {
    await CoordModel.updateOne({
      user_id: req.headers.id,
      ...req.body,
    });
    res.status(200).json();
  } catch (error) {
    res.status(404).json();
  }
}

async function getCoordinateByUserId(req, res) {
  try {
    const coord = await CoordModel.findOne({
      user_id: req.params.id,
    });
    res.status(200).json(coord);
  } catch (error) {
    res.status(404).json();
  }
}

module.exports = {
  createCoordinate,
  getCoordinate,
  updateCoordinate,
  getCoordinateByUserId,
};
