import express from 'express'; //ye nhi chlra mkc pack.json me jake 
// thik kro add kro type module

const app=express();

app.get('/',(req,res)=>{
    res.send("chaloooooo");
});
//industry standard banaya
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Learn JavaScript",
          description: "Understand the basics of JavaScript, including syntax, variables, and functions."
        },
        {
          id: 2,
          title: "Explore React",
          description: "Dive into React to build dynamic and responsive web applications."
        },
        {
          id: 3,
          title: "Master Backend",
          description: "Learn backend development with Node.js, Express, and database integration."
        },
        {
          id: 4,
          title: "Build a Project",
          description: "Create a full-stack application to consolidate your learning."
        }
      ];
      console.log(req)
      res.send(jokes);
})

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`jdbdj bndw port ${port} `)
})