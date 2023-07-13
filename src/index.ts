import { AppDataSource } from "./data-source"
import { Customer } from "./entity/Customer"

AppDataSource.initialize().then(async () => {
    const customer1 = new Customer()
    console.log("new customer created")

    // console.log("Inserting a new user into the database...")
    // const user = new Customer()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(Customer)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
