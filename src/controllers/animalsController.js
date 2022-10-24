const getConnection = require("../database/database");

const getAnimals = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM animal");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  // res.send("<H1>GET ALL ANIMALS</H1>")
};
const getAnimalById = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const result = await connection.query(
      `SELECT * FROM animal WHERE id=?`,
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const createAnimal = async (req, res) => {
  try {
    const { name, age } = req.body;
    if (name == undefined || age == undefined) {
      res.status(400).json({ message: "Bad request. Please fill all fields" });
    }
    const animal = { name, age };
    const connection = await getConnection();
    const result = await connection.query(`INSERT INTO animal SET ?`, animal);
    res.json({ message: "Animal created" });
    // res.send(`Get animal with id ${req.params.id}`);
    // res.json("addAnimal")
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updateAnimal = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, age } = req.body;
    if (id == undefined || name == undefined || age == undefined) {
      res.status(400).json({ message: "Bad request. Please fill all fields" });
    }
    const animal = {name, age}
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE animal SET ? WHERE id = ?",
      [animal, id]
    );
    res.json({ message: "Animal updated" });
    // res.send(`Get animal with id ${req.params.id}`);
    // res.json("addAnimal")
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const deleteAnimal = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const result = await connection.query(`DELETE FROM animal WHERE id=?`, id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
module.exports = {
  getAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
