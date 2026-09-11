Lecture 01 - Back-end development Roadmap

# The core 2 components of programming which we need before learning  backend development.

1. A programming language                  // It can be JS, Java, Python, C++
# The programming language you are using is going to decide which backend framework you will be using.
#   For JS: it's => `Node.js + Express.js`

2. database essentials              // It can be MongoDB, MySQL, PostgreSQL, or SQLite.
# we'll explore DataBases with `MongoBd + Mongoose`
#   Additional tools we are going to use while exploring databases are what `ORMs` and what `ODMs`.
    1) ORMs : they stand for `Object Relational Mapping`. They are used to interact with relational databases like MySQL, PostgreSQL, or SQLite.
    2) ODMs : they stands for `object document mapping` and used to interact with non-relational databases such as MongoDB.

# ================================= JS based backend =================================

While building JavaScript-based backends, ideally, we are going to handle/interact with three types of use cases as a beginner/intermediate

1) Data :  Data can be strings, objects, arrays, or any value.
2) Files: files can be images, videos, PDFs, etc.
3) Third party APIs : They can be LLM APIs like ChatGPT, Gemini. & file upload APIs like Cloudinary, Multer. 

# ================================= backend - Big picture over view =================================
                
 
             # Clients                   # APIs                # Backend logic                                              # Database & logic

        _____________________          |         |           ____________________
       |                     |         |         |          |                    |
       |                     |         |    A    |          |                    |                                          ____________________ 
       |       BROWSER       | ------> |    P    | ------>  |      BACK-END      |     >>---------------                   |                    |
       |                     |   R     |    I    |          |                    |                      |                  |                    |
       |                     |   E     |         |          |      REQUESTS-     |                      |                  |                    |
       |_____________________|   Q     |         |          |     PROCESSING/    |                      |                  |                    |
                                 U     |         |          |     VALIDATIONS    |                       --------->>       |                    |
        _____________________    E     |         |          |                    |                                         |      DATA BASE     |
       |                     |   S     |    l    |          |                    |                       ---------<<       |                    |      
       |                     |   T     |    A    |          |   AUTHENTICATION-  |                      |                  |                    |
       |       MOBILE        |   S     |    Y    |          |    AUTHORIZATION   |                      |                  |                    |
       |                     | ------> |    E    | ------>  |                    |                      |                  |                    |
       |                     |         |    R    |          |                    |     <<---------------                   |                    |
       |_____________________|         |         |          |____________________|                                         |____________________|
      

# ============== Standard folder structure for a JavaScript-based backend ================
 
    ├── index           → Entry point / starts application
    ├── app             → Configures Express application
    ├── constants       → Shared constant values
    ├── backend/
    |       ├── db                  → core db logic
    |       ├── models              → db data schemas
    |       ├── controllers         → backend logic functions 
    |       ├── routes              → API routs who eventually calls the controllers 
    |       ├── middlewares         → specific data processing/computing 
    |       ├── utils               → reusable code snippets for overall backend
    |       └── More (According to project needs)
    ├── package.json        → project dependencies & versioning maintenance 
    ├── env                 → Environment-specific configuration/secrets
    └── lint, prettier, readme, etc
    

Lecture 02 - Connecting frontend with backend 
    Learned about : -
1) how to connect the front-end with the backend.
2) how to resolve cross-origin errors (CORS) & How to set up proxies in front-end configuration.
3) Built a very basic full-stack project.

Lecture 03 - Data Modeling with Mongoose 
    Learned about : -
1) how to create models schemas using the `mongoose.Schema(), mongoose.model()` methods.
2) how to define relations between models schemas using `type: mongoose.Schema.Types.ObjectId, ref: 'SchemaName'`.

Lecture 04 - Starting a full stack backend focused project  
    Learned about : -
1) how to setup a professional Backend project
2) some new project files like - `.gitKeep` `.prettierrc` `.prettierignore`. also how to generate .gitignore files using services like `gitignore generators`.
3) dependencies and dev-dependencies, how to install maintain them & keep them separate. 

Lecture 05 - Connecting the DataBase with project 
    Learned about : -
1) how setup a `MongoDb` DataBase using `MongoDb Atlas` service.
3) how to connect DataBase & backend using `mongoose.connect()` and the `async-await + try-catch` syntax