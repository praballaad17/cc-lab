const express = require("express");


const app = express();
require("./startups/cors")(app);
app.use(express.json({ limit: '50mb' }));
const { mongofunction } = require("./startups/mongodb");
const User = require("./userModal");
const Auth = require("./AuthModal");
const Salary = require("./SalaryModal");


mongofunction(app);

app.get("/api/get-user/:employeeId", async (req, res) => {
    console.log(req.params.employeeId);
    try {
        const user = await User.find({ employeeId: req.params.employeeId });
        console.log(user);
        res.status(200).send(user[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send("error while getting user.")
    }
})

app.get("/api/get-salary/:employeeId", async (req, res) => {
    console.log(req.params.employeeId);
    try {
        const user = await User.find({ employeeId: req.params.employeeId });
        const salary = await Salary.find({ employeeId: req.params.employeeId });
        console.log(user);
        res.status(200).send({ user: user[0], salary: salary[0] });
    } catch (error) {
        console.log(error);
        res.status(500).send("error while getting user.")
    }
})

app.post("/api/login", async (req, res) => {
    const { employeeId, password } = req.body.user;
    console.log(req.body.user);

    if (!employeeId || !password) {
        return res
            .status(400)
            .send({ error: 'Please provide both a employeeId and a password.' });
    }

    try {
        const user = await User.findOne({ employeeId });
        if (!user) {
            return res.status(401).send({
                error: 'The credentials you provided are incorrect, please try again.',
            });
        }
        console.log(user);
        const auth = await Auth.findOne({ employeeId })
        console.log(auth);
        if (password != auth.password) {
            return res.status(400).send("Wrong password");
        }
        else {
            return res.status(200).send({ user, auth });
        }
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})
app.post("/api/signup", async (req, res) => {
    const { employeeId, firstName, lastName, dob, phone, password } = req.body.user
    console.log(req.body.user);
    try {
        const user = User({
            employeeId,
            firstName,
            lastName,
            dob,
            phone
        });

        const auth = Auth({
            employeeId,
            password
        })
        const salary = Salary({
            employeeId,
            jobRole: "Professor",
            monthlySalary: "800000",
            yearlyBonus: "20000"
        })

        await user.save();
        await auth.save();
        await salary.save();
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("error while adding user.")
    }
});



const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));