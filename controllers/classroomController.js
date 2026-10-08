const classroomModel = require("../models/classroomModel");

const { errorHttp } = require("../middlewares/errorHandler");

exports.getAll = (req, res) => {
    const gedung = req.query.gedung;

    res.json(classroomModel.getAll(gedung));
};

exports.getById = (req, res, next) => {
    const id = parseInt(req.params.id);

    const data = classroomModel.getById(id);

    if (!data) {
        return next(errorHttp(404, "Ruang kelas tidak ditemukan"));
    }

    res.json(data);
};

exports.create = (req, res, next) => {
    const {
        kodeRuang,
        gedung,
        lantai,
        kapasitas,
        adaProyektor
    } = req.body;

    if (!kodeRuang || !gedung || kapasitas === undefined) {
        return next(
            errorHttp(
                400,
                "kodeRuang, gedung, dan kapasitas wajib diisi"
            )
        );
    }

    const baru = classroomModel.create({
        kodeRuang,
        gedung,
        lantai,
        kapasitas,
        adaProyektor
    });

    res.status(201).json(baru);
};

exports.update = (req, res, next) => {
    const id = parseInt(req.params.id);

    const data = classroomModel.getById(id);

    if (!data) {
        return next(errorHttp(404, "Ruang kelas tidak ditemukan"));
    }

    const {
        kodeRuang,
        gedung,
        lantai,
        kapasitas,
        adaProyektor
    } = req.body;

    if (!kodeRuang || !gedung || kapasitas === undefined) {
        return next(
            errorHttp(
                400,
                "kodeRuang, gedung, dan kapasitas wajib diisi"
            )
        );
    }

    const updated = classroomModel.update(id, {
        kodeRuang,
        gedung,
        lantai,
        kapasitas,
        adaProyektor
    });

    res.json(updated);
};

exports.remove = (req, res, next) => {
    const id = parseInt(req.params.id);

    const data = classroomModel.getById(id);

    if (!data) {
        return next(errorHttp(404, "Ruang kelas tidak ditemukan"));
    }

    classroomModel.remove(id);

    res.status(204).send();
};