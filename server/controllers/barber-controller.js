const { Barber } = require("../models");

const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleBarber({ barber = null, params }, res) {
    const foundBarber = await Barber.findOne({
      $or: [
        { _id: barber ? barber._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundBarber) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundBarber);
  },

  async createBarber({ body }, res) {
    const barber = await Barber.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(barber);
    res.json({ token, barber });
  },

  async login({ body }, res) {
    const barber = await Barber.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!barber) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await barber.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(barber);
    res.json({ token, barber });
  },

  async saveClient({ barber, body }, res) {
    console.log(barber);
    try {
      const updatedBarber = await Barber.findOneAndUpdate(
        { _id: barber._id },
        { $addToSet: { clients: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedBarber);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async deleteClient({ barber, params }, res) {
    const updatedUser = await Barber.findOneAndUpdate(
      { _id: barber._id },
      { $pull: { clients: { clientId: params.clientId } } },
      { new: true }
    );
    if (!updatedBarber) {
      return res
        .status(404)
        .json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedBarber);
  },
};