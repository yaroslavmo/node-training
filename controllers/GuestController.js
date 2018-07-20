const Guest = require('../models/Guest');


class GuestController {
    find(query) {
        return Guest.find()
    }

    create(quest) {
        return Guest.create(guest)
    }

    findById(id){
        return Guest.findById(id)
    }
    removeById(id){
        return Guest.findByIdAndRemove(id)
    }
    updateById(id){
        return Guest.findByIdAndUpdate(id, guest, {new: true})
    }
}

module.exports = new GuestController();