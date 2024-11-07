import { createData } from "../services/fileService.js";


export const createItem = async(req, res) => {
    try {
        const data = req.body
        await createData(data);

        res.status(201).json({
            message: 'Data created Succesfully',
            status: 201,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error at create data',
            status: 500,
            error
        })
    }
}