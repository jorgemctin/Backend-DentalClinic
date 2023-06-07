const { Role } = require("../models");
const role = require("../models/role");
const authController = require("./authController");
const { QueryTypes } = require('sequelize');


const roleController = {};

roleController.createRole = async(req, res) => {
    try {
        const { name } = req.body;

        //validaciones

        const newRole = await Role.create(
            {
                name,
            }
        );
        
        return res.json({
            success: true,
            message: "Role created",
            data: newRole
        });       
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Role cant be created",
                error: error
            }
        )
    }
}

roleController.updateRole = async(req, res) => {
    try {
        const roleId = req.params.id;

        const role = await role.findByPk(roleId);

        if (!role) {
            return res.json(
                {
                    success: true,
                    message: "Role doesnt exists"
                }
            );
        };

        const { name } = req.body;

        const roleUpdated = await role.update(
            {
                name
            },
            {
                where: {
                    id: roleId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "Role updated",
                data: roleUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Role cant be updated",
                error: error
            }
        )
    }
}

roleController.deleteRole = async(req, res) => {
    try {
        const roleId = req.params.id;

        const deleteRole = await role.destroy({
            where: {
                id: roleId
            }
        })

        return res.json(
            {
                success: true,
                message: "Role deleted successfully",
                data: deleteRole
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Role cant be deleted",
                error: error
            }
        )
    }
}

roleController.getAllRoles = async(req, res) => {
    try {
        const roles = await role.findAll();

        return res.json(
            {
                success: true,
                message: "Get all roles retrieved",
                data: roles
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Roles cant be retrieved",
                error: error.message
            }
        )
    }
}

module.exports = roleController;