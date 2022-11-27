const CoordModel = require("../models/coordinate");

async function createCoordinate(req, res) {
  const body = req.body;
  const userId = req.headers.id;
  // TODO CANNOT CREATE
  const coord = await CoordModel.findOne({ user_id: userId });
  if (!coord) {
    try {
      await CoordModel.create({ ...body, user_id: JSON.parse(userId) });
      res.status(200).json();
    } catch (error) {
      console.log(error);
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
    const coord = await CoordModel.findOne({ user_id: req.params.id });
    res.status(200).json(coord);
  } catch (error) {
    res.status(404).json();
  }
}

module.exports = {
  createCoordinate,
  getCoordinate,
};
