const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema(
	{
		degreeTitle: {
			type: String,
			required: [true, 'please provide degree title'],
			minlength: 10,
			maxlength: 50,
		},
		institutionName: {
			type: String,
			required: [true, 'please provide institution name'],
			minlength: 10,
			maxlength: 50,
		},
		approxPassingYear: {
			type: Number,
			required: [true, 'please provide approximate passing year'],
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true,
		},
		skillSets: {
			type: [String],
			required: [true, 'please provide skill sets'],
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: [true, 'Please provide rating'],
		},
		status: {
			type: String,
			enum: ['pending', 'approved'],
			default: 'pending',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Instructor', InstructorSchema);
