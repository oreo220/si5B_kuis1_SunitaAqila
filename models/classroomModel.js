let classrooms = [
    {
        id: 1,
        kodeRuang: "A-301",
        gedung: "A",
        lantai: 3,
        kapasitas: 40,
        adaProyektor: true
    },
    {
        id: 2,
        kodeRuang: "A-406",
        gedung: "A",
        lantai: 4,
        kapasitas: 35,
        adaProyektor: true
    },
    {
        id: 3,
        kodeRuang: "B-605",
        gedung: "B",
        lantai: 6,
        kapasitas: 45,
        adaProyektor: false
    }
];

let nextId = 4;

function getAll(gedung) {
    if (gedung) {
        return classrooms.filter((c) => c.gedung === gedung);
    }
    return classrooms;
}

function getById(id) {
    return classrooms.find((c) => c.id === id);
}

function create(data) {
    const baru = { id: nextId++, ...data };
    classrooms.push(baru);
    return baru;
}

function update(id, data) {
    const index = classrooms.findIndex((c) => c.id === id);
    if (index === -1) return null;
    classrooms[index] = {
        ...classrooms[index],
        ...data,
        id
    };
    return classrooms[index];
}

function remove(id) {
    const index = classrooms.findIndex((c) => c.id === id);
    if (index === -1) return false;
    classrooms.splice(index, 1);
    return true;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};