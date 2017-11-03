/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const QuoteRequestsSchema = new mongoose.Schema({
  id: String,
  selectedOptions: Object,
  contactInfo: Object
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('quoteRequests', QuoteRequestsSchema);

