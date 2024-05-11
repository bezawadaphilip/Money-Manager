const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://bezawadaphilip:Md101627@cluster0.0rdhh3c.mongodb.net/"
};

export default config;




// const config = {
//   env: process.env.NODE_ENV || 'development',
//   port: process.env.PORT || 3000,
//   jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
//   mongoUri: mongodb+srv:"bezawadaphilip:Md@101627@cluster0.0rdhh3c.mongodb.net/"
// }

// export default config


//mongodb+srv://bezawadaphilip:Md@101627@cluster0.0rdhh3c.mongodb.net/