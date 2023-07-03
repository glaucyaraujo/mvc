import mongoose from "mongoose";

const apiSchema = new mongoose.Schema(
    {
        nome:{type: String, required: true},
        marca: {type: String, required: true},
        matte: {type: Boolean, required: true},
        líquido: {type: Boolean, required: true},
        duração: { type: String, required: true},
        valor: { type: String, required: true}
    }
)


const apis = mongoose.model("apis", apiSchema);
module.exports = apis;
