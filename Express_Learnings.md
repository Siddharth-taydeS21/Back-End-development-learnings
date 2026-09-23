# 1. Express.js Mental modal

```
                        Client/frontEnd sends an Http request 
                                          ↓  ↓
                                          ↓  ↓
                                          
                                ### EXPRESS WORKFLOW ###
                                      
                                          ↓  ↓
                                          ↓  ↓              
                                                                                 
               Express Middlewares / HTTP request parsing/processing                                                                
   
                                          ↓  ↓
                                          ↓  ↓

           Matching the specific Routes + specific Middlewares operations           
   
                                          ↓  ↓
                                          ↓  ↓
                                                                                    
                            Controllers / Business logic                            
   
                                          ↓  ↓
                                          ↓  ↓
                                                                                    
                            Services layer / Database logic                         
   
                                          ↓  ↓
                                          ↓  ↓
                                                                                    
                            Final creation of HTTP response                         
   
                                          ↓  ↓
                                          ↓  ↓

         Client receives HTTP response (status codes, headers, json, other content)
                                                
```



# 2. most common/important Express.js methods

```javaScript
// ========== app methods ===========
app.listen()
app.use(middleware fn)
app.all(middleware fn)

app.get(path, controller)
app.post(path, controller)
app.put(path, controller)
app.patch(path, controller)
app.delete(path, controller)

app.route() // for chaining different methods on a same route : -
app.route(path) 
.get(controller)
.post(controller)
.patch(controller)

app.set() // used for settings headers
app.get() // used to check a specific header 

// ========== router methods ===========
router = express.router()
router.use(middlewareFn) // registers a middleware 

router.route() // for chaining different methods on a same route using router : -
router.route(path) 
.get(controller)
.post(controller)
.patch(controller)

router.param(specific parameter in the route, controllerFn) // runs when the specif parameter is available in the route
```



# 3. The request : `req` Object

- the request object represents the incoming HTTP request. 
- most commonly used properties in request object : -

```javaScript
request params : req.params
request query : req.query
request body : req.body
request headers : req.headers
request method : req.method
request url : req.url
request baseUrl : req.baseUrl
request path : req.path
request ip : req.ip
request originalUrl : req.originalUrl
```



# 4. The response : `res` Object

- the response object is what we use to construct and sent the data with the HTTP response
- the essential response object methods : -

```javaScript
res.status()
res.json()
res.send()
res.end()
res.sendStatus()
res.cookie()
res.clearCookie()
res.set()
res.get()
res.render()
res.sendFile()
res.download()
res.redirect() 
```



# 5. Express middlewares

- The middleware functions has access to the `req`, `res` & `next`. they can execute code, modify or transform request/response objects, end the request cycle and can pass the control to the other middleware function or a controller function.
- 3 common patterns to use middlewares

1. continue to the next handler

```javaScript
app.use((req, res, next) => {
    // preform some operations
    next() // continue to the next handler 
})
```

1. end the request and response cycle

```javaScript
app.use((req, res) => {
    res.status(403).json({
        massage: 'Forbidden'
    })
})
```

1. foreword an error

```javaScript
app.use((req, res, next) => {
    try{
        // preform operations
        next()
    }catch(err){
        next(err)
    }
})
```



# 6. Built in Express middlewares

Express js also provides built-in middlewares. such as : 

```javaScript
express.json()              // parses the json data
express.urlEncoded()        // parses the URL-encoded form submissions 
express.static()            // server static files 
express.raw()               // parses a req.body into a buffer 
express.text()              // parses a req.body as text
```



# 7 Error handling

- All basic http status codes
i am confident with: 
when to use/send them, 
which is the right choice for this specific error, 
where to search them if i stuck - MDN, Complete wiki page on http status codes
- error handling with:  centralized error handling middleware, custom `ApiError()` class
- express 5 vs 4
Express 5 automatically passes the error to the Express's error flow.
In Express 4, it requires code for passing the asynchronous error explicitly to the next() call.



# 8 Routing and API terminologies

- We should know how to separate the logic of Express routes, controllers, and services.
- Endpoint :
An endpoint is a particular HTTP location and related HTTP method.
- Route handler :
A callback function that runs on a specific matching route.
- Controller :
The application code, Often written in a function which is responsible for processing the incoming request and Coordinating/constructing the response. It is an architectural convention, not an official object or method from Express.
- Service layer: 
A place where we separate our reusable business logic and our database logic. It is separate from http focused code, and it's often database-specific code.



# 9 request lifecycle concepts



# 10 security best practices

- validate inputs 
- configure CORS
- always use security middlewares
- Authenticate and Authorize
- protect/never expose sensitive info in custom errors



# 11 must explore concepts and topics in future

```javaScript
app.enable()
app.disable()
app.disabled()
app.locals
res.locals
```

=======================================================================================================================================
Topics to practice : -

```javaScript
app.all()
```

Topics to discuss : -

- Express Error flow -

```javaScript
app.get('/users/:id', (req, res, next) => {
    try{
        // execute operation 
        next()
    }catch(err){
        next(err)
    }
})
```

- my very specific questions:  
what the next() will do with error? : next(error)?
what if there is no next middleware/controller and we passed the error in next()? 
if the error is passed to the next(error) then how the next() will handle it?
- deep dive into Services (DB specific logic?)
- what is CORS and what impact it creates on our project or what problems it can introduce in our project?
- what is proxy and what impact it creates on our project or what problems it can introduce in our project?

