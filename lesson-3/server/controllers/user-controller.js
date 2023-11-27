const MOCK_DATA = require('../data/mock-data');

const handleGet = (req, res) => {
    return res.json({ data: MOCK_DATA });
};

const handlePost = (req, res) => {};

const handlePut = () => {};

const handleDelete = () => {};

module.exports = { handleGet, handlePost, handlePut, handleDelete };
