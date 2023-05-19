const mongoose = require('mongoose')

const password = 'atlas'
const dbname = 'poruke-api'

const url = `mongodb+srv://lucijakrsticevic:${password}@cluster0.qpriudf.mongodb.net/${dbname}?retryWrites=true&w=majority`

const porukaShema = new mongoose.Schema({
    sadrzaj: String,
    datum: Date,
    vazno: Boolean
})

const Poruka = mongoose.model('Poruka', porukaShema, 'poruke')

const novaPoruka = new Poruka({
    sadrzaj: 'Mongoose poruka',
    datum: new Date(),
    vazno: true
})

const novaPoruka1 = new Poruka({
    sadrzaj: 'Mongoose poruka1',
    datum: new Date(),
    vazno: false
})

const novaPoruka2 = new Poruka({
    sadrzaj: 'Mongoose poruka2',
    datum: new Date(),
    vazno: true
})

mongoose.connect(url)
.then( () => {
    novaPoruka.save()
    novaPoruka1.save()
    novaPoruka2.save()
    .then(result => {
        console.log("Poruka spremljena");
        console.log(result);
        mongoose.connection.close()
    })
})