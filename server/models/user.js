const mongoose = require("mongoose");
const { Schema } = mongoose;

// DEFINE USER SCHEMA
// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ["Male", "Female"],
//     required: true,
//   },
//   dateOfBirth: {
//     day: {
//       type: String,
//       required: true,
//     },
//     month: {
//       type: String,
//       required: true,
//     },
//     year: {
//       type: String,
//       required: true,
//     },
//   },
//   role: {
//     type: String,
//     enum: ["job-seeker", "employer"],
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   profile: {
//     resume: {
//       skills: {
//         type: [String],
//       },
//       contactNumber: {
//         type: String,
//       },
//       address: {
//         type: String,
//       },
//     },
//     company: {
//       name: {
//         type: String,
//       },
//       description: {
//         type: String,
//       },
//       address: {
//         type: String,
//       },
//       requirements: {
//         type: [String],
//       },
//       aboutCompany: {
//         type: String,
//       },
//     },
//   },
// });

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  dateOfBirth: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    enum: ["job-seeker", "employer"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profile: {
    type: Schema.Types.Mixed,
  },
});

userSchema.pre("save", function (next) {
  if (this.role === "job-seeker") {
    this.profile = {
      resume: {
        skills: {
          type: [String],
        },
        contactNumber: {
          type: String,
        },
        address: {
          type: String,
        },
      },
    };
  } else if (this.role === "employer") {
    this.profile = {
      company: {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        address: {
          type: String,
        },
        requirements: {
          type: [String],
        },
        aboutCompany: {
          type: String,
        },
      },
    };
  }
  next();
});

// CREATE MODEL
const UserModel = mongoose.model("User", userSchema);

// EXPORT MODEL
module.exports = UserModel;
