class GtrendsController{
    constructor() {
        this.gtrendsRespository = require('../model/GtrendsRepository')
    }


    // async addStudent(req, res) {
    //     let student = await this.RegistrationRespository.addStudent(req.body)
    //     res.status(201).send(student)
    // }

    // getInputs(req, res) {
    //     this.gtrendsRespository.loadDataFromJsonFiles()
    //         .then(inputs => JSON.parse(inputs))
    //         .catch(err => ))
    // }

    getStudent(req, res) {
        this.RegistrationRespository.getStudent(req.params.studentId)
            .then(student => {
                console.log('getStudent', student)
                if (student) {
                    res.json(student)
                }
                else {
                    res.status(404).send('no student found')
                }
            })
            .catch(err => res.status(500).send(err))
    }

    updateStudent (req, res) {
        this.RegistrationRespository.updateStudent(req.params.studentId, req.body)
            .then((updateResult) => {
                console.log("Controller.updateStudent", updateResult)
                res.status(200).send("Student saved")
            })
            .catch(err => res.status(500).send(err))
    }

    deleteStudent (req, res) {
        this.RegistrationRespository.deleteStudent(req.params.studentId)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    async initDb (req, res) {
        await this.RegistrationRespository.initDb()
        if (res) {
            res.status(200).send('done')
        }
    }
}

module.exports = new RegistrationController()