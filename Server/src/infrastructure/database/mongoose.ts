import "dotenv/config"
import mongoose, { Schema, model } from "mongoose"
import { IdataRegister, IdbMessage } from "../../domain/model"
import bcrypt from "bcrypt"
import { checkMockUsers } from "./mockUsers"

const uri = process.env.URI as string //El puerto viene predefinido en la imagen, de manera interna, si cambio da error!!

mongoose
  .connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB!")
    initializeDatabase()
  })
  .catch((err) => {
    console.log("error!!")
    throw err
  })

const saltRounds = 8

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  genere: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
})

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password as string, saltRounds)
  }
  next()
})

const ChatSchema: Schema = new Schema({
  pair_writers: {
    type: String,
    required: true,
  },
  messages: [
    {
      writer: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
})

const UserModel = model<IdataRegister>("User", UserSchema)
const ChatModel = model<IdbMessage>("Chat", ChatSchema)

//we make a post query to UserSchema created time
async function initializeDatabase() {
  await checkMockUsers()
  // await ChatModel.deleteMany({}) // To delete all mock chats
  // await UserModel.deleteMany({}) // To delete all mock user
  const allUser = await UserModel.find()
  console.log("lastUser:", allUser.at(-1))
  console.log("count:", allUser.length)
}

export { UserModel, ChatModel }
