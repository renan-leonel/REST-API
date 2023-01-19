import Users from "../models/User.js";

class UserController{
    static listUsers = (req, res) => {
        Users.find((err, users) => {
            res.status(200).json(users)
        })
    }

    static listUsersById = (req, res) => {
        const id = req.params.id

        Users.findById(id, (err, users) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            }
            else{
                res.status(200).send(users)
            }
        })
    }

    static createUser = (req, res) => {
        let {user, password} = req.body
        let newUser = {
            user: user,
            password: password
        }

        let userExists = Users.findOne(user)

        if(userExists){
            res.status(400).send({
                message: "Usuário já cadastrado"
            })
            return
        }

        try {
            Users.create(newUser)
            res.status(200).send(newUser)
        } catch (error) {
            res.status(400).send({message: `${error.message} - teste`}) 
        }
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        Users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id
        Users.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default UserController