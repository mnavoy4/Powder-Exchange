import mongoose from 'mongoose'; 

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  img_url: { type: String, required: true },
  price: { type: Number, required: true };
  brand: { type: String, required: true },
  condition: { type: String, default: 'Used', required: true },
  description: { type: String, required: true }
})

const listingModel = mongoose.model("Listing", listingSchema);

export default listingModel;