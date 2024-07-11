// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// // Define structure of user document in MongoDB
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
//     type: Schema.Types.Mixed,
//   },
// });

// // Check if role is job-seeker or employer and initialize profile accordingly
// userSchema.pre("save", function (next) {
//   if (this.role === "job-seeker") {
//     this.profile = {
//       resume: {
//         skills: {
//           type: String,
//           default: "n/a",
//         },
//         contactNumber: {
//           type: String,
//           default: "n/a",
//         },
//         address: {
//           type: String,
//           default: "n/a",
//         },
//       },
//     };
//   } else if (this.role === "employer") {
//     this.profile = {
//       company: {
//         name: {
//           type: String,
//           default: "n/a",
//         },
//         contactNumber: {
//           type: String,
//           default: "n/a",
//         },
//         website: {
//           type: String,
//           default: "n/a",
//         },
//         address: {
//           type: String,
//           default: "n/a",
//         },
//         about: {
//           type: String,
//           default: "n/a",
//         },
//       },
//     };
//   }
//   next();
// });

// // CREATE MODEL
// // Create a model named "users" (a collection in MongoDB) based on the
// // structure defined in userSchema
// // Model can be used to interact with the "users" collection by:
// // 1. Saving data, by defining a new instance of the model and calling save()
// // 2. Querying data, by using methods like find(), findOne(), findById(), etc.
// const UserModel = mongoose.model("users", userSchema);

// // EXPORT MODEL
// module.exports = UserModel;

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define structure of user document in MongoDB
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
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: {
      resume: {
        skills: {
          type: String,
          default: "n/a",
        },
        contactNumber: {
          type: String,
          default: "n/a",
        },
        address: {
          type: String,
          default: "n/a",
        },
        about: {
          type: String,
          default: "n/a",
        },
        education: {
          type: String,
          default: "n/a",
        },
        linkedin: {
          type: String,
          default: "n/a",
        },
      },
      company: {
        name: {
          type: String,
          default: "n/a",
        },
        contactNumber: {
          type: String,
          default: "n/a",
        },
        website: {
          type: String,
          default: "n/a",
        },
        address: {
          type: String,
          default: "n/a",
        },
        about: {
          type: String,
          default: "n/a",
        },
      },
    },
  },
});

// CREATE MODEL
const UserModel = mongoose.model("users", userSchema);

// EXPORT MODEL
module.exports = UserModel;
